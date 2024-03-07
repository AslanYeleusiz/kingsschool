<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class EduOrder extends Model
{
    use HasFactory;
    protected $guarded = [];
    public $timestamps = false;


    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function teacher()
    {
        return $this->belongsTo(User::class, 'teacher_id');
    }

    public function eduPaid()
    {
        return $this->hasMany(EduPaidOrder::class, 'edu_order_id');
    }

    public function groups()
    {
        return $this->belongsToMany(Group::class, GroupOrder::class, 'edu_order_id', 'group_id');
    }


    public function group()
    {
        return $this->belongsTo(Group::class, 'group_id');
    }
    public function lastEduPaid()
    {
        return $this->hasOne(EduPaidOrder::class, 'edu_order_id')->latest('id');
    }

    public function subject()
    {
        return $this->belongsTo(Subject::class, 'subject_id');
    }

    public function percent()
    {
        return $this->hasOne(TeacherSalaryOrder::class, 'user_id', 'teacher_id')
            ->where('train_type_id', $this->train_type_id);
    }

    public function courseType()
    {
        return $this->belongsTo(CourseType::class, 'course_type_id');
    }

    public function trainType()
    {
        return $this->belongsTo(TrainType::class, 'train_type_id');
    }
}
