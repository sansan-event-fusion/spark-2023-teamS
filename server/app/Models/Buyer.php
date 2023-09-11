<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Buyer extends Model
{
    use HasFactory;

    protected $primaryKey = 'uuid';
    protected $fillable = [
        'uuid',
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
}
