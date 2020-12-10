<?php

namespace App\Repository;

use App\Entity\BackInStock;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method BackInStock|null find($id, $lockMode = null, $lockVersion = null)
 * @method BackInStock|null findOneBy(array $criteria, array $orderBy = null)
 * @method BackInStock[]    findAll()
 * @method BackInStock[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BackInStockRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, BackInStock::class);
    }

    // /**
    //  * @return BackInStock[] Returns an array of BackInStock objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('b.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?BackInStock
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
