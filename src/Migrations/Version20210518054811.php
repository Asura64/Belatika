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
        'Blanc' => [828,836,854,869,991,994,995,1003,1024,1052,1071,1074,1078,1091,1096,1097,1108,1110],
        'Noir' => [701,810,823,847,849,860,875,896,897,912,919,938,948,950,952,957,964,983,987,990,999,1002,1004,1009,1012,1017,1019,1021,1028,1037,1044,1055,1068,1070,1075,1077,1079,1085,1088,1090,1095,1099,1102,1104,1105,1106,1109],
        'Or' => [691,697,713,793,795,828,839,840,847,854,856,867,868,869,879,880,884,887,888,891,893,903,904,905,914,918,919,923,925,926,929,963,970,971,974,975,982,983,985,987,989,990,991,992,993,995,997,998,999,1000,1001,1002,1003,1004,1005,1009,1010,1011,1012,1013,1014,1015,1016,1017,1019,1020,1021,1022,1023,1024,1025,1026,1027,1028,1030,1033,1036,1037,1038,1041,1042,1043,1044,1052,1053,1054,1057,1060,1061,1065,1068,1070,1071,1072,1073,1074,1076,1077,1078,1082,1083,1085,1086,1088,1090,1091,1092,1093,1094,1095,1096,1097,1098,1101,1102,1104,1105,1106,1107,1108,1110,1112,1114,1115,1116],
        'Argent' => [6,7,20,693,701,707,708,727,735,790,791,798,800,810,811,817,818,821,825,826,827,831,832,833,836,838,849,855,859,860,861,862,871,872,873,874,875,876,877,878,883,885,890,896,897,899,908,912,913,920,922,927,928,930,933,934,935,936,937,938,939,940,941,943,944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959,960,961,962,964,965,966,967,968,971,972,979,981,984,986,988,994,996,1007,1008,1029,1031,1032,1034,1035,1039,1046,1047,1048,1049,1050,1051,1055,1056,1058,1059,1060,1062,1063,1064,1066,1069,1075,1079,1080,1081,1084,1087,1089,1099,1100,1103,1109,1111,1113],
        'Marron' => [827,833,936,937,1111],
        'Rouge' => [840,891,905,967,998,1030,1073],
        'Vert' => [790,800,831,838,849,872,873,933,934,949,951,965,966,1015,1016,1038,1039,1042,1059,1093,1109],
        'Bleu' => [6,7,707,793,795,811,817,821,849,859,883,887,888,914,922,927,929,930,935,944,956,959,984,989,993,1001,1013,1020,1023,1025,1026,1027,1034,1036,1051,1053,1062,1064,1082,1086,1087,1098,1115],
        'Jaune' => [928,1010,1063,1074],
        'Orange' => [20,880,926,982,1009],
        'Violet' => [826,871,890,913,940,992],
        'Turquoise' => [867,970,985,986,1000,1032,1076,1094,1114],
        'Gris' => [6,818,823,861,874,946,981,1014,1022,1035],
        'Rose' => [697,727,791,825,832,855,862,876,885,908,918,925,941,947,952,968,976,1041,1056,1082,1103],
        'Beige' => [1087,1111],
        'Pêche' => [1050],
        'Multicolore' => [960,997,1049],
        'Transparent' => [708,798,877,939,943,953,954,955,1014],
        'Fuchsia' => [877,953,954],
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
        $i = 0;
        foreach (self::COLORS as $color => $itemIds) {
            $i++;
            $this->addSql("INSERT INTO color (id, name) VALUES ($i, '$color')");
            $ids = implode(',', $itemIds);
            $this->addSql("INSERT INTO item_color (item_id, color_id) SELECT id, $i FROM item WHERE visible AND id IN ($ids)");
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
