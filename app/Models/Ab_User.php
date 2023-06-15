<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Ab_User extends Model
{
    use HasApiTokens, HasFactory, Notifiable;
    protected $table = 'ab_user';
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
        'ab_name',
        'ab_password',
        'ab_mail',
        'created_at',
        'updated_at'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'ab_password',
    ];

    public function article()
    {
        return $this->hasMany(Ab_Article::class);
    }
}
