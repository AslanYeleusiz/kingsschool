<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubjectOrder extends Model
{
    use HasFactory;
    protected $guarded=[];
    public $timestamps=false;

    public function subject(){
        return $this->belongsTo(subject::class);
    }

    public function courseType(){
        return $this->belongsTo(CourseType::class, 'course_type_id');
    }

    public function trainType(){
        return $this->belongsTo(TrainType::class, 'train_type_id');
    }
}
