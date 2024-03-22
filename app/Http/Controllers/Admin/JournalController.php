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
        $student = Schedule::find($schedule_id)->group->groupStudents()->with('user')->paginate($request->input('per_page', 20))
            ->appends($request->except('page'));
        $date = Carbon::parse(Schedule::find($schedule_id)->date);
        $schedule_day = $date->day;
        $endOfMonth = $date->copy()->endOfMonth();
        $lastDayOfMonth = $endOfMonth->day;
        $schedule_date = Schedule::find($schedule_id)->date;
        $teacher_id = Schedule::find($schedule_id)->teacher_id;
        $group_id = Schedule::find($schedule_id)->group_id;
        $group_name = Schedule::find($schedule_id)->group->name;
        $journal_students = Journal::where('group_id', $group_id)->get();
        return Inertia::render('Admin/Journal/Index', [
            'student' => $student,
            'journal_students' => $journal_students,
            'schedule_day' => $schedule_day,
            'lastDayOfMonth' => $lastDayOfMonth,
            'schedule_id' => $schedule_id,
            'teacher_id' => $teacher_id,
            'group_id' => $group_id,
            'group_name' => $group_name,
            'date' => $schedule_date,
        ]);
    }


    public function store(Request $request)
    {
        Journal::updateOrCreate(
            ['edu_order_id' => $request->student_id, 'schedule_id' => $request->schedule_id],
            [
                'teacher_id' => $request->teacher_id,
                'group_id' => $request->group_id,
                'type' => $request->type,
                'date' => $request->date,
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
