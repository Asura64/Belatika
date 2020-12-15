<?php

namespace App\Controller;

use App\Entity\Item;
use App\Entity\CustomerOrder;
use App\Entity\CustomerOrderLine;
use App\Entity\Payment;
use App\Entity\User;
use App\Service\GoogleTranslator;
use Spipu\Html2Pdf\Exception\Html2PdfException;
use Spipu\Html2Pdf\Html2Pdf;
use Stripe\PaymentIntent;
use Stripe\Stripe;
use Swift_Mailer;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

/**
 * @Route("/commande")
 */
class OrderController extends AbstractController
{
    /**
     * @var User
     */
    private $user;

    private string $stripeSecretKey;
    private string $stripePublicKey;

    public function __construct(
        GoogleTranslator $googleTranslator,
        Swift_Mailer $mailer,
        TokenStorageInterface $tokenStorage,
        string $stripeSecretKey,
        string $stripePublicKey
    )
    {
        parent::__construct($googleTranslator, $mailer);
        $user = $tokenStorage->getToken()->getUser();
        $this->user = $user instanceof User ? $user : null;
        $this->stripeSecretKey = $stripeSecretKey;
        $this->stripePublicKey = $stripePublicKey;
    }

    /**
     * @Route("/")
     * @param Request $request
     * @return Response
     */
    public function index(Request $request): Response
    {
        $pendingOrder = $this->getPendingOrder(
            $this->user,[
                'gift',
                [
                    'customerOrderLines',
                    'item',
                    'images',
                ],
            ]
        );
        if ($pendingOrder === null) {
            $session = $this->getSessionFrom($request);

            $order = $this->createOrder($session);
            $this->getEm()->persist($order);
            $this->getEm()->flush();

            $session->set('orderId', $order->getId());
        } else {
            $order = $pendingOrder;
        }

        $order = $this->updateOrder($order);

        Stripe::setApiKey($this->stripeSecretKey);

        $payment = $order->getPayment();
        if ($payment instanceof Payment) {
            $intentId = $payment->getIdentifier();
            try {
                //Récupération intention de paiement
                $intent = PaymentIntent::retrieve($intentId);
                $this->alertAdmin('Récupération intention de paiement', 'ID de paiement: '.$intent->id);
            } catch (\Exception $e) {
                $payment->reset();
            }
        }

        if (!isset($intent)) {
            $amount = (max(0, $order->getTotal() - $order->getGiftValueUsed()) + $order->getShipping()) * 100;
            //Création intention de paiement
            $intent = PaymentIntent::create([
                'amount' => $amount,
                'currency' => 'eur'
            ]);
            $this->alertAdmin('Création intention de paiement', 'ID de paiement: '.$intent->id);

            $payment = $payment instanceof Payment ? $payment : new Payment();
            $payment
                ->setMethod('Stripe intent')
                ->setIdentifier($intent->id);
            $this->getEm()->persist($payment);
            $order->setPayment($payment);
            $this->getEm()->flush();
        }

        return $this->render('order/index.html.twig', [
            'order' => $order,
            'stripe_public_key' => $this->stripePublicKey,
            'stripe_intent_secret' => $intent->client_secret
        ]);
    }

    /**
     * @Route("/confirmation")
     * @param Request $request
     * @return Response
     */
    public function confirmation(Request $request)
    {
        $session = $this->getSessionFrom($request);
        $session->remove('cart');
        $session->remove('gift');
        $session->remove('address');
        return $this->render('order/confirmation.html.twig');
    }

    /**
     * @param SessionInterface $session
     * @return CustomerOrder
     */
    private function createOrder(SessionInterface $session): CustomerOrder
    {
        $items = $session->get('cart');
        $gift = $session->get('gift');
        $address = $session->get('address');

        $gift = $this->checkGift($gift);
        $order = new CustomerOrder();
        $token = rtrim(strtr(base64_encode(random_bytes(32)), '+/', '-_'), '=');
        $order->setUser($this->user)->setAddress($address)->setGift($gift)->setToken($token);

        foreach ($items as $cartItem) {
            $item = $this->getEm()->getRepository(Item::class)->find($cartItem->getId());
            $orderLine = new CustomerOrderLine();
            $orderLine
                ->setItem($item)
                ->setQuantity($cartItem->getQuantity())
                ->setPrice($item->getPrice())
                ->setDiscount($this->onSales() ? $item->getDiscount() : 0);
            $order->addCustomerOrderLine($orderLine);
        }

        return $order;
    }

    /**
     * @Route("/remove")
     * @return Response
     */
    public function remove() {

        $order = $this->getPendingOrder($this->getUser());
        if ($order instanceof CustomerOrder) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($order);
            $em->flush();
        }

        return $this->redirectToRoute('app_shop_index');
    }

    /**
     * @Route("/report-error")
     * @param Request $request
     * @return JsonResponse
     */
    public function reportError(Request $request)
    {
        $errors = $request->get('errors');
        $arrayErrors = json_decode($errors);
        $this->alertAdmin('Echec tentative de paiement', is_array($arrayErrors) ? implode("\r\n",  $arrayErrors) : $errors);
        return $this->json([]);
    }

    /**
     * @Route("/review/{reference<\d+>}")
     * @param CustomerOrder $customerOrder
     * @param Request $request
     * @return Response
     * @throws Html2PdfException
     */
    public function review(CustomerOrder $customerOrder, Request $request)
    {
        $pdf = $request->get('mode') === 'pdf';
        $token = $request->get('token');

        $user = $this->getUser();

        $accessAllowed = false;
        $isOwner = false;
        if ($user instanceof User && $user->isAdmin()) {
            $accessAllowed = true;
        } elseif ($customerOrder->getToken() && $token === $customerOrder->getToken()) {
            $accessAllowed = true;
            $isOwner = true;
        } elseif ($customerOrder->belongsTo($user)) {
            $accessAllowed = true;
            $isOwner = true;
        } elseif ($customerOrder->getUser() && !$user) {
            return $this->redirectToRoute('security_login');
        }

        if (!$accessAllowed) {
            return $this->redirectToRoute('app_shop_index');
        }

        if ($request->isMethod('POST')) {
            $rate = intval($request->get('rating'));
            $review = strip_tags($request->get('content'));
            if ($rate > 0 && (!empty($review) || $rate > 2)) {
                $customerOrder->setRating($rate)->setReview($review);
                $em = $this->getDoctrine()->getManager();
                $em->persist($customerOrder);
                $em->flush();
            }
        }

        if ($pdf) {
            $html = $this->renderView('order/order.pdf.twig', [
                'order' => $customerOrder,
            ]);

            $html2pdf = new Html2Pdf('P', 'A4', 'fr');
            $html2pdf->setDefaultFont('Arial');
            $html2pdf->pdf->SetAuthor('Belatika');
            $html2pdf->pdf->SetDisplayMode('real');
            $html2pdf->pdf->SetTitle('Facture_' . $customerOrder->getReference() . '.pdf');
            $html2pdf->writeHTML($html);
            $html2pdf->output('Facture_' . $customerOrder->getReference() . '.pdf');

            $response = new Response();
            $response->headers->set('Content-type', 'application/pdf');

            return $response;
        } else {
            return $this->render('order/order.html.twig', [
                'order' => $customerOrder,
                'isOwner' => $isOwner,
            ]);
        }
    }
}
