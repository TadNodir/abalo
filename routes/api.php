<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Ratchet\Client\Connector;
use Ratchet\Client\WebSocket;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Route::get('/articles/{id}', [App\Http\Controllers\ArticleController::class, 'index_api'])->name('articles.index');

Route::get('/articles', [App\Http\Controllers\ArticleController::class,'search_articles_api'])->name('api_articles');

Route::post('/articles', [App\Http\Controllers\ArticleController::class, 'saveArticle_api']);

Route::post('/shoppingcart', [App\Http\Controllers\ArticleController::class, 'saveInCard_api']);

Route::delete('/shoppingcart', [App\Http\Controllers\ArticleController::class, 'deleteFromCard_api']);

Route::post('/articles/{id}/sold', [App\Http\Controllers\ArticleController::class, 'article_sold_api'])->name("sold");

Route::get('/articles/{id}/sell', [App\Http\Controllers\ArticleController::class, 'sell_article_api'])->name("sell");

