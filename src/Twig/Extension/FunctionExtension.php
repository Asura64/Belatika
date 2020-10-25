<?php

namespace App\Twig\Extension;


use App\Entity\Category;
use App\Entity\CustomerOrder;
use App\Entity\CustomerOrderLine;
use App\Entity\EtsyFeedback;
use Doctrine\Common\Persistence\ObjectManager;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class FunctionExtension extends AbstractExtension
{
    private $manager;

    public function __construct(ObjectManager $manager)
    {
        $this->manager = $manager;
    }

    public function getFunctions():array
    {
        return [
            new TwigFunction('categories', [$this, 'getCategories']),
            new TwigFunction('env', [$this, 'env']),
            new TwigFunction('randomImage', [$this, 'randomImage']),
            new TwigFunction('getSalesCount', [$this, 'getSalesCount']),
            new TwigFunction('getRatings', [$this, 'getRatings']),
        ];
    }

    public function getCategories()
    {
        return $this->manager->getRepository(Category::class)->findAllWithItems();
    }

    public function getSalesCount()
    {
        return $this->manager->getRepository(CustomerOrderLine::class)->countSales();
    }

    public function getRatings()
    {
        $ratings = [];
        $customerOrders = $this->manager->getRepository(CustomerOrder::class)->getRatings();
        foreach ($customerOrders as $customerOrder) {
            $ratings[] = $customerOrder->getRating();
        }
        $etsyFeedbacks = $this->manager->getRepository(EtsyFeedback::class)->findAll();
        foreach ($etsyFeedbacks as $feedback) {
            $ratings[] = 3 + 2 * $feedback->getValue();
        }
        return $ratings;
    }

    public function env(string $key):string
    {
        return getenv($key);
    }

    public function randomImage()
    {
        $imageDir = __DIR__.'/../../../public/dev/';
        $images = scandir($imageDir);
        unset($images[0]);
        unset($images[1]);
        $random = array_rand($images);
        return 'dev/'.$images[$random];
    }
}