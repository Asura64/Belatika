<?php

namespace App\Controller;


use App\Entity\Address;
use App\Entity\CustomerOrder;
use App\Entity\Gift;
use App\Entity\User;
use App\Service\Config;
use App\Service\GoogleTranslator;
use App\Twig\Extension\GlobalExtension;
use Doctrine\Persistence\ObjectManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController as Controller;
use Symfony\Component\HttpFoundation\Request;
use \Swift_Mailer;
use \Swift_Message;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Security\Core\Exception\SessionUnavailableException;
use Doctrine\ORM\NonUniqueResultException;

abstract class AbstractController extends Controller
{
    private GoogleTranslator $googleTranslator;
    private Swift_Mailer $mailer;

    protected array $breadcrumb = [];
    protected ?ObjectManager $em = null;
    protected Config $config;

    public function __construct(GoogleTranslator $googleTranslator, Swift_Mailer $mailer, Config $config)
    {
        $this->googleTranslator = $googleTranslator;
        $this->mailer = $mailer;
        $this->config = $config;
    }

    /**
     * alias for $this->googleTranslator->gTrans($text)
     *
     * @param string $text
     * @param bool $force
     * @return string
     */
    protected function gTrans($text, $force = false):?string
    {
        $text = empty($text) ? '' : $text;
        return $this->googleTranslator->gTrans($text, $force);
    }

    /**
     * alias for $this->googleTranslator->gTransDB($text)
     *
     * @param $text
     * @param bool $force
     * @return string
     */
    protected function gTransDB($text, $force = false):?string
    {
        $text = empty($text) ? '' : $text;
        return $this->googleTranslator->gTransDB($text, $force);
    }

    /**
     * @return bool
     */
    protected function onSales():bool
    {
        $shopSettings = $this->getParameter('shop_settings');

        $twigGlobalExtension = new GlobalExtension($shopSettings);

        return $twigGlobalExtension->onSales();
    }

    protected function getTemplate($path)
    {
        $shopSettings = $this->getParameter('shop_settings');

        return isset($shopSettings['template']) ? $shopSettings['template'].'/'.$path : $path;
    }

    protected function checkGift(?Gift $gift)
    {
        if ($this->onSales() || !$gift instanceof Gift) {
            return null;
        }
        try {
            return $this->getDoctrine()->getRepository(Gift::class)->checkGift($gift);
        } catch (NonUniqueResultException $e) {
            $title = 'Problème site - code de chèque cadeau en doublon';
            $body = 'L\'utilisateur '.$this->getUser()->getRealname().' n\'a pas pu utiliser le chèque-cadeau n°'.$gift->getCode().' car ce code existe en doublon dans la base.';
            $this->alertAdmin($title, $body);
            return $gift->setStatus('Un problème est survenu avec ce code cadeau. Une notification a été transmise au gestionnaire du site.');
        }
    }

    protected function alertAdmin($subject, $body):void
    {
        $message = (new Swift_Message($subject))
            ->setFrom('noreply@belatika.com')
            ->setTo([
                $this->config->getAdminMail(),
                $this->config->getDevMail(),
                $this->config->getOwnerMail(),
            ], 'Admin Belatika')
            ->setBody($body);
        $this->mailer->send($message);
    }

    /**
     * @param string $subject
     * @param string|array $to
     * @param string $template
     * @param array $viewVars
     * @return bool
     */
    protected function fastMail(string $subject, $to, string $template, $viewVars = []): bool
    {
        if (in_array($this->config->getAppEnv() ?? null, ['dev', 'test'])) {
            $to = [$this->config->getDevMail()];
        } else {
            $to = is_array($to) ? $to : [$to];
            $to[] = $this->config->getOwnerMail();
        }
        $message = (new Swift_Message($subject))
            ->setCharset('utf-8')
            ->setContentType('text/html')
            ->setFrom('contact@belatika.com')
            ->setTo($to)
            ->setBody($this->renderView($template, $viewVars));
        return $this->mailer->send($message) > 0;
    }

    protected function getSessionFrom(Request $request): SessionInterface
    {
        $session = $request->getSession();
        if($session === null) {
            $backtrace = debug_backtrace();
            $title = 'Problème site - session indisponible';
            $body = 'Impossible de charger la session. Classe : '.$backtrace[1]['class'].', Méthode : '.$backtrace[1]['function'];
            $this->alertAdmin($title, $body);
            throw new SessionUnavailableException('An error occured: the session is unavailable');
        }

        return $session;
    }

    /**
     * @param User? $user
     * @param array $joins
     * @return CustomerOrder|null
     */
    protected function getPendingOrder($user, $joins = []):?CustomerOrder
    {
        if (!$user instanceof User) {
            return null;
        }
        try {
            return $this
                ->getDoctrine()
                ->getManager()
                ->getRepository(CustomerOrder::class)
                ->getPendingOrder($user, $joins);
        } catch (NonUniqueResultException $e) {
            $title = 'Problème site - plusieurs commandes en cours pour l\'utilisateur '.$user->getRealname();
            $body = 'L\'utilisateur '.$user->getRealname().' a plusieurs commandes non finalisées dans la base.';
            $this->alertAdmin($title, $body);
            return null;
        }
    }

    /**
     * @param CustomerOrder $order
     * @return CustomerOrder
     */
    protected function updateOrder(CustomerOrder $order): CustomerOrder
    {
        $orderLines = $order->getCustomerOrderLines();
        $total = 0;
        foreach ($orderLines as $orderLine) {
            $item = $orderLine->getItem();
            $orderLine
                ->setDiscount($this->onSales() ? $item->getDiscount() : 0)
                ->setPrice($item->getPrice())
                ->setQuantity(min($orderLine->getQuantity(), $item->getQuantity()));

            $total += $orderLine->getQuantity() * $orderLine->getPrice() * (100 - $orderLine->getDiscount())/100;
        }

        $order->setTotal($total);
        $gift = $order->getGift();
        if(!$this->onSales() && $gift instanceof Gift && $gift->updateStatus()->getValid()) {
            $order->setGiftValueUsed(min($total, $gift->getValue()));
        }
        return $order;
    }

    public function getUser(): ?User
    {
        return parent::getUser();
    }

    protected function clearUnusedAddresses()
    {
        $manager = $this->getDoctrine()->getManager();
        $unusedAddresses = $manager->getRepository(Address::class)->getUnusedAddresses();
        foreach ($unusedAddresses as $unusedAddress) {
            $manager->remove($unusedAddress);
        }
        $manager->flush();
    }

    protected function render(string $view, array $parameters = [], Response $response = null): Response
    {
        if (count($this->breadcrumb) > 0) {
            $parameters['breadcrumb'] = $this->breadcrumb;
        }
        return parent::render($view, $parameters, $response);
    }

    protected function getEm(): ObjectManager
    {
        if (!$this->em instanceof ObjectManager) {
            $this->em = $this->getDoctrine()->getManager();
        }
        return $this->em;
    }
}