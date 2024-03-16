<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use PDO;

class Log extends Model
{
    use HasFactory;
    protected $guarded = [];
    
    public static function log_status()
    {
        return true;
    }

    public function types()
    {
        return [
            [
                'id' => 1,
                'name' => 'Авторизованные'
            ],
            [
                'id' => 2,
                'name' => 'Создал запись'
            ],
            [
                'id' => 3,
                'name' => 'Изменил запись'
            ],
            [
                'id' => 4,
                'name' => 'Удалил запись'
            ],
            [
                'id' => 5,
                'name' => 'Выдал зарплату'
            ],
        ];
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    
}
