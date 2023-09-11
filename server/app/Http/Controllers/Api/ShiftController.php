<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreShiftRequest;
use App\Http\Resources\ShiftResource;
use App\Models\Shift;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class ShiftController extends Controller
{
    /*
    全てのユーザーのレコードを取得
    GET|HEAD        api/shift/shift
     */
    public function index()
    {
        $shifts = Shift::all();
        $validShifts = [];

        $now = Carbon::now();
        $now = $now->toDateTimeString();

        foreach ($shifts as $shift) {
            if ($shift->ends_time > $now) {
                array_push($validShifts, $shift);
            }
        }

        return ShiftResource::collection($validShifts);
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
