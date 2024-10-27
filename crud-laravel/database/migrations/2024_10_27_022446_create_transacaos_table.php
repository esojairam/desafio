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
        Schema::create('tb_transacoes', function (Blueprint $table) {
            $table->id();
            $table->string('nome');
            $table->date('data');
            $table->enum('tipo',['despesa','receita']);
            $table->string('categoria');
            $table->decimal('valor',10,2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tb_transacoes');
    }
};
