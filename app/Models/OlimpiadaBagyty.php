<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OlimpiadaBagyty extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $table = 'o_bagyty';
    protected $primaryKey = "idd";
    public $timestamps = false;

    const BAGYT_TYPE_PRICE = [0,490,390,390,490];
    // порядок [null, Ұстаз, Студент, Оқушы, Оқытушы ]

    public function scopeIsEnabled($query) {
        return $query->where('enable', 1);
    }
    public function katysushy() {
        return $this->belongsTo(OlimpiadaKatysushy::class);
    }
    public function suraktar() {
        return $this->hasMany(TestSuraktar::class, 'les_id');
    }
    public function firstChild() {
        return $this->hasOne(OlimpiadaTury::class, 'o_bagyty_idd')->orderBy('idd');
    }
    public function lastChild() {
        return $this->hasOne(OlimpiadaTury::class, 'o_bagyty_idd')->orderByDesc('idd');
    }
    
    



}
