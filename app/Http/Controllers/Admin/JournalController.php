<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\EduOrder;
use App\Models\Group;
use App\Models\Journal;
use App\Models\Log;
use App\Models\Schedule;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JournalController extends Controller
{
    public function index(Request $request, $schedule_id)
    {
        $schedule = Schedule::with(['groupOrders.eduOrder.user', 'journals', 'group', 'teacher'])->findOrFail($schedule_id);
        $likeThisDate = false;
        $now = Carbon::now();
        $scheduleDate = Carbon::parse($schedule->date);
        if($now->month == $scheduleDate->month && $now->year == $scheduleDate->year){
            $likeThisDate = true;
        }
        $schedule['year'] = Carbon::parse($schedule->date)->year;
        $schedule['month'] = Carbon::parse($schedule->date)->month;
        $days = Schedule::whereDate('date', '>=', $scheduleDate->copy()->startOfMonth())->whereDate('date', '<=', $scheduleDate->copy()->endOfMonth())->get()->pluck('date')->map(function ($date) {
                    return Carbon::parse($date)->day;
                });
        $journal_students = Journal::where('group_id', $schedule->group_id)->whereMonth('date', $now->month)->whereYear('date', $now->year)->get();
        return Inertia::render('Admin/Journal/Index', [
            'schedule' => $schedule,
            'schedule_day' => $now->copy()->day,
            'lastDayOfMonth' => $scheduleDate->copy()->endOfMonth()->day,
            'journals' => $journal_students,
            'likeThisDate' => $likeThisDate,
            'days' => $days,
        ]);
    }


    public function store($schedule_id, Request $request)
    {
        Journal::updateOrCreate(
            ['edu_order_id' => $request->edu_order_id, 'date' => $request->date],
            [
                'teacher_id' => $request->teacher_id,
                'group_id' => $request->group_id,
                'schedule_id' => $schedule_id,
                'type' => $request->type,
                'date' => $request['date'],
            ]
        );
        $schedule = Schedule::findOrFail($schedule_id);
        $now = Carbon::now();
        $journal_students = Journal::where('group_id', $schedule->group_id)->whereMonth('date', $now->month)->whereYear('date', $now->year)->get();
        return response()->json([
            'journals' => $journal_students
        ]);
    }
}
