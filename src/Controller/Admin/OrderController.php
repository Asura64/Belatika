<?php


namespace App\Controller\Admin;


use App\Controller\AdminController;
use App\Entity\CustomerOrder;
use App\Service\API\LaPoste;
use App\Service\GoogleTranslator;
use Swift_Mailer;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/order")
 */
class OrderController extends AdminController
{
    private string $laposteSecretKey;

    public function __construct(GoogleTranslator $googleTranslator, Swift_Mailer $mailer, string $laposteSecretKey)
    {
        parent::__construct($googleTranslator, $mailer);
        $this->laposteSecretKey = $laposteSecretKey;
    }

    /**
     * @Route("/")
     * @return Response
     */
    public function orders()
    {
        $laPoste = new LaPoste(getenv('LAPOSTE_SECRET_KEY'));
        /**
         * @var CustomerOrder[] $orders
         */
        $orders = $this->getDoctrine()->getManager()->getRepository(CustomerOrder::class)->findBy(['is_valid' => 1], ['ordered_at' => 'DESC']);
        foreach ($orders as $order) {
            if ($order->getTrackingNumber() && !$order->getReceivedAt()) {
                $status = $laPoste->getStatus($order->getTrackingNumber());
                $status = isset($status->shipment->timeline) && is_array($status->shipment->timeline) ? array_pop($status->shipment->timeline)->shortLabel : $status->returnMessage;
                $order->setShippingStatus($status);
            }
        }

        return $this->render('admin/order/index.html.twig', ['orders' => $orders]);
    }



    /**
     * @Route("/send/{reference<\d+>}")
     * @param CustomerOrder $order
     * @param Request $request
     * @return RedirectResponse
     */
    public function send(CustomerOrder $order, Request $request)
    {
        $trackingNumber = $request->get('tracking_number');
        $trackingNumber = str_replace(' ', '', $trackingNumber);
        $order->setTrackingNumber($trackingNumber);
        $order->setSentAt(date_create());
        $order->setIsSent(true);
        $em = $this->getDoctrine()->getManager();
        $em->flush();

        $this->fastMail($this->gTrans('Votre commande Belatika est en route'), $order->getAddress()->getEmail(), 'mail/sentOrder.html.twig', ['order' => $order]);

        return $this->redirectToRoute('app_admin_order_orders');
    }
}