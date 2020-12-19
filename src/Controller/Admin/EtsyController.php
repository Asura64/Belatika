<?php


namespace App\Controller\Admin;


use App\Controller\AdminController;
use App\Entity\EtsyFeedback;
use App\Entity\EtsySale;
use App\Service\API\Etsy;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/etsy")
 */
class EtsyController extends AdminController
{
    /**
     * @var Etsy
     */
    protected $etsy;

    /**
     * @Route("/")
     * @param Etsy $etsy
     * @return RedirectResponse
     */
    public function etsy(Etsy $etsy): RedirectResponse
    {
        $this->etsy = $etsy;
        $this->etsy
            ->setApiKey($this->config->getEtsyKey())
            ->setApiSecret($this->config->getEtsySecret())
            ->setShopId($this->config->getEtsyShopId())
            ->setUserId($this->config->getEtsyUserId())
            ->setSSLCheck($this->config->getAppEnv() !== 'dev');

        $this->synchroFeedbacks();
//        $this->synchroSales();

        return $this->redirectToRoute('app_admin_index');
    }

    protected function synchroFeedbacks(): bool
    {
        $em = $this->getDoctrine()->getManager();
        $repository = $em->getRepository(EtsyFeedback::class);
        $feedbacks = $this->etsy->getFeedbacks();
        $hasNewFeedbacks = false;
        foreach ($feedbacks as $feedback) {
            $etsyFeedback = $repository->findOneBy(['feedback_id' => $feedback->feedback_id]);
            if ($etsyFeedback === null) {
                $etsyFeedback = new EtsyFeedback();
                $etsyFeedback
                    ->setMessage($feedback->message)
                    ->setValue($feedback->value)
                    ->setFeedbackId($feedback->feedback_id)
                    ->setCreationTsz($feedback->creation_tsz);
                $em->persist($etsyFeedback);
                $hasNewFeedbacks = true;
            }
        }
        if ($hasNewFeedbacks) {
            $em->flush();
        }
        return $hasNewFeedbacks;
    }

    protected function synchroSales(): bool
    {
        $em = $this->getDoctrine()->getManager();
        $repository = $em->getRepository(EtsySale::class);
        $hasNewSales = false;
        $access_token = $this->config->getEtsyAccessToken();
        $access_token_secret = $this->config->getEtsyAccessTokenSecret();
        $page = 1;
        while ($page) {
            $sales = $this->etsy->getSales($access_token, $access_token_secret, $page);
            if (isset($sales['results']) && is_array($sales['results'])) {
                foreach ($sales['results'] as $sale) {
                    $etsySale = $repository->findOneBy(['receipt_id' => $sale['receipt_id']]);
                    if (null === $etsySale) {
                        $etsySale = new EtsySale();
                        $etsySale
                            ->setReceiptId($sale['receipt_id'])
                            ->setCreationTsz($sale['creation_tsz'])
                            ->setCountryId($sale['country_id'])
                            ->setCountryName($sale['Country']['name'])
                            ->setCountryCode($sale['Country']['iso_country_code']);
                        $em->persist($etsySale);
                        $hasNewSales = true;
                    }
                }
            }
            $page = isset($sales['pagination']['next_page']) ? $sales['pagination']['next_page'] : null;
        }
        if ($hasNewSales) {
            $em->flush();
        }
        return $hasNewSales;
    }

    /**
     * @Route("/get-access-token")
     * @param Request $request
     * @param Etsy $etsy
     * @return Response
     */
    public function etsyGetAccessToken(Request $request, Etsy $etsy): Response
    {
        $etsy
            ->setApiKey($this->config->getEtsyKey())
            ->setApiSecret($this->config->getEtsySecret())
            ->setShopId($this->config->getEtsyShopId())
            ->setSSLCheck($this->config->getAppEnv() !== 'dev');

        $request_token = $request->get('oauth_token');
        $request_token_secret = $request->getSession()->get('oauth_token_secret');
        $verifier = $request->get('oauth_verifier');

        if ($request_token && $request_token_secret && $verifier) {
            $acc_token = $etsy->getAccessToken($request_token, $request_token_secret, $verifier);
            $request->getSession()->set('access_token', $acc_token['oauth_token']);
            $request->getSession()->set('access_token_secret', $acc_token['oauth_token_secret']);
            dump($acc_token);
        } else {
            $callback_url = 'https://localbelatika.com/admin/etsy/get-access-token';
            $requestToken = $etsy->getRequestToken($callback_url, ['transactions_r']);

            if ($requestToken) {
                $login_url = $requestToken['login_url'];
                $oauth_token_secret = $requestToken['oauth_token_secret'];
                $request->getSession()->set('oauth_token_secret', $oauth_token_secret);
                return $this->redirect($login_url);
            }
        }

        die;
    }
}