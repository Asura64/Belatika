<?php

namespace App\Twig\Extension;

use Twig\Extension\AbstractExtension;
use Twig\Extension\GlobalsInterface;

class GlobalExtension extends AbstractExtension implements GlobalsInterface
{
    private $sales_start;
    private $sales_end;
    private $now;

    public function __construct($shopSettings)
    {
        $this->sales_start = \DateTime::createFromFormat('d/m/Y_H:i', $shopSettings['sales']['start']);
        $this->sales_end = \DateTime::createFromFormat('d/m/Y_H:i', $shopSettings['sales']['end']);
        $this->now = date_create(null, new \DateTimeZone('Europe/Paris'));
    }

    /**
     * Returns a list of global variables to add to the existing list.
     *
     * @return array An array of global variables
     */
    public function getGlobals():array
    {
        return [
            'onSales' => $this->onSales(),
        ];
    }

    public function onSales()
    {
        if (
            !$this->sales_start instanceof \DateTimeInterface
            || !$this->sales_end instanceof \DateTimeInterface
            || !$this->now instanceof \DateTimeInterface
        ) {
            return false;
        }

        return $this->sales_start < $this->now && $this->now < $this->sales_end;
    }
}