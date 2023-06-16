<?php

namespace App\Http\Controllers;

use App\Models\Ab_User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;
use App\Http\Controllers\ArticleController;
/**
 * Write static login information to the session.
 * Use for test purposes.
 */
class AuthController extends Controller
{
    public function login(): \Illuminate\Contracts\View\View|\Illuminate\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\Foundation\Application
    {
        return view('auth.login');
    }

    public function logout(Request $request) {
        $request->session()->flush();
        return redirect()->route('login');
    }


    /**
     * @throws ValidationException
     */
    public function verifyLogin(Request $request)
    {
        $request->session()->start();

        $this->validate($request, [
            'email' => 'required|string|max:200',
            'password' => 'required|string|min:5|max:200',
        ]);

        $input = "";
        if (isset($_POST['email'])) {
            if ($_POST['email'] != null) {
                $input = htmlspecialchars($_POST['email']);
            }
        }

        $result = DB::select("SELECT id, ab_name, ab_mail FROM ab_user WHERE LOWER(ab_mail) = LOWER('$input')");

        if ($result) {
            $request->session()->put('abalo_id', $result[0]->id);
            $request->session()->put('abalo_user', $result[0]->ab_name);
            $request->session()->put('abalo_mail', $result[0]->ab_mail);
            $request->session()->put('abalo_time', time());
            $request->session()->save();

            return redirect()->route("api_articles");
//            return redirect()->route('articles.show', ['user' => $result]);
        } else {
            return view('auth.login');
        }
    }
}
