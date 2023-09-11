<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Buyer;
use App\Models\Agent;

class HistorySeeder extends Seeder
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
            DB::table('histories')->insert([
                "buyer_id" => $firstBuyerId,
                "agent_id" => $firstAgentId,
                "status" => false,
                "delivery_date" => "2023-09-11",
                "delivery_time" => "22:00",
            ]);
        }

    }
}
