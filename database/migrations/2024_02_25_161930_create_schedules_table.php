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
        Schema::create('schedules', function (Blueprint $table) {
            $table->id();
            $table->date('date');
            $table->time('start_time');
            $table->time('end_time');
            $table->integer('minutes');
            $table->foreignId('subject_id')->on('subjects')->cascadeOnDelete();
            $table->integer('day');
//            $table->foreignId('course_type_id')->on('course_types')->cascadeOnDelete();
//            $table->foreignId('train_type_id')->on('train_types')->cascadeOnDelete();
//            $table->integer('shift_id');
            $table->foreignId('teacher_id')->on('user')->cascadeOnDelete();
            $table->foreignId('group_id')->on('groups')->cascadeOnDelete();
//            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('schedules');
    }
};
