<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Audan extends Model
{
    use HasFactory;
    protected $guarded=[];
    public $table='audan';
    public $timestamps = false;
    
    public function mektepter(){
        return $this->hasMany(Mektep::class, 'audan_id');
    }
}
