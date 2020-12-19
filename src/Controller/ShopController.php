<?php

namespace App\Controller;


use App\Entity\BackInStock;
use App\Entity\BlogArticle;
use App\Entity\Category;
use App\Entity\CustomerOrder;
use App\Entity\EtsyFeedback;
use App\Entity\EtsySale;
use App\Entity\Item;
use Liip\ImagineBundle\Service\FilterService;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;


class ShopController extends AbstractController
{
    /**
     * @Route("/")
     * @param FilterService $filterService
     * @return Response
     */
    public function index(FilterService $filterService):Response
    {
        $doctrine = $this->getDoctrine();
        $blogArticle = $doctrine->getRepository(BlogArticle::class)->findLastWithComments();
        $blogContent = $blogArticle->getContent();
        if (preg_match('#(https?://(?:local)?belatika.com/)(img/blog/[^"]*)"#', $blogContent, $matches)) {
            $resized = $filterService->getUrlOfFilteredImage($matches[2], 'large');
            $blogContent = str_replace($matches[1].$matches[2], $resized, $blogContent);
            $blogArticle->setContent($blogContent);
        }

        $orders = $doctrine->getRepository(CustomerOrder::class)->findBy(['rating' => [1,2,3,4,5]]);
        $etsyFeedbacks = $doctrine->getRepository(EtsyFeedback::class)->findBy(['value' => 1]);

        $etsySales = $doctrine->getRepository(EtsySale::class)->findAll();
        $customerCountries = [
            'GP',
            'NG',
            'AO',
        ];
        foreach ($etsySales as $etsySale) {
            if (!in_array($etsySale->getCountryCode(), $customerCountries)) {
                $customerCountries[] = $etsySale->getCountryCode();
            }
        }

        $reviews = $this->getReviews($orders, $etsyFeedbacks, true);
        shuffle($reviews);
        $reviews = array_slice($reviews, 0, 2);

        return $this->render(
            'shop/index.html.twig',
            [
                'blogArticle' => $blogArticle,
                'reviews' => $reviews,
                'customerCountries' => implode(',', $customerCountries),
            ]
        );
    }

    /**
     * @Route("/bijoux/{customer<femme|homme>}/{slug}", name="app_shop_category")
     * @param Category $category
     * @return Response
     */
    public function category(Category $category):Response
    {
        $items = $this->getDoctrine()->getRepository(Item::class)->findCategoryWithImages($category);

        $this->breadcrumb[] = [
            'title' => 'bijoux '.$category->getCustomers(),
            'url' => $this->generateUrl('app_shop_customer', ['customer' => $category->getCustomers()])
        ];
        $this->breadcrumb[] = ['title' => $category->getName()];

        return $this->render('shop/category.html.twig', ['category' => $category, 'items' => $items]);
    }

    /**
     * @Route("/bijoux/black-friday", name="app_shop_black-friday")
     * @return Response
     */
    public function sales():Response
    {
        if (!$this->onSales()) {
            return $this->redirectToRoute('app_shop_index');
        }

        $items = $this->getDoctrine()->getRepository(Item::class)->findSales();

        $this->breadcrumb[] = ['title' => 'Black Friday'];

        return $this->render('shop/sales.html.twig', ['items' => $items]);
    }

    /**
     * @Route("/bijoux/{customer<femme|homme>}", name="app_shop_customer")
     * @param string $customer
     * @return Response
     */
    public function customer(string $customer):Response
    {
        $items = $this->getDoctrine()->getRepository(Item::class)->findCustomerItems($customer);

        $this->breadcrumb[] = ['title' => 'Bijoux '.$customer];

        return $this->render('shop/customers.html.twig', ['items' => $items, 'customers' => 'bijoux '.$customer]);
    }

    /**
     * @Route("/bijoux/recherche", name="app_shop_search")
     * @param Request $request
     * @return Response
     */
    public function search(Request $request):Response
    {
        $search = $request->get('bt-search');

        $items = $this->getDoctrine()->getRepository(Item::class)->searchWithImages(trim($search));

        $this->breadcrumb[] = ['title' => trim($search)];

        return $this->render('shop/search.html.twig', ['items' => $items]);
    }

    /**
     * @Route("/bijoux/{customer<femme|homme>}/{category_slug}/{slug}", name="app_shop_item")
     * @param Item $item
     * @return Response
     */
    public function item(Item $item):Response
    {
        if (!$item->getVisible()) return $this->redirectToRoute('app_shop_index');

        $itemUrl = $this->generateUrl('app_shop_item', [
            'category_slug' => $item->getCategory()->getSlug(),
            'customer' => $item->getCategory()->getCustomers(),
            'slug' => $item->getSlug()
        ], UrlGeneratorInterface::ABSOLUTE_URL);

        $facebookShareUrl = 'https://www.facebook.com/sharer.php?u=' . urlencode($itemUrl);

        $this->breadcrumb[] = [
            'title' => 'bijoux '.$item->getCategory()->getCustomers(),
            'url' => $this->generateUrl('app_shop_customer', ['customer' => $item->getCategory()->getCustomers()])
        ];
        $this->breadcrumb[] = [
            'title' => $item->getCategory()->getName(),
            'url' => $this->generateUrl('app_shop_category', [
                'customer' => $item->getCategory()->getCustomers(),
                'slug' => $item->getCategory()->getSlug(),
            ]),
        ];
        $this->breadcrumb[] = ['title' => $item->getName()];

        return $this->render('shop/item.html.twig', [
            'item' => $item,
            'facebookShareUrl' => $facebookShareUrl
        ]);
    }

    /**
     * @Route("/conditions-generales-de-vente", name="app_shop_cgv")
     */
    public function cgv(): Response
    {
        $this->breadcrumb[] = ['title' => 'Conditions générales de vente'];

        return $this->render('shop/cgv.html.twig');
    }

    /**
     * @Route("/mentions-legales", name="app_shop_legals")
     */
    public function legals(): Response
    {
        $this->breadcrumb[] = ['title' => 'Mentions légales'];

        return $this->render('shop/legals.html.twig');
    }

    /**
     * @Route("/condition-d-utilisation-du-blog", name="app_shop_bloginfos")
     */
    public function bloginfos(): Response
    {
        $this->breadcrumb[] = ['title' => "Conditions d'utilisation du blog"];

        return $this->render('shop/bloginfos.html.twig');
    }

    /**
     * @Route("/avis", name="app_shop_avis")
     */
    public function ratings()
    {
        $orders = $this->getDoctrine()->getRepository(CustomerOrder::class)->findBy(['rating' => [1,2,3,4,5]]);
        $etsyFeedbacks = $this->getDoctrine()->getRepository(EtsyFeedback::class)->findAll();

        $reviews = $this->getReviews($orders, $etsyFeedbacks);

        usort($reviews, function ($a, $b) {
            $aDate = $a['datetime'];
            $bDate = $b['datetime'];
            if ($aDate == $bDate) {
                return 0;
            }
            return $aDate > $bDate ? -1 : 1;
        });

        $this->breadcrumb[] = ['title' => "Avis des clients"];

        return $this->render('shop/avis.html.twig', ['reviews' => $reviews]);
    }

    /**
     * @Route("/backinstock", name="app_shop_backinstock", methods={"POST"})
     * @param Request $request
     * @return JsonResponse
     */
    public function backinstock(Request $request)
    {
        $response = [];

        $item = $this->getEm()->getRepository(Item::class)->find($request->get('id'));
        $email = $request->get('email');
        if ($email && $item) {
            $backInstock = $this->getEm()->getRepository(BackInStock::class)->findBy(['item' => $item, 'email' => $email]);
            if (!$backInstock) {
                $backInstock = new BackInStock();
                $backInstock->setEmail($email)->setItem($item);
                $this->getEm()->persist($backInstock);
                $this->getEm()->flush();
                $url = $this->generateUrl('app_shop_item', [
                    'slug' => $item->getSlug(),
                    'category_slug' => $item->getCategory()->getSlug(),
                    'customer' => $item->getCategory()->getCustomers(),
                ], UrlGeneratorInterface::ABSOLUTE_URL);
                $this->fastMail(
                    'Demande de remise en stock',
                    [$this->config->getAdminMail(), $this->config->getDevMail()],
                    'mail/backinstockSeller.html.twig',
                    [
                        'email' => $email,
                        'url' => $url,
                        'name' => $item->getName(),
                   ]
                );
            }
            $response['success'] = true;
        } else {
            $response['error'] = 'Requête incorrecte: paramètres manquants';
        }

        return $this->json($response);
    }

    /**
     * @param CustomerOrder[] $orders
     * @param EtsyFeedback[] $etsyFeedbacks
     * @param bool $lastyear
     * @return array
     */
    protected function getReviews($orders, $etsyFeedbacks, $lastyear = false) {
        $reviews = [];
        $now = date_create();

        foreach ($orders as $order) {
            if (!$order->getReview()) continue;
            $reviews[] = [
                'datetime' => $order->getOrderedAt(),
                'rate' => $order->getRating(),
                'review' => $order->getReview()
            ];
        }
        foreach ($etsyFeedbacks as $etsyFeedback) {
            if (!$etsyFeedback->getMessage()) $etsyFeedback->setMessage('');
            $datetime = new \DateTime();
            $datetime->setTimestamp($etsyFeedback->getCreationTsz());
            if ($lastyear && $datetime->diff($now)->days > 365) continue;
            $reviews[] = [
                'datetime' => $datetime,
                'rate' => 3 + 2*$etsyFeedback->getValue(),
                'review' => $etsyFeedback->getMessage()
            ];
        }

        return $reviews;
    }
}