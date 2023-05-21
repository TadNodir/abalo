<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ab_shoppingcart extends Model
{
    use HasFactory;
    protected $table = 'ab_shoppingcart';
    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
        'ab_creator_id',
        'ab_createdate'
    ];

    public function cart()
    {
        return $this->hasMany(Ab_shoppingcart_item::class);
    }

    public function user(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Ab_User::class);
    }
}
