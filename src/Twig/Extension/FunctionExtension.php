<?php

namespace App\Twig\Extension;


use App\Entity\Category;
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
        ];
    }

    public function getCategories()
    {
        return $this->manager->getRepository(Category::class)->findBy([], ['name' => 'ASC']);
    }

    public function env(string $key):string
    {
        return getenv($key);
    }
}