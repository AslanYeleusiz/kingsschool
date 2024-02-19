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
        Schema::create('teacher_salary_orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->on('user')->cascadeOnDelete();
            $table->foreignId('train_type_id')->on('train_types')->cascadeOnDelete();
            $table->integer('percent');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('teacher_salary_orders');
    }
};
