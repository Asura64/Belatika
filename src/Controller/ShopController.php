<?php

namespace App\Controller;


use App\Entity\Category;
use App\Entity\Item;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class ShopController extends AbstractController
{
    /**
     * @Route("/", name="app_shop_index")
     */
    public function index():Response
    {
        $items = $this->getDoctrine()->getRepository(Item::class)->findAllWithImages()->setCurrentPage(2);

        $categories = $this->getDoctrine()->getRepository(Category::class)->findBy([], ['name' => 'ASC']);

        return $this->render('shop/index.html.twig', ['items' => $items, 'categories' => $categories]);
    }
}