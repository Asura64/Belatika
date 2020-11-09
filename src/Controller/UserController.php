<?php

namespace App\Controller;

use App\Entity\CustomerOrder;
use App\Form\UserAddressesType;
use App\Service\GiftManager;
use Spipu\Html2Pdf\Exception\Html2PdfException;
use Spipu\Html2Pdf\Html2Pdf;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/user")
 */
class UserController extends AbstractController
{
    /**
     * @Route("/address")
     * @param Request $request
     * @return Response
     */
    public function address(Request $request):Response
    {
        $form = $this->createForm(UserAddressesType::class, $this->getUser());
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $user = $form->getData();
            $em = $this->getDoctrine()->getManager();
            $sameAddress = $request->get('same-address') === 'on';
            if ($sameAddress) {
                $user->setBillingAddress(clone $user->getDeliveryAddress());
            }
            $em->persist($user);
            $em->flush();

            $this->clearUnusedAddresses();

            $this->addFlash('success', $this->gTrans('Votre adresse a bien été enregistrée.'));

            return $this->redirectToRoute('fos_user_profile_show');
        }

        return $this->render('user/address.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/order/{reference<\d+>}")
     * @param CustomerOrder $customerOrder
     * @param Request $request
     * @return Response
     * @throws Html2PdfException
     */
    public function order(CustomerOrder $customerOrder, Request $request)
    {
        $pdf = $request->get('mode') === 'pdf';

        $user = $this->getUser();

        if ($customerOrder->getUser() && $customerOrder->getUser()->getId() !== $user->getId() && !$user->isAdmin()) {
            return $this->redirectToRoute('fos_user_profile_show');
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
            ]);
        }
    }

    /**
     * @Route("/profile/toggle-newsletter", methods={"POST"})
     * @param Request $request
     * @param GiftManager $giftManager
     * @return JsonResponse
     */
    public function toggleNewsletter(Request $request, GiftManager $giftManager)
    {
        $user = $this->getUser();

        $em = $this->getDoctrine()->getManager();
        $subscribe = $request->get('subscribe');
        if ($subscribe) {
            if (!$user->hasNewsletterGift()) {
                $gift = $giftManager->createGift(['end' => date_create()->modify(('+2 days'))]);
                $user->setHasNewsletterGift(true);
                $this->fastMail('Votre code cadeau 🎁', $user->getEmail(), 'mail/newsletterGift.html.twig', ['gift' => $gift]);
                $em->persist($gift);
            }
            $user->setNewsletter(true);
        } else {
            $user->toggleNewsletter();
        }
        $em->persist($user);
        $em->flush();

        return $this->json(['newsletter' => $user->getNewsletter()]);
    }

    /**
     * @Route("/profile/stop-newsletter-suggestion", methods={"POST"})
     * @return JsonResponse
     */
    public function stopNewsletterSuggestion()
    {
        $user = $this->getUser();

        $user->setSuggestNewsletter(false);

        $em = $this->getDoctrine()->getManager();
        $em->persist($user);
        $em->flush();

        return $this->json(['newsletter_suggestion' => $user->getSuggestNewsletter()]);
    }
}