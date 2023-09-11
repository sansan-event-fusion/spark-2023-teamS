<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Agent;
use Illuminate\Http\Request;
use App\Http\Resources\AgentResource;
use App\Http\Requests\StoreAgentRequest;

class AgentController extends Controller
{
    public function index() {
        $allAgents = Agent::all();
        return AgentResource::collection($allAgents);
    }

    public function show(Agent $agent)
    {
        return new AgentResource($agent);
    }

    public function store(StoreAgentRequest $request)
    {
        $data = $request->validated();
        $agent = Agent::create($data);
        return new AgentResource($agent);
    }
}
