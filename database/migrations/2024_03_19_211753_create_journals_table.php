<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('journals', function (Blueprint $table) {
            $table->id();
            $table->foreignId('teacher_id')->on('users')->cascadeOnDelete();
            $table->foreignId('edu_order_id')->on('edu_orders')->cascadeOnDelete();
            $table->foreignId('schedule_id')->on('schedules')->cascadeOnDelete();
            $table->foreignId('group_id')->on('groups')->cascadeOnDelete();
            $table->integer('type');
            $table->date('date');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('journals');
    }
};
