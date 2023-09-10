<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('agents', function (Blueprint $table) {
            $table->uuid('uuid')->unique()->primary()->comment('代理人ID');
            $table->string('name')->comment('代理人名');
            $table->string('email')->unique()->comment('メールアドレス');
            $table->string('postal_code')->comment('郵便番号');
            $table->string('prefecture')->comment('都道府県');
            $table->string('city')->comment('市');
            $table->string('address1')->comment('町村・番地');
            $table->string('address2')->nullable()->comment('建物');
            $table->string('phone_number')->unique()->comment('電話番号');
            $table->string('firebase_uid')->unique()->comment('FirebaseのUID');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('agents');
    }
};
