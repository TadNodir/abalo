<?php

namespace App\Http\Controllers;

use App\Models\Ab_Article;
use App\Models\Ab_shoppingcart;
use App\Models\Ab_shoppingcart_item;
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

    public function search_articles_api(Request $request): \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View|\Illuminate\Foundation\Application
    {
        $input = "";
        if (isset($_GET['searchArticle'])) {
            if ($_GET['searchArticle'] != null) {
                $input = htmlspecialchars($_GET['searchArticle']);
            }
        }

        $result = DB::select("SELECT id, ab_name, ab_price, ab_description FROM ab_article WHERE LOWER(ab_name) LIKE LOWER('%$input%')");
        return view('articles', ['article' => $result]);
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

    public function saveInCard_api(Request $request) {

        //TODO: check a cart if exists with the help of user id
        //

        $user = $request->creator_id;
//        dd($request);
        $article = $request->article_id;

        var_dump($article);
//        $cart_id = Ab_ShoppingCart::query()->select("id")->where('ab_creator_id', $user);
        $cart_id = DB::table('ab_shoppingcart')
            ->selectRaw('CAST(id AS bigint)')
            ->where('ab_creator_id', $user)
            ->value('id');
        if (!is_null($cart_id)) {

            $cart_id = Ab_ShoppingCart::all()->last()->id + 1;

            Ab_ShoppingCart::create([
                'id' => $cart_id,
                'ab_creator_id' => $user,
                'ab_createdate' => Carbon::now()->toDateTimeString()
            ]);
        } else {
            $cart_id = 1;
            $item_id = Ab_shoppingcart_item::all()->last();
            if ($item_id == 0) {
                $item_id = 1;
            } else {
                $item_id = Ab_shoppingcart_item::all()->last()->id + 1;
            }
            Ab_shoppingcart_item::create([
                'id' => $item_id,
                'ab_shoppingcart_id' => $cart_id,
                'ab_article_id' => $article,
                'ab_createdate' => Carbon::now()->toDateTimeString()
            ]);
        }

        return response()->json([
            "success" => "Erfolg"
        ]);
    }

    public function deleteFromCard_api(Request $request) {

        $this->validate($request, [

        ]);

        Ab_shoppingcart::create([

        ]);

        Ab_shoppingcart_item::create([

        ]);

        return response()->json([]);
    }

    /**
     * @throws ValidationException
     */
    public function showNewArticle(Request $request): \Illuminate\Contracts\View\View|\Illuminate\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\Foundation\Application
    {
        return view('newArticle');
    }

    public function newSite_api(Request $request): \Illuminate\Contracts\View\View|\Illuminate\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\Foundation\Application
    {
        $input = "";
        if (isset($_GET['searchArticle'])) {
            if ($_GET['searchArticle'] != null) {
                $input = htmlspecialchars($_GET['searchArticle']);
            }
        }

        $result = DB::select("SELECT id, ab_name, ab_price, ab_description FROM ab_article WHERE LOWER(ab_name) LIKE LOWER('%$input%')");
        return view('newsite', ['article' => $result]);
    }
}
