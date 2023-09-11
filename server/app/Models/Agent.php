<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Agent extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'postal_code',
        'prefecture',
        'city',
        'address1',
        'address2',
        'phone_number',
        'firebase_uid'
    ];

    // ユーザー登録時にuuidを自動生成
    protected static function boot()
    {
        parent::boot();

        // モデルが作成される前にUUIDを自動生成
        static::creating(function ($model) {
            $model->uuid = Str::uuid();
        });
    }
}
