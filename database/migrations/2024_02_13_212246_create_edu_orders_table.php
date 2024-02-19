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
        Schema::create('edu_orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->on('users')->cascadeOnDelete();
            $table->foreignId('subject_id')->on('subjects')->cascadeOnDelete();
            $table->foreignId('train_type_id')->on('train_types')->cascadeOnDelete();
            $table->foreignId('course_type_id')->on('course_types')->cascadeOnDelete();
            $table->foreignId('prepod_id')->on('users')->cascadeOnDelete();
            $table->integer('price');
            $table->date('start_date');
            $table->date('end_date');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('edu_orders');
    }
};
