<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeacherSalaryOrder extends Model
{
    use HasFactory;
    protected $guarded=[];
    public $timestamps=false;

    public function trainType()
    {
        return $this->belongsTo(TrainType::class, 'train_type_id');
    }
}
