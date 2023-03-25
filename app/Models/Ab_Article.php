<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ab_Article extends Model
{
    use HasFactory;

    public function article_hasCategory()
    {
        return $this->hasMany(Ab_Article_Has_ArticleCategory::class);
    }

    public function user(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Ab_User::class);
    }
}
