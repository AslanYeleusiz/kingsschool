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
        Schema::create('subject_orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('subject_id')->on('subjects')->cascadeOnDelete();
            $table->foreignId('course_type_id')->on('course_types')->cascadeOnDelete();
            $table->integer('shift_id');
            $table->foreignId('train_type_id')->on('train_types')->cascadeOnDelete();
            $table->integer('price');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('subject_orders');
    }
};
