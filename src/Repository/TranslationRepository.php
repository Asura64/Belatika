<?php

namespace App\Repository;

use App\Entity\Translation;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Translation|null find($id, $lockMode = null, $lockVersion = null)
 * @method Translation|null findOneBy(array $criteria, array $orderBy = null)
 * @method Translation[]    findAll()
 * @method Translation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TranslationRepository extends AbstractRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Translation::class);
    }

    /**
     * @param string $crc32
     * @param string $language
     * @return Translation|null
     * @throws NonUniqueResultException
     */
    public function searchTranslation(string $crc32, string $language):?Translation
    {
        return $this
            ->createQueryBuilder('t')
            ->where('t.crc32 = :crc32')
            ->setParameter('crc32', $crc32)
            ->andWhere('t.target = :language')
            ->setParameter('language', $language)
            ->getQuery()
            ->getOneOrNullResult();
    }
}
