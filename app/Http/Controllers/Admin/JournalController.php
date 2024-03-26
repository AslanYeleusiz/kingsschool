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
        $schedule = Schedule::find($schedule_id);
        $student = $schedule->group->groupStudents()->with('user')->paginate($request->input('per_page', 20))
            ->appends($request->except('page'));
        $date = Carbon::parse($schedule->date);
        $schedule_day = $date->day;
        $endOfMonth = $date->copy()->endOfMonth();
        $lastDayOfMonth = $endOfMonth->day;

        $group_id = $schedule->group_id;

        $journal_students = Journal::where('group_id', $group_id)->get();
        return Inertia::render('Admin/Journal/Index', [
            'student' => $student,
            'journal_students' => $journal_students,
            'schedule_day' => $schedule_day,
            'lastDayOfMonth' => $lastDayOfMonth,
            'schedule' => $schedule,
        ]);
    }


    public function store(Request $request)
    {
        $schedule = $request->schedule;
        Journal::updateOrCreate(
            ['edu_order_id' => $request->student_id, 'schedule_id' => $schedule['id']],
            [
                'teacher_id' => $schedule['teacher_id'],
                'group_id' => $schedule['group_id'],
                'type' => $request->type,
                'date' => $schedule['date'],
            ]
        );
        $student_name = EduOrder::find($request->student_id)->user->fio;
        $log_name1 = 'Отметил, как пришел студента ' . $student_name;
        $log_name2 = 'Поставил нб студенту ' . $student_name;
        if (Log::log_status()) {
            Log::create([
                'name' => $request->type == 1 ? $log_name1 : $log_name2,
                'type' => 2,
                'user_id' => auth()->guard('web')->id(),
            ]);
        }
        // return redirect()->route('admin.roles.index')->with('success', 'Успешно добавлено');
    }
}
