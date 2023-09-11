<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreShiftRequest;
use App\Http\Resources\ShiftResource;
use App\Models\Shift;
use Illuminate\Http\Request;

class ShiftController extends Controller
{
    /*
    全てのユーザーのレコードを取得
    GET|HEAD        api/shift/shift
     */
    public function index(Request $request)
    {
        // 購入者が選択した日付の値を定義
        $selectedDate = $request->query('date');

        $shifts = Shift::query()->where('date', $selectedDate)->get();

        return ShiftResource::collection($shifts);
    }

    // public function show(Shift $shift)
    // {
    //     return new ShiftResource($shift);
    // }

    public function store(StoreShiftRequest $request)
    {
        $data = $request->validated();

        $shift = Shift::create($data);

        return new ShiftResource($shift);
    }
}
