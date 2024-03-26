<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Journal extends Model
{
    use HasFactory;
    protected $guarded = [];
    public $timestamps = false;

    public function schedule()
    {
        return $this->belongsTo(Schedule::class, 'schedule_id');
    }
}
