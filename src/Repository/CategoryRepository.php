<?php

namespace App\Repository;

use App\Entity\Category;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Category|null find($id, $lockMode = null, $lockVersion = null)
 * @method Category|null findOneBy(array $criteria, array $orderBy = null)
 * @method Category[]    findAll()
 * @method Category[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CategoryRepository extends AbstractRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Category::class);
    }

    public function findAllWithItems()
    {
        $qb = $this->createQueryBuilder('c');
        $this->with($qb, ['items', 'images']);
        $qb
            ->where('i.visible = 1')
            ->orderBy('c.id')
            ->orderBy('i.created_at', 'desc');

        return $qb->getQuery()->getResult();
    }
}
