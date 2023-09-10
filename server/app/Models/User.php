<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    protected $primaryKey = 'id';
    protected $fillable = [
        'id',
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
    // public $timestamps = false;
}
