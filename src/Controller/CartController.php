<?php

namespace App\Controller;

use App\Entity\CustomerOrder;
use App\Entity\Gift;
use App\Entity\Item;
use App\Form\AddressType;
use Liip\ImagineBundle\Imagine\Cache\CacheManager;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use App\Entity\Address;

/**
 * @Route("/panier")
 */
class CartController extends AbstractController
{
    /**
     * @Route("/")
     * @param Request $request
     * @return Response
     */
    public function show(Request $request):Response
    {
        $isOrdering = $this->getPendingOrder($this->getUser()) !== null;

        $session = $this->getSessionFrom($request);

        $giftInSession = $session->get('gift');
        $gift = $giftInSession instanceof Gift ? $giftInSession : new Gift();
        if ($request->isMethod('POST')) {
            $gift->setCode($request->get('giftCode'));
            $gift = $this->checkGift($gift);
            if ($gift->updateStatus()->getValid()) {
                $session->set('gift', $gift);
            } else {
                $session->remove('gift');
            }
            $this->addFlash($gift->getValid() ? 'success' : 'danger', $this->gTrans($gift->getStatus()));
        }

        $cart = $session->get('cart');
        $total = $this->getTotal($cart, $gift);

        return $this->render('cart/index.html.twig', ['isOrdering' => $isOrdering, 'gift' => $gift, 'total' => $total]);
    }

    /**
     * @Route("/livraison/")
     * @param Request $request
     * @return Response
     */
    public function delivering(Request $request): Response
    {
        $em = $this->getEm();
        $address = new Address();
        $user = $this->getUser();
        if ($user) {
            $lastOrder = $em->getRepository(CustomerOrder::class)->findOneBy(['user' => $user], ['ordered_at' => 'desc']);
            if ($lastOrder instanceof CustomerOrder && $lastOrder->getAddress() instanceof Address) {
                $address = clone $lastOrder->getAddress();
            }
            $address->setEmail($user->getEmail());
        }

        $form = $this->createForm(AddressType::class, $address);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $address = $form->getData();
            $session = $request->getSession();

            $session->set('address', $address);

            return $this->redirectToRoute('app_order_index');
        }

        return $this->render('cart/delivering.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/add/{id<\d+>}/{quantity<\d+>?1}", name="app_cart_add")
     * @param Item $item
     * @param Request $request
     * @param integer $quantity
     * @param CacheManager $cacheManager
     * @return JsonResponse
     */
    public function add(Item $item, Request $request, int $quantity, CacheManager $cacheManager):JsonResponse
    {
        $session = $this->getSessionFrom($request);

        if(!$session->has('cart')) {
            $session->set('cart', array());
        }

        $cart = $session->get('cart');

        if(array_key_exists($item->getId(), $cart)) {
            /** @var Item $item_in_cart */
            $item_in_cart = $cart[$item->getId()];
            $quantity += $item_in_cart->getQuantity();
        }

        $em = $this->getDoctrine()->getManager();
        $stock = $item->getQuantity();
        $em->clear();
        $item
            ->setQuantity($quantity > $stock ? $stock : $quantity)
            ->setLink($this->generateUrl(
                'app_shop_item',
                [
                    'category_slug' => $item->getCategory()->getSlug(),
                    'customer' => $item->getCategory()->getCustomers(),
                    'slug' => $item->getSlug()
                ])
            )
            ->setRemoveLink($this->generateUrl(
                'app_cart_remove',
                [
                    'id' => $item->getId()
                ],
                UrlGeneratorInterface::ABSOLUTE_PATH)
            );
        $images = $item->getImages();
        $images[0]->setCachePath($cacheManager->getBrowserPath($images[0]->getWebPath(), 'icon'));
        $cart[$item->getId()] = $item;
        $session->set('cart', $cart);

        $message = $this->gTrans('Article ajouté au panier');

        $serializer = $this->get('serializer');

        return new JsonResponse([
            'message' => $message,
            'onSales' => $this->onSales(),
            'item' => $serializer->serialize($item, 'json', ['groups' => 'item']),
            'cart' => $serializer->serialize($cart, 'json', ['groups' => 'item'])
        ]);
    }

    /**
     * @Route("/remove/{id<\d+>}/{quantity<\d+>?0}", name="app_cart_remove")
     * @param Item $item
     * @param int $quantity
     * @param Request $request
     * @return JsonResponse|RedirectResponse
     */
    public function remove(Item $item, int $quantity, Request $request):Response
    {
        $session = $this->getSessionFrom($request);

        $cart = $session->get('cart');

        $item_id = $item->getId();

        if(is_array($cart) && array_key_exists($item_id, $cart)){
            $item = $cart[$item_id];
            if($quantity === 0 || $item->getQuantity() <= $quantity) {
                unset($cart[$item_id]);
            }else{
                $item->setQuantity($item->getQuantity() - $quantity);
                $cart[$item_id] = $item;
            }
            $session->set('cart', $cart);
        }

        $message = $this->gTrans('Article Retiré du panier');

        $serializer = $this->get('serializer');

        if ($request->isMethod('POST')) {
            return new JsonResponse([
                'message' => $message,
                'onSales' => $this->onSales(),
                'item' => $serializer->serialize($item, 'json', ['groups' => 'item']),
                'cart' => $serializer->serialize($cart, 'json', ['groups' => 'item'])
            ]);
        } else {
            return $this->redirectToRoute('app_cart_show');
        }
    }

    /**
     * @Route("/remove-gift")
     * @param Request $request
     * @return RedirectResponse
     */
    public function removeGift(Request $request)
    {
        $session = $this->getSessionFrom($request);

        $session->remove('gift');
        return $this->redirectToRoute('app_cart_show');
    }

    /**
     * @param Item[] $cart
     * @param Gift $gift
     * @return int
     */
    private function getTotal($cart, Gift $gift)
    {
        $total = 0;

        if (!is_array($cart)) {
            return $total;
        }

        foreach ($cart as $item) {
            $total += $item->getQuantity() * ($this->onSales() ? $item->getDiscountPrice() : $item->getPrice());
        }

        if ($this->onSales()) {
            return $total;
        }

        $gift = $this->checkGift($gift);
        if (!$gift instanceof Gift || !$gift->updateStatus()->getValid()) {
            return $total;
        }

        $total -= $gift->getValue();

        return max($total, 0);
    }
}