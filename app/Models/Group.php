<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    use HasFactory;
    protected $guarded = [];
    public $timestamps = false;

    public function students()
    {
        return $this->hasMany(EduOrder::class, 'group_id');
    }

    public function teacher()
    {
        return $this->belongsTo(User::class, 'teacher_id');
    }

    public function groupStudents()
    {
        return $this->belongsToMany(EduOrder::class, 'group_orders', 'group_id', 'edu_order_id');
    }
}
