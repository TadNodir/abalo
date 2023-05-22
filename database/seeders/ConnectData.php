<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ConnectData extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $articlePath = 'C:\Users\tadno\laravel\abalo\resources\article_has_articlecategory.csv';
        $handleArticle = fopen($articlePath, "r");
        $count = 0;
        while (($row = fgetcsv($handleArticle)) !== false) {
            $count++;
            if ($count == 1) {
                continue;
            }
            $merged_string = implode(" ", array_slice($row, 0, count($row)));
            $items = explode(";", $merged_string);

            DB::table('ab_article_has_articlecategory')->insert([
                'id' => $count - 1,
                'ab_articlecategory_id' => $items[0],
                'ab_article_id' => $items[1]
            ]);
        }
        fclose($handleArticle);
    }

}
