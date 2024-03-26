<?php


namespace App\Helpers;


class Date
{

    public static function dmY($date) {
        $date = strtotime($date);
        $day = date('d',$date);
        $month = date('m',$date);
        $year = date('Y',$date);
        return "{$day}.{$month}.{$year}";
    }
        
    public static function dmYKZ($date){
        $date = strtotime($date);
        $day = date('d',$date);
        $year = date('Y',$date);
        $month = date('m',$date);
        switch ($month){
            case 1:
                $month = 'Январь';
                break;
            case 2:
                $month = 'Февраль';
                break;
            case 3:
                $month = 'Март';
                break;
            case 4:
                $month = 'Апрель';
                break;
            case 5:
                $month = 'Май';
                break;
            case 6:
                $month = 'Июнь';
                break;
            case 7:
                $month = 'Июль';
                break;
            case 8:
                $month = 'Август';
                break;
            case 9:
                $month = 'Сентябрь';
                break;
            case 10:
                $month = 'Октябрь';
                break;
            case 11:
                $month = 'Ноябрь';
                break;
            case 12:
                $month = 'Декабрь';
                break;
        }
        return "{$day} {$month} {$year}";
    }

    public static function monthKz($month): string
    {
        switch ($month){
            case 1:
                return 'Қаңтар';
            case 2:
                return 'Ақпан';
            case 3:
                return 'Наурыз';
            case 4:
                return 'Сәуір';
            case 5:
                return 'Мамыр';
            case 6:
                return 'Маусым';
            case 7:
                return 'Шілде';
            case 8:
                return 'Тамыз';
            case 9:
                return 'Қырқүйек';
            case 10:
                return 'Қазан';
            case 11:
                return 'Қараша';
            case 12:
                return 'Желтоқсан';
            default:
                return 'Қаңтар';
        }
    }
}
