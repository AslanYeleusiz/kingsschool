<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EduPaidOrder extends Model
{
    use HasFactory;
    protected $guarded=[];

    public function eduOrder(){
        return $this->belongsTo(EduOrder::class, 'edu_order_id');
    }

    public function journals(){
        return $this->hasMany(Journal::class, 'salary_check');
    }
}
