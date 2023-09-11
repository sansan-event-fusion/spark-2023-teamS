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
        Schema::create('evaluations', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('buyer_id')->references('uuid')->on('buyers');

            $table->foreignUuid('agent_id')->references('uuid')->on('agents');

            $table->double("review", 2, 1);
            $table->date('date');
            $table->string("comment", 1024)->default("配送ありがとうございました。");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('evaluations');
    }
};
