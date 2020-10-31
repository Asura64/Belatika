<?php

namespace App\Twig\Extension;


use App\Service\GoogleTranslator;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

class FilterExtension extends AbstractExtension
{
    private $translator;

    public function __construct(GoogleTranslator $translator)
    {
        $this->translator = $translator;
    }

    public function getFilters():array
    {
        return [
            new TwigFilter('gTrans', [$this->translator, 'gTrans'], ['is_safe' => ['html']]),
            new TwigFilter('gTransDB', [$this->translator, 'gTransDB'], ['is_safe' => ['html']]),
            new TwigFilter('trunc', [$this, 'trunc']),
        ];
    }

    public function trunc($text, $length = 20):string
    {
        return strlen($text) > $length ? substr($text, 0, $length).'...' : $text;
    }
}