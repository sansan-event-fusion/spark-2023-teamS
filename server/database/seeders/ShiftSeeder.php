<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Agent;

class ShiftSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // agentsテーブルからseed値として入っている1行目のbuyerのuuid取得
        $agentIds = Agent::pluck('uuid')->toArray();
        $firstAgentId = isset($agentIds[0]) ? $agentIds[0] : null;

        if (isset($firstAgentId)) {
            DB::table('shifts')->insert([
                "agent_id" => $firstAgentId,
                "date" => "2023-09-11",
                "starts_time" => "2023-09-11 08:00",
                "ends_time" => "2023-09-11 22:00",
            ]);
        }
    }
}
