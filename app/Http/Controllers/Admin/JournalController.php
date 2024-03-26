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
        $journal_students = Journal::where('schedule_id', $schedule->id)->get();
        return Inertia::render('Admin/Journal/Index', [
            'schedule' => $schedule,
            'schedule_day' => $now->copy()->day,
            'lastDayOfMonth' => $scheduleDate->copy()->endOfMonth()->day,
            'journals' => $journal_students,
            'likeThisDate' => $likeThisDate,
        ]);
    }


    public function store($schedule_id, Request $request)
    {
        $schedule = $request->schedule;
        Journal::updateOrCreate(
            ['edu_order_id' => $request->edu_order_id, 'schedule_id' => $schedule_id],
            [
                'teacher_id' => $schedule['teacher_id'],
                'group_id' => $schedule['group_id'],
                'type' => $request->type,
                'date' => $schedule['date'],
            ]
        );
        $journal_students = Journal::where('schedule_id', $schedule_id)->get();
        // $student_name = EduOrder::find($request->student_id)->user->fio;
        // $log_name1 = 'Отметил, как пришел студента ' . $student_name;
        // $log_name2 = 'Поставил нб студенту ' . $student_name;
        // if (Log::log_status()) {
        //     Log::create([
        //         'name' => $request->type == 1 ? $log_name1 : $log_name2,
        //         'type' => 2,
        //         'user_id' => auth()->guard('web')->id(),
        //     ]);
        // }
        return response()->json([
            'journals' => $journal_students
        ]);
    }
}
