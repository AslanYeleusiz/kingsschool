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
}
