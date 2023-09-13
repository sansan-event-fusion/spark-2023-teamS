<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Agent;
use Illuminate\Http\Request;
use App\Http\Resources\AgentResource;
use App\Http\Requests\StoreAgentRequest;

class AgentController extends Controller
{
    //代理人のログイン
    public function signIn(Request $request) {
        // $allAgents = Agent::all();
        $agent = Agent::query()->where('firebase_uid', $request->firebase_uid)->first();

        response()->json($agent);

        return AgentResource::make($agent);
    }

    public function show(Agent $agent)
    {
        return new AgentResource($agent);
    }

    // 代理人の登録
    public function signUp(StoreAgentRequest $request)
    {
        $data = $request->validated();
        $agent = Agent::create($data);
        return new AgentResource($agent);
    }
}
