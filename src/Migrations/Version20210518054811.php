<?php

declare(strict_types=1);

namespace App\Migrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210518054811 extends AbstractMigration
{
    const COLORS = [
        'Blanc',
        'Noir',
        'Or' => 'or|dorée?',
        'Argent',
        'Metal',
        'Rouge',
        'Vert',
        'Bleu',
        'Jaune',
        'Orange',
        'Violet',
        'Turquoise',
        'Gris',
        'Rose',
    ];

    public function getDescription() : string
    {
        return 'Ajout couleurs des bijoux';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE color (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE item_color (item_id INT NOT NULL, color_id INT NOT NULL, INDEX IDX_4CF15339126F525E (item_id), INDEX IDX_4CF153397ADA1FB5 (color_id), PRIMARY KEY(item_id, color_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE item_color ADD CONSTRAINT FK_4CF15339126F525E FOREIGN KEY (item_id) REFERENCES item (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE item_color ADD CONSTRAINT FK_4CF153397ADA1FB5 FOREIGN KEY (color_id) REFERENCES color (id) ON DELETE CASCADE');
        $i = 1;
        foreach (self::COLORS as $key => $value) {
            if (is_numeric($key)) {
                $color = $value;
                $regex = false;
            } else {
                $color = $key;
                $regex = $value;
            }
            $this->addSql("INSERT INTO color (id, name) VALUES ($i, '$color')");
            if ($regex) {
                $this->addSql("INSERT INTO item_color (item_id, color_id) SELECT id, $i FROM item WHERE visible AND name REGEXP '$regex'");
            } else {
                $this->addSql("INSERT INTO item_color (item_id, color_id) SELECT id, $i FROM item WHERE visible AND name LIKE '%$color%'");
            }
            $i++;
        }
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE item_color DROP FOREIGN KEY FK_4CF153397ADA1FB5');
        $this->addSql('DROP TABLE color');
        $this->addSql('DROP TABLE item_color');
    }
}
