<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ArticleController extends Controller
{
    public function search_articles(Request $request) {
        $input = "";
        if (isset($_GET['searchArticle'])) {
            if ($_GET['searchArticle'] != null) {
                $input = htmlspecialchars($_GET['searchArticle']);
            }
        }

        $result = DB::select("SELECT id, ab_name, ab_price, ab_description FROM ab_article WHERE LOWER(ab_name) LIKE LOWER('%$input%')");
        return view('articles', ['article' => $result]);
    }
}
