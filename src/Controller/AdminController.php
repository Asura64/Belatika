<?php

namespace App\Controller;

use App\Entity\CustomerOrder;
use App\Entity\EtsyFeedback;
use App\Entity\Image;
use App\Entity\Item;
use App\Form\ItemType;
use App\Form\SettingsType;
use App\Repository\ItemRepository;
use App\Service\API\Etsy;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Yaml\Yaml;

/**
 * @Route("/admin")
 */
class AdminController extends ParentController
{
    private $settingsFile;

    /**
     * @Route("/")
     * @return Response
     */
    public function index()
    {
        return $this->render($this->getTemplate('admin/index.html.twig'));
    }

    /**
     * @Route("/test-mail/{reference<\d+>}")
     * @param CustomerOrder $customerOrder
     * @return Response
     */
    public function testMail(CustomerOrder $customerOrder)
    {
//        $this->fastMail('test mail', 'patxi064@gmail.com', 'mail/sentOrder.html.twig', ['order' => $customerOrder]);

        return $this->render('mail/sentOrder.html.twig', ['order' => $customerOrder]);
    }

    /**
     * @Route("/settings")
     * @param Request $request
     * @return Response
     */
    public function settings(Request $request): Response
    {
        $this->settingsFile = $this->getParameter('kernel.project_dir').'\config\packages\belatika.yaml';
        $shop_settings = $this->getShopSettings();

        $form = $this->createForm(SettingsType::class, $shop_settings);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $shop_settings = $form->getData();
            $this->setShopSettings($shop_settings);
        }

        return $this->render('admin/settings.html.twig', ['form' => $form->createView()]);
    }

    private function getShopSettings(): array
    {
        $belatika_yaml = Yaml::parseFile($this->settingsFile);
        $shop_settings = $belatika_yaml['parameters']['shop_settings'];

        $salesStart = $shop_settings['sales']['start'];
        $salesStart = date_create()->setTimestamp($salesStart)->format('d/m/Y');
        $salesEnd = $shop_settings['sales']['end'];
        $salesEnd = date_create()->setTimestamp($salesEnd)->format('d/m/Y');

        $shop_settings['sales'] = $salesStart. ' - '.$salesEnd;

        return $shop_settings;
    }

    private function setShopSettings($shopSettings): void
    {
        $sales = explode(' - ', $shopSettings['sales']);
        $sales = [
            'start' => \DateTime::createFromFormat('d/m/Y H:i:s', $sales[0].' 00:00:00')->getTimestamp(),
            'end' => \DateTime::createFromFormat('d/m/Y H:i:s', $sales[1].' 00:00:00')->getTimestamp(),
        ];

        $shopSettings['sales'] = $sales;

        $belatika_yaml = Yaml::parseFile($this->settingsFile);

        foreach ($shopSettings as $settingName => $setting) {
            if (array_key_exists($settingName, $belatika_yaml['parameters']['shop_settings'])) {
                $belatika_yaml['parameters']['shop_settings'][$settingName] = $setting;
            }
        }

        file_put_contents($this->settingsFile, Yaml::dump($belatika_yaml));
    }

    /**
     * @Route("/etsy/get-feedbacks")
     */
    public function etsyGetFeedbacks()
    {
        $em = $this->getDoctrine()->getManager();
        $repository = $em->getRepository(EtsyFeedback::class);
        $etsy = new Etsy(getenv('ETSY_KEY'), getenv('ETSY_USER_ID'));
        $feedbacks = $etsy->getFeedbacks();
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
        die;
    }

    protected function render($view, array $parameters = [], Response $response = null)
    {
        $menus = [
            'Site Front' => $this->generateUrl('app_shop_index'),
            'Tableau de bord' => $this->generateUrl('app_admin_index'),
            'Blog' => $this->generateUrl('app_admin_blog_blog'),
            'Bijoux' => $this->generateUrl('app_admin_item_items'),
            'Bijoux-sub' => [
                'Nouveau' => $this->generateUrl('app_admin_item_add'),
            ],
            'Commandes' => $this->generateUrl('app_admin_order_orders'),
            'Utilisateurs' => $this->generateUrl('app_admin_user_users'),
        ];
        $parameters['menus'] = $menus;
        return parent::render($view, $parameters, $response);
    }
}
