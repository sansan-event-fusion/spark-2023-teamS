<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        // それぞれのテーブルの中にレコードが無い場合にシード値を格納する
        if (DB::table('buyers')->count() === 0) {
            $this->call(BuyerSeeder::class);
        }
        if (DB::table('agents')->count() === 0) {
            $this->call(AgentSeeder::class);
        }
        if (DB::table('histories')->count() === 0) {
            $this->call(HistorySeeder::class);
        }
        if (DB::table('evaluations')->count() === 0) {
            $this->call(EvaluationSeeder::class);
        }
        if (DB::table('shifts')->count() === 0) {
            $this->call(ShiftSeeder::class);
        }
    }
}
