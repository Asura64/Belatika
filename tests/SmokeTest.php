<?php


namespace App\Tests;


use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class SmokeTest extends WebTestCase
{
    /**
     * @dataProvider provideUrls
     * @param string $pageName
     * @param string $url
     */
    public function testPageIsSuccesfull(string $pageName, string $url)
    {
        $client = self::createClient();
        $client->request('GET', $url, [], [], ['HTTPS' => true]);
        $response = $client->getResponse();

        self::assertTrue(
            $response->isSuccessful(),
            sprintf(
                'La page "%s" devrait être accessible, mais le code HTTP est "%s".',
                $pageName,
                $response->getStatusCode()
            )
        );
    }

    public function provideUrls()
    {
        return [
            'Accueil' => ['Accueil', '/'],
            'Bagues' => ['Bagues', '/bijoux/femme/bagues'],
            'Colliers' => ['Colliers', '/bijoux/femme/colliers'],
//            'Panier' => ['Panier', '/panier'],
        ];
    }
}