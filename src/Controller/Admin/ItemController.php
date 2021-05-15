<?php


namespace App\Controller\Admin;


use App\Controller\AdminController;
use App\Entity\Image;
use App\Entity\Item;
use App\Form\ItemType;
use App\Repository\ItemRepository;
use App\Service\Google\Merchant;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/item")
 */
class ItemController extends AdminController
{
    /**
     * @Route("/{page<\d+>?1}")
     * @param int $page
     * @param Request $request
     * @return Response
     */
    public function items(int $page, Request $request): Response
    {
        $manager = $this->getDoctrine()->getManager();
        /**
         * @var ItemRepository $itemRepository
         */
        $itemRepository = $manager->getRepository(Item::class);

        if ($request->isMethod('POST')) {
            $changes = [];
            foreach ($request->request->all() as $key => $value) {
                if (preg_match('#^ITEM_(\d+)_(.*)#', $key, $matches)) {
                    $id = $matches[1];
                    $field = $matches[2];
                    if (isset($changes[$id])) {
                        $changes[$id][$field] = $value;
                    } else {
                        $changes[$id] = [$field => $value];
                    }
                }
            }
            $changeItems = $itemRepository->findAllWithImages(
                [
                    'filters' => ['it.id in ('.implode(',', array_keys($changes)).')']
                ]
            );
            foreach ($changeItems as $item) {
                foreach ($changes[$item->getId()] as $key => $value) {
                    switch ($key) {
                        case 'FIRST_IMAGE_ALT':
                            $firstImage = $item->getImages()[0];
                            if ($firstImage->getAlt() != $value) {
                                $firstImage->setAlt($value);
                                $manager->persist($firstImage);
                            }
                            continue 2;
                            break;
                    }
                    $camelCase = implode(
                        '',
                        array_map('ucfirst',
                            array_map('strtolower',
                                explode('_', $key)
                            )
                        )
                    );
                    $setter = 'set'.$camelCase;
                    $getter = 'get'.$camelCase;
                    if (
                        method_exists($item, $getter)
                        && method_exists($item, $setter)
                        && $item->$getter() != $value
                    ) {
                        $item->$setter($value);
                        $manager->persist($item);
                    }
                }
            }
            $manager->flush();
        }

        $items = $itemRepository->findAllWithOrders();

        $items
            ->setCurrentPage($page)
            ->setMaxPerPage(100);

        return $this->render('admin/item/index.html.twig', [
            'items' => $items,
        ]);
    }

    /**
     * @Route("/add")
     * @param Request $request
     * @param Merchant $googleMerchant
     * @return Response
     */
    public function add(Request $request, Merchant $googleMerchant): Response
    {
        $form = $this->createForm(ItemType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $item = $form->getData();
            $em = $this->getDoctrine()->getManager();
            $em->persist($item);
            $em->flush();
            $googleMerchant->generateProductsStream();
            return $this->redirectToRoute('app_admin_item_items');
        }

        return $this->render('admin/item/edit.html.twig', [
            'form' => $form->createView(),
            'title' => 'Créer un bijou'
        ]);
    }

    /**
     * @Route("/edit/{id<\d+>}")
     * @param Request $request
     * @param Item $item
     * @param Merchant $googleMerchant
     * @return Response
     */
    public function edit(Request $request, Item $item, Merchant $googleMerchant): Response
    {
        $form = $this->createForm(ItemType::class, $item);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $item = $form->getData();
            $em = $this->getDoctrine()->getManager();
            $em->persist($item);
            $em->flush();
            $googleMerchant->generateProductsStream();
        }

        return $this->render('admin/item/edit.html.twig', [
            'form' => $form->createView(),
            'item' => $item,
            'title' => 'Modifier un bijou'
        ]);
    }

    /**
     * @Route("/delete/{id<\d+>}/{page<\d+>?1}/{row<\d+>?1}")
     * @param Item $item
     * @param Merchant $googleMerchant
     * @param int $page
     * @param int $row
     * @return Response
     */
    public function delete(Item $item, Merchant $googleMerchant, int $page, int $row): Response
    {
        if ($item->getCustomerOrderLines()->isEmpty()) {
            $this->getEm()->remove($item);
            $this->getEm()->flush();
            $googleMerchant->generateProductsStream();
        }

        return $this->redirectToRoute('app_admin_item_items', ['page' => $page, '_fragment' => 'row-'.$row]);
    }

    /**
     * @Route("/toggle-visible/{id<\d+>}/{page<\d+>?1}")
     * @param Item $item
     * @param Merchant $googleMerchant
     * @param int $page
     * @return Response
     */
    public function toggleVisible(Item $item, Merchant $googleMerchant, int $page): Response
    {
        $item->setVisible(!$item->getVisible());
        $this->getEm()->flush();
        $googleMerchant->generateProductsStream();

        return $this->redirectToRoute('app_admin_item_items', ['page' => $page, '_fragment' => 'ITEM_'.$item->getId()]);
    }

    /**
     * @Route("/clear-unused-images")
     * @return Response
     */
    public function clearUnusedImages(): Response
    {
        $imagesFolder = __DIR__.'/../../../public/img/uploads/';
        $imagesInFolder = scandir($imagesFolder);

        $imagesInFolder = array_filter($imagesInFolder, function ($image) {
            return !!preg_match('#^\d+\.(png|jpe?g)$#', $image);
        });

        $imagesInDatabase = $this->getEm()->getRepository(Image::class)->findAll();
        $imagesIdsInDatabase = [];
        foreach ($imagesInDatabase as $imageInDatabase) {
            $imagesIdsInDatabase[] = $imageInDatabase->getId();
        }

        foreach ($imagesInFolder as $imageInFolder) {
            $id = preg_replace('#^(\d+)\..*$#', '$1', $imageInFolder);
            $file = realpath($imagesFolder.$imageInFolder);
            if (!in_array($id, $imagesIdsInDatabase) && file_exists($file)) {
                unlink($file);
            }
        }

        return $this->redirectToRoute('app_admin_item_items');
    }

    /**
     * @Route("/remove/image/{id<\d+>}", methods={"POST"})
     * @param Image $image
     * @param Merchant $googleMerchant
     * @return Response
     */
    public function removeImage(Image $image, Merchant $googleMerchant): Response
    {
        if ($image->getItem()->getImages()->count() > 1) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($image);
            $em->flush();
            $googleMerchant->generateProductsStream();
            $dataResponse = ['success' => true];
        } else {
            $dataResponse = [
                'success' => false,
                'errorMessage' => 'Impossible de supprimer la dernière image d\'un article',
            ];
        }

        return $this->json($dataResponse);
    }

    /**
     * @Route("/orders/{id<\d+>}")
     * @param Item $item
     * @return Response
     */
    public function orders(Item $item): Response
    {

        $lines = $item->getCustomerOrderLines();
        $orders = [];

        foreach ($lines as $line) {
            $order = $line->getCustomerOrder();
            if ($order->getIsValid()) {
                $orders[$order->getId()] = $order;
            }
        }

        return $this->render('admin/item/orders.html.twig', [
            'item' => $item,
            'orders' => $orders,
        ]);
    }
}