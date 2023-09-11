<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ShiftSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('shifts')->insert([
            "agent_id" => "509f25cc-9b92-4b8a-a1a3-aa69021f121c",
            "date" => "2023-09-11",
            "starts_time" => "2023-09-11 08:00",
            "ends_time" => "2023-09-11 22:00",
        ]);
    }
}
