<?php

namespace App\Repository;

use App\Entity\Address;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Address|null find($id, $lockMode = null, $lockVersion = null)
 * @method Address|null findOneBy(array $criteria, array $orderBy = null)
 * @method Address[]    findAll()
 * @method Address[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AddressRepository extends AbstractRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Address::class);
    }

    public function getUnusedAddresses()
    {
        $qb = $this->createQueryBuilder('a')
            ->leftJoin('a.billingUser', 'bu')
            ->addSelect('bu')
            ->leftJoin('a.deliveryUser', 'du')
            ->addSelect('du')
            ->leftJoin('a.billingCustomerOrder', 'bc')
            ->addSelect('bc')
            ->leftJoin('a.deliveryCustomerOrder', 'dc')
            ->addSelect('dc')
            ->where('bu.id IS NULL')
            ->andWhere('du.id IS NULL')
            ->andWhere('bc.id IS NULL')
            ->andWhere('dc.id IS NULL')
            ;

        return $qb->getQuery()->getResult();
    }
}
