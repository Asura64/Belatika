<?php

namespace App\Service;


use Doctrine\ORM\EntityManager;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;
use Stichoza\GoogleTranslate\GoogleTranslate;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Yaml\Yaml;
use App\Entity\Translation;

class GoogleTranslator
{
    private GoogleTranslate $translator;
    private RequestStack $request;
    private EntityManager $manager;
    private string $projectDir;
    private string $rootDir;

    public function __construct(
        GoogleTranslate $translator,
        RequestStack $request,
        EntityManager $manager,
        string $projectDir,
        string $rootDir
    )
    {
        $this->translator = $translator;
        $this->request = $request;
        $this->manager = $manager;
        $this->projectDir = $projectDir;
        $this->rootDir = $rootDir;
    }

    /**
     * Returns translated text from translations dir, or translate it from google trans and update translation dir
     *
     * @param string $text
     * @param bool $force
     * @return string
     */
    public function gTrans($text, $force = false):?string
    {
        $text = empty($text) ? '' : $text;
        $request = $this->request->getCurrentRequest();
        if(null === $request) { return $text; }
        $language = $request->getLocale();
        if($language === 'fr' && !$force) { return $text; }

        $translationFile = $this->rootDir . '\translations\messages.'.$language.'.yaml';

        if(file_exists($translationFile)){
            $translations = Yaml::parseFile($translationFile);

            if(is_array($translations) && array_key_exists($text, $translations)) {
                return $translations[$text];
            }
        }

        try {
            $translation = $this->translator->setTarget($language)->translate($text);
            $yaml = Yaml::dump([$text => $translation]);
            file_put_contents($translationFile, $yaml, FILE_APPEND);
            return $translation;
        }catch (\ErrorException $e) {
            return $text;
        }
    }

    /**
     * Returns translated text from database, or translate it from google trans and update database
     *
     * @param string $text
     * @param bool $force
     * @return string
     */
    public function gTransDB($text, $force = false):?string
    {
        if (empty($text)) {
            return '';
        }
        $request = $this->request->getCurrentRequest();
        if(null === $request) { return $text; }
        $language = $request->getLocale();
        if($language === 'fr' && !$force) { return $text; }
        $search = $this->getTranslationFromDatabase($text, $language);
        if(null !== $search) {
            return $search->getTranslation();
        }
        try {
            $translation = new Translation();
            $translatedText = $this->translator->setTarget($language)->translate($text);
            $translation
                ->setTranslation(str_replace('</ ', '</', $translatedText))
                ->setCrc32(crc32($text))
                ->setTarget($language);
            $this->manager->persist($translation);
            $this->manager->flush();
            return $translation->getTranslation();
        }catch (\ErrorException $e) {
            return $text;
        } catch (OptimisticLockException $e) {
            return $text;
        } catch (ORMException $e) {
            return $text;
        }
    }

    /**
     * Search for a translation in database using a text numeric print identifier for faster search
     *
     * @param string $text
     * @param string $language
     * @return Translation|null
     *
     */
    private function getTranslationFromDatabase($text, $language):?Translation
    {
        $crc32 = crc32($text);
        try {
            return $this->manager->getRepository(Translation::class)->searchTranslation($crc32, $language);
        } catch (NonUniqueResultException $e) {
            return null;
        }
    }
}