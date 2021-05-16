<?php


namespace App\Service\Google;


use App\Entity\Item;
use Doctrine\ORM\EntityManagerInterface;
use Liip\ImagineBundle\Service\FilterService;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class Merchant
{
    private EntityManagerInterface $manager;
    private UrlGeneratorInterface $urlGenerator;
    private FilterService $imagineFilterService;

    public function __construct(
        EntityManagerInterface $manager,
        UrlGeneratorInterface $urlGenerator,
        FilterService $imagineFilterService
    )
    {
        $this->manager = $manager;
        $this->urlGenerator = $urlGenerator;
        $this->imagineFilterService = $imagineFilterService;
    }

    public function generateProductsStream()
    {
        /** @var Item[] $items */
        $items = $this->manager->getRepository(Item::class)->findAllWithImages(['filters' => ['it.quantity > 0']]);
        $products = [];

        foreach ($items as $item) {
            $product = [
                'id' => $item->getId(),
                'title' => $this->_clearTabs($item->getName()),
                'description' => $this->_clearTabs($item->getDescription()),
                'link' => $this->urlGenerator->generate('app_shop_item', [
                    'slug' => $item->getSlug(),
                    'category_slug' => $item->getCategory()->getSlug(),
                    'customer' => $item->getCategory()->getCustomers()
                ], UrlGeneratorInterface::ABSOLUTE_URL),
                'image_link' => $this->imagineFilterService->getUrlOfFilteredImage($item->getImages()[0]->getWebPath(), 'item_big',),
                'availability' => 'in stock',
                'price' => number_format($item->getPrice(), 2, '.', '').' EUR',
                'google_product_category' => $item->getCategory()->getGoogleCategory(),
                'brand' => 'Belatika',
                'MPN' => $item->getReference(),
                'condition' => 'new',
                'gender' => $item->getCategory()->getCustomers() === 'homme' ? 'male' : 'female',
                'size' => 'TUA',
                'shipping' => 'FR::Courrier suivi La Poste:0.00 EUR',
                'age_group' => 'adult',
            ];
            $products[] = $product;
        }

        if (count($products) === 0) {
            return;
        }

        $fp = fopen('google/products.txt', 'w');
        $fields = array_keys($products[0]);
        fputcsv($fp, $fields, "\t");
        foreach ($products as $product) {
            fputcsv($fp, $product, "\t");
        }
        fclose($fp);
    }

    private function _clearTabs($text)
    {
        return str_replace("\t", '    ', $text);
    }
}