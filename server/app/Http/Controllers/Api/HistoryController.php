<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\History;
use App\Http\Resources\HistoryResource;
use App\Http\Requests\StoreHistoryRequest;

class HistoryController extends Controller
{
    public function index() {
        $allDeliveries = History::all();
        return HistoryResource::collection($allDeliveries);
    }

    public function show(History $history)
    {
        return new HistoryResource($history);
    }

    public function store(StoreHistoryRequest $request)
    {
        $data = $request->validated();
        $history = History::create($data);
        return new HistoryResource($history);
    }

    public function update(Request $request, $id)
    {
        $history = History::findOrFail($id);

        // リクエストからstatusの値を取得
        $status = $request->input('status');

        if ($status) { // statusがtrueの場合
            $history->status = true;
            $message = 'History status set to true successfully!';
        } else { // statusがfalseの場合
            $history->status = false;
            $message = 'History status set to false successfully!';
        }

        $history->save();

        return response()->json([
            'status' => 'success',
            'message' => $message
        ]);
    }

}
