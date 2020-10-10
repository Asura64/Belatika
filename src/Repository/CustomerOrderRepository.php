<?php

namespace App\Repository;

use App\Entity\CustomerOrder;
use App\Entity\User;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\NoResultException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method CustomerOrder|null find($id, $lockMode = null, $lockVersion = null)
 * @method CustomerOrder|null findOneBy(array $criteria, array $orderBy = null)
 * @method CustomerOrder[]    findAll()
 * @method CustomerOrder[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CustomerOrderRepository extends AbstractRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CustomerOrder::class);
    }

    public function getHighestReference():int
    {
        try {
            $highestReference = $this
                ->createQueryBuilder('co')
                ->select('MAX(co.reference)')
                ->getQuery()
                ->getSingleScalarResult();
            return $highestReference === null ? 0 : $highestReference;
        }catch (NonUniqueResultException $e) {
            return 0;
        }
    }

    /**
     * @param User $user
     * @param array $joins
     * @return CustomerOrder|null
     * @throws NonUniqueResultException
     */
    public function getPendingOrder(User $user, $joins = []):?CustomerOrder
    {
        $qb = $this
            ->createQueryBuilder('co')
            ->where('co.is_valid = 0')
            ->andWhere('co.user = :user')
            ->setParameter('user', $user);
        foreach ($joins as $join) {
            $this->with($qb, $join);
        }
        try {
            return $qb->getQuery()->getSingleResult();
        } catch (NoResultException $e) {
            return null;
        }
    }

    /**
     * @return CustomerOrder[]
     */
    public function getRatings(): array
    {
        $qb = $this
            ->createQueryBuilder('co')
            ->where('co.rating IS NOT NULL');
        return $qb->getQuery()->getResult();
    }

    public function getOrderByIntentId($intentId)
    {
        $qb = $this
            ->createQueryBuilder('co')
            ->innerJoin('co.payment', 'p')
            ->addSelect('p')
            ->where('p.method = :method')
            ->setParameter('method', 'Stripe intent')
            ->andWhere('p.identifier = :intent_id')
            ->setParameter('intent_id', $intentId);

        try {
            return $qb->getQuery()->getSingleResult();
        } catch (NoResultException $e) {
            return null;
        } catch (NonUniqueResultException $e) {
            return null;
        }
    }
}
