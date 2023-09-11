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
}
