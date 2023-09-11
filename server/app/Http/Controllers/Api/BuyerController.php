<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Buyer;
use App\Http\Resources\BuyerResource;
use App\Http\Requests\StoreBuyerRequest;

class BuyerController extends Controller
{
    public function index() {
        $allBuyers = Buyer::all();
        return BuyerResource::collection($allBuyers);
    }

    public function show(Buyer $buyer)
    {
        return new BuyerResource($buyer);
    }

    public function store(StoreBuyerRequest $request)
    {
        $data = $request->validated();
        $buyer = Buyer::create($data);
        return new BuyerResource($buyer);
    }
}
