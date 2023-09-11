<?php

namespace Database\Seeders;

use App\Models\Agent;
use App\Models\Buyer;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EvaluationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // buyersテーブルからseed値として入っている1行目のbuyerのuuid取得
        $buyerIds = Buyer::pluck('uuid')->toArray();
        $firstBuyerId = isset($buyerIds[0]) ? $buyerIds[0] : null;

        // agentsテーブルからseed値として入っている1行目のbuyerのuuid取得
        $agentIds = Agent::pluck('uuid')->toArray();
        $firstAgentId = isset($agentIds[0]) ? $agentIds[0] : null;

        if (isset($firstBuyerId) && isset($firstAgentId)) {
            DB::table('evaluations')->insert([
                "buyer_id" => $firstBuyerId,
                "agent_id" => $firstAgentId,
                "review" => 3.0,
                "date" => "2023-09-11",
                "comment" => "丁寧な対応でした。",
            ]);
        }
    }
}
