<?php

namespace App\Repository;

use App\Entity\BlogArticle;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\ParameterBag;

/**
 * @method BlogArticle|null find($id, $lockMode = null, $lockVersion = null)
 * @method BlogArticle|null findOneBy(array $criteria, array $orderBy = null)
 * @method BlogArticle[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BlogArticleRepository extends AbstractRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, BlogArticle::class);
    }

    /**
     * @param bool $visibleOnly
     * @return BlogArticle[] Returns an array of BlogArticle objects
     */
    public function findAllWithComments($visibleOnly = true)
    {
        $qb = $this->createQueryBuilder('b');
        $this->with($qb, 'blogComments');
        if ($visibleOnly) {
            $qb->where('b.isPublished = 1');
        }
        return $qb->orderBy('b.posted_at', 'DESC')->getQuery()->getResult();
    }

    public function findOneWithComments(ParameterBag $parameterBag):BlogArticle
    {
        $qb = $this->createQueryBuilder('b');
        $params = ['id', 'slug'];
        foreach ($params as $param) {
            if ($parameterBag->has($param)) {
                $qb->where('b.'.$param.' = :'.$param)->setParameter($param, $parameterBag->get($param));
            }
        }
        $this->with($qb, ['blogComments', 'user']);
        return $qb->orderBy('bc.posted_at', 'DESC')->getQuery()->getSingleResult();
    }

    /**
     * @return BlogArticle|null
     */
    public function findLastWithComments()
    {
        $qb = $this->createQueryBuilder('b');
        $qb->where('b.isPublished = 1');
        $this->with($qb, 'blogComments');
        $blogArticles = $qb->orderBy('b.posted_at', 'DESC')->getQuery()->getResult();
        return is_array($blogArticles) ? $blogArticles[0] : null ;
    }
}
