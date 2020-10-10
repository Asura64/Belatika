<?php

namespace App\Repository;

use App\Entity\Gift;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\NoResultException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Gift|null find($id, $lockMode = null, $lockVersion = null)
 * @method Gift|null findOneBy(array $criteria, array $orderBy = null)
 * @method Gift[]    findAll()
 * @method Gift[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GiftRepository extends AbstractRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Gift::class);
    }

    /**
     * Return matching gift from database if exists
     * @param Gift $gift
     * @return Gift
     * @throws NonUniqueResultException
     */
    public function checkGift(?Gift $gift): ?Gift
    {
        if ($gift === null) {
            return null;
        }
        try {
            return $this->createQueryBuilder('g')
                ->where('g.code =:code')
                ->setParameter('code', $gift->getCode())
                ->getQuery()
                ->getSingleResult();
        } catch (NoResultException $e) {
            return $gift->setStatus('Désolé, ce code n\'existe pas. Merci de vérifier que le code que vous avez saisi est correct.');
        }
    }
}
