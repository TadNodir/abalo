<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ab_Article extends Model
{
    use HasFactory;
    protected $table = 'ab_article';
    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
        'ab_name',
        'ab_price',
        'ab_description',
        'ab_creator_id',
        'ab_createdate'
    ];

    public function article_hasCategory()
    {
        return $this->hasMany(Ab_Article_Has_ArticleCategory::class);
    }

    public function user(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Ab_User::class);
    }
}
