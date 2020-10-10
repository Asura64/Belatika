<?php

namespace App\Tests\Twig\Extension;


use App\Entity\Translation;
use App\Repository\TranslationRepository;
use App\Twig\Extension\FilterExtension;
use Doctrine\ORM\EntityManager;
use Stichoza\GoogleTranslate\GoogleTranslate;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;

class TransExtensionTest extends WebTestCase
{
    /**
     * @dataProvider translations
     * @param string $text
     * @param string $expected
     * @param Translation|null $translation
     */
    public function testTranslateFromDB(string $text, string $expected, Translation $translation = null):void
    {
        $translator = $this->getMockBuilder(GoogleTranslate::class)->getMock();
        $translator->method('setTarget')->willReturn($translator);
        $translator->method('translate')->willReturn($expected);

        $requestStack = $this->getMockBuilder(RequestStack::class)->getMock();
        $request = new Request();
        $requestStack->expects($this->once())->method('getCurrentRequest')->willReturn($request);

        $translationRepository = $this->getMockBuilder(TranslationRepository::class)->disableOriginalConstructor()->getMock();
        $translationRepository->method('searchTranslation')->willReturn($translation);

        $objectManager = $this->getMockBuilder(EntityManager::class)->getMock();
        $objectManager->method('getRepository')->willReturn($translationRepository);

        self::bootKernel();
        $container = self::$kernel->getContainer();
        $projectDir = $container->getParameter('kernel.project_dir');

        $transExtension = new FilterExtension($translator, $requestStack, $objectManager, $projectDir);
        $this->assertSame($expected, $transExtension->gTransDB($text));
    }

    public function testTranslateFromDBWithError():void
    {
        $translator = $this->getMockBuilder(GoogleTranslate::class)->getMock();
        $translator->method('setTarget')->willReturn($translator);
        $translator->method('translate')->will($this->throwException(new \ErrorException('test')));

        $requestStack = $this->getMockBuilder(RequestStack::class)->getMock();
        $request = new Request();
        $requestStack->expects($this->once())->method('getCurrentRequest')->willReturn($request);

        $translationRepository = $this->getMockBuilder(TranslationRepository::class)->disableOriginalConstructor()->getMock();

        $objectManager = $this->getMockBuilder(EntityManager::class)->getMock();
        $objectManager->method('getRepository')->willReturn($translationRepository);

        self::bootKernel();
        $container = self::$kernel->getContainer();
        $projectDir = $container->getParameter('kernel.project_dir');

        $transExtension = new FilterExtension($translator, $requestStack, $objectManager, $projectDir);
        $this->assertSame('Should return untranslated text on error', $transExtension->gTransDB('Should return untranslated text on error'));
    }

    public function testTranslate():void
    {
        $translator = $this->getMockBuilder(GoogleTranslate::class)->getMock();
        $translator->method('setTarget')->willReturn($translator);
        $translator->method('translate')->willReturn('Translated text');

        $requestStack = $this->getMockBuilder(RequestStack::class)->getMock();
        $request = new Request();
        $requestStack->expects($this->once())->method('getCurrentRequest')->willReturn($request);

        $objectManager = $this->getMockBuilder(EntityManager::class)->getMock();

        self::bootKernel();
        $container = self::$kernel->getContainer();
        $projectDir = $container->getParameter('kernel.project_dir');

        $transExtension = new FilterExtension($translator, $requestStack, $objectManager, $projectDir);
        $this->assertSame('Translated text', $transExtension->gTrans('Text to translate'));
    }
    public function testTranslateWithError():void
    {
        $translator = $this->getMockBuilder(GoogleTranslate::class)->getMock();
        $translator->method('setTarget')->willReturn($translator);
        $translator->method('translate')->will($this->throwException(new \ErrorException('test')));

        $requestStack = $this->getMockBuilder(RequestStack::class)->getMock();
        $request = new Request();
        $requestStack->expects($this->once())->method('getCurrentRequest')->willReturn($request);

        $objectManager = $this->getMockBuilder(EntityManager::class)->getMock();

        self::bootKernel();
        $container = self::$kernel->getContainer();
        $projectDir = $container->getParameter('kernel.project_dir');

        $transExtension = new FilterExtension($translator, $requestStack, $objectManager, $projectDir);
        $this->assertSame('Should return untranslated text on error', $transExtension->gTrans('Should return untranslated text on error'));
    }

    public function translations():array
    {
        $translation1 = new Translation();
        $translation2 = new Translation();
        return [
            ['Hello world', 'Bonjour le monde', $translation1->setCrc32(-1948869038)->setTarget('fr')->setTranslation('Bonjour le monde')],
            ['Kenavo', 'Kenavo', $translation2->setCrc32(-1291116369)->setTarget('fr')->setTranslation('Kenavo')],
            ['Unknown', 'Inconnu', null],
        ];
    }
}