<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AbTestDataController extends Controller
{
    public function getAbTestData(Request $request) {
        // TODO change the Methodenrumpf here
        $result = DB::select('SELECT * FROM ab_testdata');
        return view('ab_testdata', ['testdata' => $result]);
    }
}
