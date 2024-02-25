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
        Schema::create('edu_paid_orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('edu_order_id')->on('edu_orders')->cascadeOnDelete();
            $table->date('date');
            $table->integer('price');
            $table->integer('late_days')->nullable();
            $table->date('late_date')->nullable();
            $table->integer('status')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('edu_paid_orders');
    }
};
