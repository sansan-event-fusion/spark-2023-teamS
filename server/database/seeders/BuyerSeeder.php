<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class BuyerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('buyers')->insert([
            "uuid" => Str::uuid(),
            "name" => "sansan",
            "email" => "sansan@gmail.com",
            "postal_code" => "150-0001",
            "prefecture" => "東京都",
            "city" => "渋谷区",
            "address1" => "神宮前5-52-2",
            "address2" => "青山オーバルビル 13F",
            "phone_number" => "03-6758-0033",
            "firebase_uid" => "d0c0da0jde462"
        ]);
    }
}
