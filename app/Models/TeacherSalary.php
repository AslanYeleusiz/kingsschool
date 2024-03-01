<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeacherSalary extends Model
{
    use HasFactory;
    protected $guarded=[];

    public function orders(){
        return $this->hasMany(EduPaidOrder::class, 'teacher_salary_id');
    }

    public function teacher(){
        return $this->belongsTo(User::class, 'teacher_id');
    }
}
