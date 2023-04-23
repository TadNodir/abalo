<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ab_Article_Has_ArticleCategory extends Model
{
    use HasFactory;

    protected $table = 'ab_article_has_articlecategory';
    public $timestamps = false;

    public function article(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Ab_Article::class);
    }

    public function category(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Ab_ArticleCategory::class);
    }
}
