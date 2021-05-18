<?php

namespace App\Repository;

use App\Entity\Category;
use App\Entity\Item;
use Pagerfanta\Pagerfanta;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\ParameterBag;

/**
 * @method Item|null find($id, $lockMode = null, $lockVersion = null)
 * @method Item|null findOneBy(array $criteria, array $orderBy = null)
 * @method Item[]    findAll()
 * @method Item[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ItemRepository extends AbstractRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Item::class);
    }

    /**
     * @param array $params
     * @return Item[]|Pagerfanta
     */
    public function findAllWithImages($params = [])
    {
        $params = array_merge([
            'onlyVisible' => true,
            'paginate' => false,
            'filters' => [],
            'order' => ['it.created_at' => 'DESC'],
        ], $params);

        $qb = $this
            ->createQueryBuilder('it')
            ->innerJoin('it.images', 'im')
            ->addSelect('im')
            ->innerJoin('it.category', 'cat')
            ->addSelect('cat')
            ->innerJoin('it.colors', 'col')
            ->addSelect('col');

        if ($params['onlyVisible']) {
            $qb->where('it.visible = 1');
        }

        foreach ($params['order'] as $orderBy => $order) {
            $qb->orderBy($orderBy, $order);
        }

        foreach ($params['filters'] as $filter) {
            $qb->andWhere($filter);
        }

        if ($params['paginate']) {
            return $this->paginate($qb);
        } else {
            return $qb->getQuery()->getResult();
        }
    }

    public function findOneWithImages(ParameterBag $parameterBag):Item
    {
        $qb = $this->createQueryBuilder('i');
        $params = ['id', 'slug'];
        foreach ($params as $param) {
            if ($parameterBag->has($param)) {
                $qb->where('i.'.$param.' = :'.$param)->setParameter($param, $parameterBag->get($param));
            }
        }
        $this
            ->with($qb, 'category')
            ->with($qb, 'images');
        return $qb->getQuery()->getSingleResult();
    }

    /**
     * @param Category $category
     * @return Item[]
     */
    public function findCategoryWithImages(Category $category): array
    {
        $qb = $this->createQueryBuilder('it')
            ->where('it.visible = 1')
            ->innerJoin('it.images', 'im')
            ->addSelect('im')
            ->innerJoin('it.category', 'c')
            ->addSelect('c')
            ->andWhere('it.category = :category')
            ->setParameter('category', $category)
            ->orderBy('it.created_at', 'DESC');

        return $qb->getQuery()->getResult();
    }

    /**
     * @param Item $item
     * @return Item[]
     */
    public function getRelatedItems(Item $item): array
    {
        $category = $item->getCategory();

        $qb = $this->createQueryBuilder('it')
            ->where('it.visible = 1')
            ->innerJoin('it.images', 'im')
            ->addSelect('im')
            ->innerJoin('it.category', 'c')
            ->addSelect('c')
            ->andWhere('it.category = :category')
            ->setParameter('category', $category)
            ->andWhere('it.quantity > 0')
            ->andWhere('it.id != :id')
            ->setParameter('id', $item->getId());

        $result = $qb->getQuery()->getResult();

        if (!is_array($result) || count($result) < 5) {
            return  [];
        }

        shuffle($result);

        return array_slice($result, 0, 5);
    }

    public function findSales()
    {
        $qb = $this->createQueryBuilder('it')
            ->where('it.visible = 1')
            ->innerJoin('it.images', 'im')
            ->addSelect('im')
            ->innerJoin('it.category', 'c')
            ->addSelect('c')
            ->andWhere('it.discount > 0')
            ->orderBy('it.created_at', 'DESC');

        return $qb->getQuery()->getResult();
    }

    public function findCustomerItems($customers)
    {
        $qb = $this->createQueryBuilder('it')
            ->where('it.visible = 1')
            ->innerJoin('it.images', 'im')
            ->addSelect('im')
            ->innerJoin('it.category', 'c')
            ->addSelect('c')
            ->andWhere('c.customers = :customers')
            ->setParameter('customers', $customers)
            ->orderBy('it.created_at', 'DESC');

        return $qb->getQuery()->getResult();
    }

    /**
     * @param string $search
     * @return Item[]
     */
    public function searchWithImages(string $search): array
    {
        $qb = $this->createQueryBuilder('it')
            ->where('it.visible = 1')
            ->innerJoin('it.images', 'im')
            ->addSelect('im')
            ->innerJoin('it.category', 'c')
            ->addSelect('c')
            ->andwhere('it.name like :search')
            ->setParameter('search', '%' . $search . '%')
            ->orWhere('it.reference = :ref')
            ->setParameter('ref', $search)
            ->orWhere('c.name like :catname')
            ->setParameter('catname', '%'.$search.'%')
            ->orderBy('it.created_at', 'DESC');

        return $qb->getQuery()->getResult();
    }

    public function findAllWithOrders(): Pagerfanta
    {
        $qb = $this->createQueryBuilder('it')
            ->innerJoin('it.images', 'im')
            ->addSelect('im')
            ->leftJoin('it.customerOrderLines', 'col')
            ->addSelect('col')
            ->leftJoin('col.customerOrder', 'co')
            ->addSelect('co')
            ->orderBy('it.reference', 'DESC')
            ;

        return $this->paginate($qb);
    }
}
