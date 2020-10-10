<?php


namespace App\EventListener;


use Doctrine\ORM\EntityManager;
use Symfony\Component\HttpKernel\Event\RequestEvent;

class RequestListener
{
    /**
     * @var EntityManager
     */
    private $manager;

    public function __construct(EntityManager $manager)
    {
        $this->manager = $manager;
    }

    public function onKernelRequest(RequestEvent $event)
    {
        $session = $event->getRequest()->getSession();
        $request = $event->getRequest();

        $scheme = $request->server->get('REQUEST_SCHEME').'://';
        $host = $request->server->get('HTTP_HOST');
        $uri = $request->server->get('REQUEST_URI');

        if (preg_match('#^www\.#', $host)) {
            $host = preg_replace('#^www\.(.*)#', '$1', $host);
            $url = $scheme.$host.$uri;
            header("Status: 301 Moved Permanently", false, 301);
            header("Location: ".$url);
            die();
        }

        $route = $request->attributes->get('_route');

        if (
            preg_match('#^app_#', $route) !== 1
            || preg_match('#^app_cart_add#', $route) === 1
        ) {
            return;
        }
        $session->set('_last_route', $request->getSchemeAndHttpHost().$request->getRequestUri());
    }
}