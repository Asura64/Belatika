<?php

namespace App\DataFixtures;

use App\Entity\Category;
use App\Entity\Image;
use App\Entity\Item;
use App\Entity\Translation;
use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use joshtronic\LoremIpsum;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AppFixtures extends Fixture
{
    /**
     * @var UserPasswordEncoderInterface
     */
    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager):void
    {
        $lipsum = new LoremIpsum();
        $imageExts = ['jpg', 'jpeg', 'png'];
        $customers = ['femme', 'homme'];

        //Creating categories
        $categories = [];
        for($i=1; $i < 20; $i++) {
            $category = new Category();
            $category
                ->setName($lipsum->words(random_int(1, 3)))
                ->setDescription($lipsum->sentences(random_int(1, 5)))
                ->setCustomers($customers[array_rand($customers)]);
            $manager->persist($category);
            $categories[] = $category;
        }

        //Creating items
        for($i=1; $i < 300; $i++) {
            $date = new \DateTime();
            $date->modify('-'.random_int(0,365).' day'); //Random date from last year
            $item = new Item();
            $item
                ->setName($lipsum->words(random_int(5, 10)))
                ->setReference($i)
                ->setDescription($lipsum->sentences(random_int(1, 5)))
                ->setPrice(random_int(10, 100)/2) //Prices 5€ to 50€ step 0.5€
                ->setQuantity(random_int(1, 10))
                ->setHighlighted(random_int(1, 100) >= 95)
                ->setCreatedAt($date)
                ->setDiscount(random_int(0, 5)*10) //Sales set from 0% to 50% step 10%
                ->setCategory($categories[array_rand($categories)]);
            $manager->persist($item);
            $images_number = random_int(1, 3);
            for($j=0; $j < $images_number; $j++) {
                $image = new Image();
                $image
                    ->setAlt($lipsum->words(random_int(1,5)))
                    ->setExt($imageExts[array_rand($imageExts)])
                    ->setItem($item);
                $manager->persist($image);
            }
        }

        //Creating 1 translation for testings
        $translation = new Translation();
        $translation
            ->setCrc32(crc32('Hello world'))
            ->setTarget('fr')
            ->setTranslation('Bonjour le monde');
        $manager->persist($translation);

        //Creating users
        $testUser = new User();
        $testUser
            ->setUsername('test')
            ->setEmail('test@mail.com')
            ->setEnabled(true)
            ->setPassword($this->encoder->encodePassword($testUser, 'test'));
        $manager->persist($testUser);
        $adminUser = new User();
        $adminUser
            ->setUsername('admin')
            ->setEmail('admin@mail.com')
            ->setEnabled(true)
            ->setPassword($this->encoder->encodePassword($adminUser, 'admin'))
            ->addRole('ROLE_ADMIN');
        $manager->persist($adminUser);

        $manager->flush();
    }
}
