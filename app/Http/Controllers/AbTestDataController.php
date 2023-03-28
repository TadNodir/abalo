<?php

namespace App\Http\Controllers;

use DateTime;
use PhpOffice\PhpSpreadsheet\Exception;
use PhpOffice\PhpSpreadsheet\Spreadsheet;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AbTestDataController extends Controller
{
    public function getAbTestData(Request $request) {
        $result = DB::select('SELECT * FROM ab_testdata');
        return view('ab_testdata', ['testdata' => $result]);
    }
}
