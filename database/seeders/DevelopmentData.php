<?php

namespace Database\Seeders;

use DateTime;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

require 'vendor/autoload.php';

class DevelopmentData extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $userPath = 'C:\Users\tadno\laravel\abalo\resources\user.csv';
        $count = 0;
        $handleUser = fopen($userPath, "r");
        while (($row = fgetcsv($handleUser)) !== false) {
            $count++;
            if ($count == 1) {
                continue;
            }
            $merged_string = implode(" ", array_slice($row, 0, count($row)));

            $items = explode(";", $merged_string);
            DB::table('ab_user')->insert([
                'id' => $items[0],
                'ab_name' => $items[1],
                'ab_password' => $items[2],
                'ab_mail' => $items[3]
            ]);

        }
        fclose($handleUser);

        $articlePath = 'C:\Users\tadno\laravel\abalo\resources\articles.csv';
        $handleArticle = fopen($articlePath, "r");
        $count = 0;
        while (($row = fgetcsv($handleArticle)) !== false) {
            $count++;
            if ($count == 1) {
                continue;
            }
            $merged_string = implode(" ", array_slice($row, 0, count($row)));

            $newStr = str_replace('"', '', $merged_string);
            $items = explode(";", $newStr);
            $timestp = $this->convertTimestamp($items[5]);

            DB::table('ab_article')->insert([
                'id' => $items[0],
                'ab_name' => $items[1],
                'ab_price' => str_replace('.', '', $items[2]),
                'ab_description' => $items[3],
                'ab_creator_id' => $items[4],
                'ab_createdate' => $timestp
            ]);
        }
        fclose($handleArticle);

        $articleCatPath = 'C:\Users\tadno\laravel\abalo\resources\articlecategory.csv';
        $handleArtCat = fopen($articleCatPath, "r");
        $count = 0;
        while (($row = fgetcsv($handleArtCat)) !== false) {
            $count++;
            if ($count == 1) {
                continue;
            }

            $merged_string = implode(" ", array_slice($row, 0, count($row)));
            $items = explode(";", $merged_string);

            if ($items[2] === "NULL") {
                $items[2] = (int) NULL;
            }
            DB::table('ab_articlecategory')->insert([
                'id' => $items[0],
                'ab_name' => $items[1],
                'ab_parent' => str_replace('NULL', null, $items[2])
            ]);
        }
        fclose($handleArtCat);
    }

    function convertTimestamp($timestamp): string
    {
        $datetime = DateTime::createFromFormat('d.m.y H:i', $timestamp);
        return $datetime->format('Y-m-d H:i:s');
    }
}
