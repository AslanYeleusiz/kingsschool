<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GroupOrder extends Model
{
    use HasFactory;
    protected $guarded=[];

    public function group(){
        return $this->belongsTo(Group::class);
    }

    public function eduOrder(){
        return $this->belongsTo(EduOrder::class, 'edu_order_id');
    }
}
