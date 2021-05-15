<?php

namespace App\Controller;


use App\Entity\CustomerOrder;
use App\Entity\Item;
use App\Entity\User;
use App\Service\Config;
use App\Service\Google\Merchant;
use App\Service\GoogleTranslator;
use Stripe\Exception\SignatureVerificationException;
use Stripe\Webhook;
use Swift_Mailer;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
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

    private Merchant $googleMerchant;

    public function __construct(
        GoogleTranslator $googleTranslator,
        Swift_Mailer $mailer,
        TokenStorageInterface $tokenStorage,
        Config $config,
        Merchant $googleMerchant
    )
    {
        parent::__construct($googleTranslator, $mailer, $config);
        $user = $tokenStorage->getToken()->getUser();
        $this->user = $user instanceof User ? $user : null;
        $this->googleMerchant = $googleMerchant;
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
                $payload, $sig_header, $this->config->getStripeSecretWebhook()
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
     * @Route("/paypal/{id}", methods={"POST"})
     * @param CustomerOrder $order
     * @return Response
     */
    public function paypal(CustomerOrder $order): Response
    {
        $this->validateOrder($order);
        return $this->json([]);
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
            [$this->config->getAdminMail(), $this->config->getDevMail()],
            'mail/confirmedOrderSeller.html.twig',
            ['order' => $order]);
        $this->addFlash('success', $this->gTrans('Merci pour votre commande, vous la recevrez très rapidement!'));
        $this->googleMerchant->generateProductsStream();
        return $this->redirectToRoute('app_order_confirmation');
    }
}