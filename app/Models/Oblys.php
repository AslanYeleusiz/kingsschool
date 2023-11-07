<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Oblys extends Model
{
    use HasFactory;
    protected $guarded=[];
    public $table='oblys';
    public $timestamps = false;

    public function audans(){
        return $this->hasMany(Audan::class, 'oblys_id');
    }
}
