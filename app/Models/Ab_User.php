<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ab_User extends Model
{
    use HasFactory;

    public function article()
    {
        return $this->hasMany(Ab_Article::class);
    }
}
