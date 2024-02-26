<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaidHistory extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function paidStudent()
    {
        return $this->belongsTo(EduOrder::class, 'edu_paid_order_id');
    }
}
