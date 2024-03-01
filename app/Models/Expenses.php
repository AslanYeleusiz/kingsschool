<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Expenses extends Model
{
    use HasFactory;
    protected $guarded = false;
    public $timestamps = false;

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function filial()
    {
        return $this->belongsTo(Filial::class);
    }

    public function types()
    {
        return [
            [
                'id' => 1,
                'name' => 'Расход на зарплату'
            ],
            [
                'id' => 2,
                'name' => 'Расход на персонал'
            ],
            [
                'id' => 3,
                'name' => 'Другое'
            ]
        ];
    }
}
