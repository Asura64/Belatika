<?php

namespace App\Controller;

use App\Entity\CustomerOrder;
use App\Form\UserAddressesType;
use App\Service\GiftManager;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
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

            return $this->redirectToRoute('security_profile_show');
        }

        return $this->render('user/address.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/order/{reference<\d+>}")
     * @param CustomerOrder $customerOrder
     * @return RedirectResponse
     */
    public function order(CustomerOrder $customerOrder)
    {
        //Deprecated => redirect to orderController
        return $this->redirectToRoute('app_order_review', ['reference' => $customerOrder->getReference()]);
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