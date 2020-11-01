<?php

namespace App\Twig\Extension;

use Twig\Extension\AbstractExtension;
use Twig\Extension\GlobalsInterface;

class GlobalExtension extends AbstractExtension implements GlobalsInterface
{
    private $sales_start;
    private $sales_end;

    public function __construct($shopSettings)
    {
        $this->sales_start = $shopSettings['sales']['start'];
        $this->sales_end = $shopSettings['sales']['end'];
    }

    /**
     * Returns a list of global variables to add to the existing list.
     *
     * @return array An array of global variables
     */
    public function getGlobals():array
    {
        return [
            'onSales' => [$this, 'onSales'],
        ];
    }

    public function onSales()
    {
        $now = time();
        return $this->sales_start < $now && $now < $this->sales_end;
    }
}