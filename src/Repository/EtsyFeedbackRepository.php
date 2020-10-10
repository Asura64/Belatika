<?php

namespace App\Repository;

use App\Entity\EtsyFeedback;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method EtsyFeedback|null find($id, $lockMode = null, $lockVersion = null)
 * @method EtsyFeedback|null findOneBy(array $criteria, array $orderBy = null)
 * @method EtsyFeedback[]    findAll()
 * @method EtsyFeedback[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EtsyFeedbackRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EtsyFeedback::class);
    }

    // /**
    //  * @return EtsyFeedback[] Returns an array of EtsyFeedback objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('e.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?EtsyFeedback
    {
        return $this->createQueryBuilder('e')
            ->andWhere('e.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
