<?php

namespace App\Repository;

use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\QueryBuilder;
use Pagerfanta\Doctrine\ORM\QueryAdapter;
use Pagerfanta\Pagerfanta;

abstract class AbstractRepository extends ServiceEntityRepository
{
    protected function paginate(QueryBuilder $qb):Pagerfanta
    {
        return new Pagerfanta(new QueryAdapter($qb));
    }

    protected function with(QueryBuilder $qb, $linkedEntities)
    {
        $parentAlias = current($qb->getRootAliases());
        if (!is_array($linkedEntities)) {
            $linkedEntities = [$linkedEntities];
        }
        foreach ($linkedEntities as $linkedEntity) {
            preg_match_all("#([A-Z]+)#", $linkedEntity, $matches);
            $childAlias = substr($linkedEntity, 0, 1).strtolower(implode('', $matches[1]));
            if(in_array($childAlias, $qb->getAllAliases())) {
                $lastChar = substr($childAlias, -1);
                $suffix = is_numeric($lastChar) ? $lastChar + 1 : 1;
                $childAlias .= $suffix;
            }
            $qb
                ->leftJoin($parentAlias.'.'.$linkedEntity, $childAlias)
                ->addSelect($childAlias);
            $parentAlias = $childAlias;
        }
        return $this;
    }
}