<?php

use App\Http\Controllers\AbTestDataController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/testdata',[AbTestDataController::class,'getAbTestData']);

Route::get('/login', [App\Http\Controllers\AuthController::class, 'login'])->name('login');
Route::get('/logout', [App\Http\Controllers\AuthController::class, 'logout'])->name('logout');
Route::get('/isloggedin', [App\Http\Controllers\AuthController::class, 'isloggedin'])->name('haslogin');

Route::get('/articles', [App\Http\Controllers\ArticleController::class, 'search_articles'])->name('articles');

Route::get('/home', [App\Http\Controllers\HomeController::class, 'show']);

Route::post('/newarticle', [App\Http\Controllers\ArticleController::class, 'saveArticle']);

Route::get('/newarticle', [App\Http\Controllers\ArticleController::class, 'showNewArticle']);
