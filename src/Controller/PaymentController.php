<?php

namespace App\Controller;


use App\Entity\CustomerOrder;
use App\Entity\Item;
use App\Entity\User;
use App\Service\GoogleTranslator;
use PayPal\Api\Amount;
use PayPal\Api\Details;
use PayPal\Api\Item as PaypalItem;
use PayPal\Api\ItemList;
use PayPal\Api\Payer;
use PayPal\Api\PayerInfo;
use PayPal\Api\Payment as PaypalPayment;
use PayPal\Api\PaymentExecution;
use PayPal\Api\RedirectUrls;
use PayPal\Api\ShippingAddress;
use PayPal\Api\Transaction;
use PayPal\Auth\OAuthTokenCredential;
use PayPal\Exception\PayPalConnectionException;
use PayPal\Rest\ApiContext;
use Stripe\Exception\SignatureVerificationException;
use Stripe\Webhook;
use Swift_Mailer;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/paiement")
 */
class PaymentController extends AbstractController
{
    const STRIPE_METHOD = 'Stripe';

    /**
     * @var User
     */
    private $user;

    private string $stripeSecretWebhook;

    public function __construct(
        GoogleTranslator $googleTranslator,
        Swift_Mailer $mailer,
        TokenStorageInterface $tokenStorage,
        string $stripeSecretWebhook
    )
    {
        parent::__construct($googleTranslator, $mailer);
        $user = $tokenStorage->getToken()->getUser();
        $this->user = $user instanceof User ? $user : null;
        $this->stripeSecretWebhook = $stripeSecretWebhook;
    }

    /**
     * @Route("/stripe")
     */
    public function stripe()
    {
        $payload = @file_get_contents('php://input');
        $sig_header = $_SERVER['HTTP_STRIPE_SIGNATURE'];
        $event = null;

        try {
            $event = Webhook::constructEvent(
                $payload, $sig_header, $this->stripeSecretWebhook
            );
        } catch (\UnexpectedValueException $e) {
            // Invalid payload
            http_response_code(400);
            exit();
        } catch (SignatureVerificationException $e) {
            // Invalid signature
            http_response_code(400);
            exit();
        }

        $intent = $event->data->object;
        $order = $this->getEm()->getRepository(CustomerOrder::class)->getOrderByIntentId($intent->id);
        if (!$order instanceof CustomerOrder) {
            $this->alertAdmin(
                'Problème site ou client - erreur paiement',
                date_create()->format('d/m/Y h:i:s'). "Un évènement Stripe de type ". $event->type . " a été capté, mais l'id ".$intent->id."ne correspond à aucune commande"
            );
            return new Response('Failed: '. $intent->id. " no matching order", 200);
        }

        if ($event->type === "payment_intent.succeeded") {
            $intent = $event->data->object;
            $this->validateOrder($order);
            return new Response('Succeeded: '. $intent->id, 200);
        } elseif ($event->type === "payment_intent.payment_failed") {
            $intent = $event->data->object;
            $error_message = $intent->last_payment_error ? $intent->last_payment_error->message : "";
            $this->alertAdmin(
                'Problème site ou client - echec paiement',
                'L\erreur suivante est survenue lorque l\'utilisateur '.$order->getAddress()->getFirstname().' '.$order->getAddress()->getLastname().' a voulu payer: '.$error_message
            );
            $this->fastMail('Echec de paiement', $order->getAddress()->getEmail(), 'mail/failPayment.html.twig');
            return new Response("Failed: ".$intent->id.", ".$error_message, 200);
        }
        return $this->redirectToRoute('app_order_index');
    }

    /**
     * @Route("/paypal")
     * @param Request $request
     * @return Response
     */
    public function paypal(Request $request): Response
    {
        if ($this->user) {
            $order = $this->getPendingOrder($this->user, ['gift', 'payment', ['customerOrderLines', 'item']]);
        } else {
            $session = $this->getSessionFrom($request);
            $orderId = $session->get('orderId');
            $order = $this->getEm()->getRepository(CustomerOrder::class)->find($orderId);
        }

        if ($order === null) {
            $this->addFlash('danger', $this->gTrans('Une erreur est survenue au moment de vérifier votre commande. Aucun paiement n\'a été effectué.'));
            return $this->redirectToRoute('app_shop_index');
        }
        $this->updateOrder($order);

        $paypal_client = getenv('APP_ENV') === 'prod' ? getenv('PAYPAL_CLIENT') : getenv('PAYPAL_CLIENT_TEST');
        $paypal_secret = getenv('APP_ENV') === 'prod' ? getenv('PAYPAL_SECRET') : getenv('PAYPAL_SECRET_TEST');
        $apiContext = new ApiContext(new OAuthTokenCredential($paypal_client, $paypal_secret));
        $mode = getenv('APP_ENV') === 'prod' ? 'live' : 'sandbox';
        $apiContext->setConfig(['mode' => $mode]);

        $transaction = $this->getTransaction($order);

        if ($request->query->has('paymentId') && $request->query->has('PayerID') && $request->query->has('token')) {
            $paymentId = $request->get('paymentId');
            $payerID = $request->get('PayerID');

            $paypalPayment = PaypalPayment::get($paymentId, $apiContext);
            $paymentExecution = new PaymentExecution();
            $paymentExecution->setPayerId($payerID)->addTransaction($transaction);
            try {
                $paypalPayment->execute($paymentExecution, $apiContext);
                return $this->validateOrder($order);
            } catch (\Exception $e) {
                $message = $e instanceof PayPalConnectionException ? json_decode($e->getData())->message : $e->getMessage();
                $this->addFlash('warning', $this->gTrans($message, true));
                return $this->redirectToRoute('app_order_index');
            }
        } else {
            $payerInfo = new PayerInfo();
            $payer = new Payer();
            $payer->setPayerInfo($payerInfo)->setPaymentMethod('paypal');

            $redirectUrls = new RedirectUrls();
            $cancelUrl = $this->generateUrl('app_order_index', [], UrlGeneratorInterface::ABSOLUTE_URL);
            $returnUrl = $this->generateUrl('app_payment_paypal', [], UrlGeneratorInterface::ABSOLUTE_URL);
            $redirectUrls->setCancelUrl($cancelUrl)->setReturnUrl($returnUrl);

            $paypalPayment = new PaypalPayment();
            $paypalPayment->setPayer($payer)->setRedirectUrls($redirectUrls)->addTransaction($transaction)->setIntent('sale');

            try {
                $paypalPayment->create($apiContext);
                return $this->redirect($paypalPayment->getApprovalLink());
            } catch (\Exception $e) {
                dump($e);die;
                $message = $e instanceof PayPalConnectionException ? json_decode($e->getData())->message : $e->getMessage();
                $this->addFlash('warning', $this->gTrans($message, true));
                return $this->redirectToRoute('app_order_index');
            }
        }
    }

    private function validateOrder(CustomerOrder $order): Response
    {
        $highestReference = $this->getDoctrine()->getRepository(CustomerOrder::class)->getHighestReference();
        $order
            ->setIsValid(true)
            ->setOrderedAt(date_create())
            ->setReference($highestReference + 1);
        $lines = $order->getCustomerOrderLines();
        foreach ($lines as $line) {
            $item = $this->getDoctrine()->getRepository(Item::class)->find($line->getItem()->getId());
            $item->setQuantity($item->getQuantity() - $line->getQuantity());
        }
        $this->getEm()->persist($order);
        $this->getEm()->flush();
        $this->fastMail($this->gTrans('Votre commande Belatika'), $order->getAddress()->getEmail(), 'mail/confirmedOrder.html.twig', ['order' => $order]);
        $this->fastMail(
            'Nouvelle commande!',
            [getenv('ADMIN_MAIL'), getenv('DEV_MAIL')],
            'mail/confirmedOrderSeller.html.twig',
            ['order' => $order]);
        $this->addFlash('success', $this->gTrans('Merci pour votre commande, vous la recevrez très rapidement!'));
        return $this->redirectToRoute('app_order_confirmation');
    }

    private function getTransaction(CustomerOrder $order): Transaction
    {
        $address = $order->getAddress();
        $itemList = new ItemList();
        $shippingAddress = new ShippingAddress();

        $shippingAddress
            ->setLine1($address->getAddress())
            ->setLine2($address->getAdditional())
            ->setPostalCode($address->getPostcode())
            ->setCity($address->getCity())
            ->setState($address->getCountry())
            ->setCountryCode($address->getCountryCode())
            ->setRecipientName($address->getFirstname() . ' ' . $address->getLastname());

        $itemList->setShippingAddress($shippingAddress);

        $customerOrderLines = $order->getCustomerOrderLines();
        $subTotal = 0;
        foreach ($customerOrderLines as $customerOrderLine) {
            $paypalItem = new PaypalItem();
            $item = $customerOrderLine->getItem();
            $paypalItem
                ->setName($item->getName())
                ->setQuantity($customerOrderLine->getQuantity())
                ->setCurrency('EUR')
                ->setPrice($customerOrderLine->getDiscountPrice());
            $itemList->addItem($paypalItem);
            $subTotal += $customerOrderLine->getQuantity() * $customerOrderLine->getDiscountPrice();
        }

        $details = new Details();
        $details->setSubtotal($subTotal)->setShipping($order->getShipping());

        $amount = new Amount();
        $amount
            ->setCurrency('EUR')
            ->setDetails($details)
            ->setTotal($subTotal + $order->getShipping());

        $transaction = new Transaction();
        $transaction
            ->setItemList($itemList)
            ->setAmount($amount)
            ->setDescription($this->gTrans('Votre achat sur'). ' belatika.com');

        return $transaction;
    }
}