<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Evaluation extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'buyer_id',
        'agent_id',
        'review',
        'date',
        'comment'
    ];
}
