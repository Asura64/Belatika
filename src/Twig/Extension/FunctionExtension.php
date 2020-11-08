<?php

namespace App\Twig\Extension;


use App\Entity\Category;
use App\Entity\CustomerOrder;
use App\Entity\CustomerOrderLine;
use App\Entity\EtsyFeedback;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Session\Flash\FlashBagInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class FunctionExtension extends AbstractExtension
{
    private EntityManagerInterface $manager;
    private FlashBagInterface $flashBag;

    public function __construct(EntityManagerInterface $manager, SessionInterface $session)
    {
        $this->manager = $manager;
        $this->flashBag = $session->getFlashBag();
    }

    public function getFunctions():array
    {
        return [
            new TwigFunction('categories', [$this, 'getCategories']),
            new TwigFunction('getSalesCount', [$this, 'getSalesCount']),
            new TwigFunction('getRatings', [$this, 'getRatings']),
            new TwigFunction('env', [$this, 'env']),
            new TwigFunction('randomImage', [$this, 'randomImage']),
            new TwigFunction('flashAlert', [$this, 'flashAlert'], ['is_safe' => ['html']])
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

    public function flashAlert():string
    {
        $html = '<div id="alert-container" class="p-2">';

        $types = $this->flashBag->keys();

        foreach ($types as $type)
        {
            foreach ($this->flashBag->get($type) as $message)
            {
                $html .= "<div class='alert alert-$type alert-dismissible fade show' role='alert'>
                            $message
                            <button type='button' class='close' data-dismiss='alert' aria-label='Close'>
                                <span aria-hidden='true'>&times;</span>
                            </button>
                        </div>";
            }
        }
        return $html.'</div>';
    }
}