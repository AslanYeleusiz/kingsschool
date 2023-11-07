<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OlimpiadaAppeals extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $table = 'o_appeals';

    public function user(){
        return $this->belongsTo(User::class);
    }
    public function surak(){
        return $this->belongsTo(TestSuraktar::class);
    }
    public function o_tury(){
        return $this->belongsTo(OlimpiadaTury::class, 'class_id');
    }

    public function o_bagyt(){
        return $this->belongsTo(OlimpiadaBagyty::class, 'les_id');
    }

    public function o_tizim(){
        return $this->belongsTo(OlimpiadaTizim::class, 'user_code', 'code');
    }

    public function o_katysu(){
        return $this->belongsTo(OlimpiadaKatysu::class, OlimpiadaTizim::class, 'o_order_id', 'o_order_id' , 'user_code', 'code');
    }
//    public function questions()
//    {
//        return $this->belongsToMany( TestQuestion::class, TestSubjectOptionQuestion::class, 'option_id','question_id')->withPivot('id','number');
//    }









}
