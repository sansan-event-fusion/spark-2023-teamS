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
        Schema::create('histories', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('buyer_id')->references('uuid')->on('buyers');

            $table->foreignUuid('agent_id')->references('uuid')->on('agents');

            $table->boolean('status');
            $table->date('delivery_date');
            $table->time('delivery_time');
            $table->string('certification_number')->nullable();
            $table->string('receiving_address')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('histories');
    }
};
