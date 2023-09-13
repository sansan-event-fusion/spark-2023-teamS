<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Buyer;
use App\Http\Resources\BuyerResource;
use App\Http\Requests\StoreBuyerRequest;

class BuyerController extends Controller
{
    public function __construct()
    {
        $this->middleware('firebase');
    }

    // 購入者のログイン
    public function signIn(Request $request) {
        // $allBuyers = Buyer::all();
        $buyer = Buyer::query()->where('firebase_uid', $request->firebase_uid)->first();

        response()->json($buyer);

        return BuyerResource::make($buyer);
    }

    public function show(Buyer $buyer)
    {
        return new BuyerResource($buyer);
    }

    //購入者の登録
    public function signUp(StoreBuyerRequest $request)
    {
        $data = $request->validated();
        $buyer = Buyer::create($data);
        return new BuyerResource($buyer);
    }
}
