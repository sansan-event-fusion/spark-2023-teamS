<?php

namespace Database\Seeders;

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
        DB::table('evaluations')->insert([
            "buyer_id" => "078554aa-7fda-4a26-966b-f189b59878f2",
            "agent_id" => "509f25cc-9b92-4b8a-a1a3-aa69021f121c",
            "review" => 3.0,
            "date" => "2023-09-11",
            "comment" => "丁寧な対応でした。",
        ]);
    }
}
