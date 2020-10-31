<?php

namespace App\Twig\Extension;


use Symfony\Component\HttpFoundation\Session\Flash\FlashBagInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class FlashAlertExtension extends AbstractExtension
{
    /**
     * @var FlashBagInterface
     */
    protected $flashBag;

    /**
     * FlashAlertExtension constructor.
     * @param SessionInterface $session
     */
    public function __construct(SessionInterface $session)
    {
        $this->flashBag = $session->getFlashBag();
    }

    public function getFunctions():array
    {
        return [
            new TwigFunction('flashAlert', [$this, 'flashAlert'], ['is_safe' => ['html']])
        ];
    }

    public function flashAlert():string
    {
        $html = '<div id="alert-container">';

        $types = $this->flashBag->keys();

        foreach ($types as $type)
        {
            foreach ($this->flashBag->get($type) as $message)
            {
                $html .= "<div class='alert alert-$type alert-dismissible fade show' role='alert'>
                            $message
                            <button type='button' class='close' data-dismiss='alert' aria-label='Close'>
                                <span aria-hidden='true'>&times;</span>
                            </button>
                        </div>";
            }
        }
        return $html.'</div>';
    }
}