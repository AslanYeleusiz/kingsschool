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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('iin');
            $table->string('name');
            $table->string('s_name');
            $table->string('fio')->nullable();
            $table->date('birthday');
            $table->string('tel_num');
            $table->string('password')->nullable();
            $table->string('real_password')->nullable();
            $table->string('tel_num_family')->nullable();
            $table->string('avatar');
            $table->boolean('is_deleted');
            $table->foreignId('filial_id')->on('filials')->cascadeOnDelete();
            $table->foreignId('role_id')->on('roles')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
