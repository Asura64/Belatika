<?php

declare(strict_types=1);

namespace App\Migrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210515074132 extends AbstractMigration
{
    public function getDescription() : string
    {
        return 'Ajout mapping catégories google product';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE category ADD google_category VARCHAR(255) NOT NULL');
        $this->addSql("UPDATE category SET google_category = 'Vêtements et accessoires > Bijoux > Bracelets' WHERE name = 'Bracelets'");
        $this->addSql("UPDATE category SET google_category = 'Vêtements et accessoires > Bijoux > Colliers' WHERE name = 'Colliers'");
        $this->addSql("UPDATE category SET google_category = 'Vêtements et accessoires > Bijoux > Boucles d\'oreilles' WHERE name = 'Boucles d\'oreilles'");
        $this->addSql("UPDATE category SET google_category = 'Vêtements et accessoires > Bijoux > Bagues' WHERE name = 'Bagues'");
        $this->addSql("UPDATE category SET google_category = 'Vêtements et accessoires > Bijoux > Parures de bijoux' WHERE name = 'Parures'");
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE category DROP google_category');
    }
}
