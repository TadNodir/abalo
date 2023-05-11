<?php

namespace App\Http\Controllers;

use App\Models\Ab_Article;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;

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

    public function search_articles_api(Request $request): \Illuminate\Http\JsonResponse
    {
        $input = "";
        if (isset($_GET['searchArticle'])) {
            if ($_GET['searchArticle'] != null) {
                $input = htmlspecialchars($_GET['searchArticle']);
            }
        }

        $result = DB::select("SELECT id, ab_name, ab_price, ab_description FROM ab_article WHERE LOWER(ab_name) LIKE LOWER('%$input%')");
        return response()->json(['article' => $result]);
    }


    /**
     * @throws ValidationException
     */
    public function saveArticle(Request $request): \Illuminate\Http\JsonResponse
    {
        $this->validate($request, [
            'name' => 'required|max:80',
            'price' => 'required|numeric|gt:0',
            'description' => 'max:1000',
        ]);

        $lastArticle = Ab_Article::all()->last();
        Ab_Article::create([
            'id' => $lastArticle->id + 1,
            'ab_name' => $request->name,
            'ab_price' => $request->price,
            'ab_description' => $request->description,
            'ab_creator_id' => 1,
            'ab_createdate' => Carbon::now()->toDateTimeString()
        ]);

        return response()->json(['success' => 'Erfolgreich']);
    }

    public function saveArticle_api(Request $request): \Illuminate\Http\JsonResponse
    {
        $this->validate($request, [
            'name' => 'required|max:80',
            'price' => 'required|numeric|gt:0',
            'description' => 'max:1000'
        ]);

        $id = Ab_Article::all()->last()->id + 1;
        Ab_Article::create([
            'id' => $id,
            'ab_name' => $request->name,
            'ab_price' => $request->price,
            'ab_description' => $request->description,
            'ab_creator_id' => 1,
            'ab_createdate' => Carbon::now()->toDateTimeString()
        ]);

        return response()->json(['id' => $id]);
    }

    /**
     * @throws ValidationException
     */
    public function showNewArticle(Request $request): \Illuminate\Contracts\View\View|\Illuminate\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\Foundation\Application
    {
        return view('newArticle');
    }
}
