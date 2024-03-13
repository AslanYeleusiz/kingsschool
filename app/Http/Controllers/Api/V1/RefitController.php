<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\CardOrder;
use App\Models\Schedule;
use Illuminate\Http\Request;
use Carbon\Carbon;

class RefitController extends Controller
{
    public function create($id)
    {
        CardOrder::create([
            'card_id' => $id,
            'datetime' => now()
        ]);
        $now = Carbon::now();
        $hour = $now->hour;
        $minute = $now->minute;
        Schedule::with('teacher.refit')
            ->where('date', $now->format('Y-m-d'))
            ->where('status', 3)
            ->whereHas('teacher', fn($q)=>$q->where('card_id', $id))
            ->whereRaw('HOUR(start_time) <= ? AND HOUR(end_time) >= ? AND MINUTE(start_time) <= ? AND MINUTE(end_time) >= ?', [$hour, $hour, $minute, $minute])
            ->update([
                'status' => 1
            ]);

        return response(200);
    }
}
