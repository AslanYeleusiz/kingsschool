<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Schedule extends Model
{
    use HasFactory;
    protected $guarded=[];
    public $timestamps=false;
    public const statuses = ['Урок не начался', 'Урок проведён', 'Урок не проведён', 'Ещё не пришел'];
    
    public static function getStatus($index){
        return $this->statuses[$index];
    } 
    
    public function teacher(){
        return $this->belongsTo(User::class, 'teacher_id');
    }

    public function subject(){
        return $this->belongsTo(Subject::class, 'subject_id');
    }
    
    public function group(){
        return $this->belongsTo(Group::class, 'group_id');
    }

    public function groupOrders(){
        return $this->hasMany(GroupOrder::class, 'group_id', 'group_id');
    }

    public function journals(){
        return $this->hasMany(Journal::class, 'id', 'schedule_id');
    }

    
    protected $appends = ['edit', 'disable']; // Attribute to append

    // Accessor for the full_name attribute
    public function getEditAttribute()
    {
        return 0;
    }

    public function getDisableAttribute()
    {
        return Carbon::parse($this->date) < Carbon::now();
    }
}
