<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AbTestData extends Model
{
    use HasFactory;
    // verwendeter Primärschlüssel
    protected $primaryKey = 'id';
    // verwendeter Attribut
    protected $name = 'ab_testname';
    // Name der Tabelle
    protected $table = 'ab_testdata';
}
