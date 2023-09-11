<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class History extends Model
{
    use HasFactory;

    protected $fillable = [
        'buyer_id',
        'agent_id',
        'delivery_date',
        'delivery_time',
        'receiving_address'
    ];
}
