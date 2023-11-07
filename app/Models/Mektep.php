<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mektep extends Model
{
    use HasFactory;
    protected $guarded=[];
    public $table='mektep';
    public $timestamps = false;
}
