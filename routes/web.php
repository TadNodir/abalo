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

Route::post('/verifyLogin', [App\Http\Controllers\AuthController::class, 'verifyLogin'])->name('verifyLogin');

Route::get('/logout', [App\Http\Controllers\AuthController::class, 'logout'])->name('log_out');

Route::get('/articles', [App\Http\Controllers\ArticleController::class, 'search_articles'])->name('articles');

Route::get('/home', [App\Http\Controllers\HomeController::class, 'show']);

Route::post('/newarticle', [App\Http\Controllers\ArticleController::class, 'saveArticle']);

Route::get('/newarticle', [App\Http\Controllers\ArticleController::class, 'showNewArticle'])->middleware('auth');

Route::get('/newsite', [App\Http\Controllers\ArticleController::class, 'newSite']);

//
//use App\Http\Controllers\AbTestDataController;
//use Illuminate\Support\Facades\Auth;
//use Illuminate\Support\Facades\Route;
//
///*
//|--------------------------------------------------------------------------
//| Web Routes
//|--------------------------------------------------------------------------
//|
//| Here is where you can register web routes for your application. These
//| routes are loaded by the RouteServiceProvider and all of them will
//| be assigned to the "web" middleware group. Make something great!
//|
//*/
//
//Route::get('/', function () {
//    return view('welcome');
//});
//
//Route::get('/testdata', [AbTestDataController::class, 'getAbTestData']);
//
//Route::post('/login', [App\Http\Controllers\Auth\LoginController::class, 'login'])->name('login');
//
//Route::post('/register', [App\Http\Controllers\Auth\RegisterController::class, 'create'])->name('register');
//
////Route::post('/logout', [App\Http\Controllers\AuthController::class, 'logout'])->name('logout');
////
////Route::get('/isloggedin', [App\Http\Controllers\AuthController::class, 'isloggedin'])->name('haslogin');
//
//Route::get('/articles', [App\Http\Controllers\ArticleController::class, 'search_articles'])->name('articles');
//
//Route::get('/home', [App\Http\Controllers\HomeController::class, 'show']);
//
//Route::post('/newarticle', [App\Http\Controllers\ArticleController::class, 'saveArticle']);
//
//Route::get('/newarticle', [App\Http\Controllers\ArticleController::class, 'showNewArticle']);
//
//Route::get('/newsite', [App\Http\Controllers\ArticleController::class, 'newSite']);
//
////Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
//

//Auth::routes();
//
//Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
