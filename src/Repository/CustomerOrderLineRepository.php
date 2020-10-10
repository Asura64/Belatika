<?php

namespace App\Repository;

use App\Entity\CustomerOrderLine;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method CustomerOrderLine|null find($id, $lockMode = null, $lockVersion = null)
 * @method CustomerOrderLine|null findOneBy(array $criteria, array $orderBy = null)
 * @method CustomerOrderLine[]    findAll()
 * @method CustomerOrderLine[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CustomerOrderLineRepository extends AbstractRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CustomerOrderLine::class);
    }

    public function countSales()
    {
        $qb = $this->createQueryBuilder('col')
            ->innerJoin('col.customerOrder', 'co')
            ->addSelect('co')
            ->where('co.is_valid = 1');

        $sales = $qb->getQuery()->getResult();

        return is_array($sales) ? count($sales) : 0;
    }
}
