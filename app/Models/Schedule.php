<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    use HasFactory;
    protected $guarded=[];
    public $timestamps=false;
    
    public function teacher(){
        return $this->belongsTo(User::class, 'teacher_id');
    }

    public function subject(){
        return $this->belongsTo(Subject::class, 'subject_id');
    }
    
    public function group(){
        return $this->belongsTo(Group::class, 'group_id');
    }
}
