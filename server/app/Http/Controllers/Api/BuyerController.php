<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Buyer;
use App\Http\Resources\BuyerResource;
use App\Http\Requests\StoreBuyerRequest;

class BuyerController extends Controller
{
    /*
    全てのユーザーのレコードを取得
    GET|HEAD        api/buyer/buyer
     */
    public function index() {
        return BuyerResource::collection(Buyer::all());
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
