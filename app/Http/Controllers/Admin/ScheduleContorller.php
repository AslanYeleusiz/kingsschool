<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Schedule;
use App\Models\Subject;
use App\Models\User;
use App\Models\CourseType;
use App\Models\TrainType;
use App\Models\Group;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Carbon\Carbon;

class ScheduleContorller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = auth()->guard('web')->user();
        return Inertia::render('Admin/Schedule/Index', [
            'user' => $user,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $user = auth()->guard('web')->user();
        $filial_id = $request->filial_id ?? 2;
        $day = $request->day;
        $date = Carbon::parse($request->date)->addDays($day - 1);
        $schedules = Schedule::with(['subject', 'teacher:id,fio', 'group'])
            ->whereHas('teacher', function ($q) use ($user) {
                $q->where('filial_id', $user->filial_id);
            })
            ->whereDate('date', $date)->orderBy('start_time')->get();

        $subjects = Subject::get();
        $teachers = User::where('filial_id', $filial_id)->where('role_id', 3)->get();
        $courseTypes = CourseType::get();
        $trainTypes = TrainType::get();
        $shifts = [];
        $shifts[] = [
            'id' => 1,
            'name' => 'Дневной'
        ];
        $shifts[] = [
            'id' => 2,
            'name' => 'Вечерний'
        ];

        return Inertia::render('Admin/Schedule/Create', [
            'schedules' => $schedules,
            'date' => $date->format('d.m.Y'),
            'day' => $day,
            'subjects' => $subjects,
            'teachers' => $teachers,
            'courseTypes' => $courseTypes,
            'trainTypes' => $trainTypes,
            'shifts' => $shifts,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $filial_id = $request->filial_id ?? 2;
        $start_time = Carbon::parse($request->start_time);
        $end_time = Carbon::parse($request->end_time);
        $minutes = $end_time->diffInMinutes($start_time);
        $date = Carbon::parse($request->date);
        Schedule::create([
            'start_time' => $start_time,
            'end_time' => $end_time,
            'date' => $date,
            'minutes' => $minutes,
            'subject_id' => $request->subject_id,
            'teacher_id' => $request->teacher_id,
            'day' => $request->day,
            'group_id' => $request->group_id,
        ]);
        return redirect()->back()->withSuccess('Успешно сохранено');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Schedule  $schedule
     * @return \Illuminate\Http\Response
     */
    public function getSchedule(Request $request)
    {
        $user = auth()->guard('web')->user();
        $filial_id = $request->filial_id ?? 2;
        $date = Carbon::parse($request->date);
        $startweekdate = $date->copy()->startOfWeek();
        $endweekdate = $date->copy()->endOfWeek();
        $teacher_id = $request->teacher_id;
        $schedules = Schedule::with(['subject', 'teacher:id,fio,filial_id', 'group'])
            ->whereDate('date', '>=', $startweekdate)
            ->whereDate('date', '<=', $endweekdate)
            ->whereHas('teacher', function ($q) use ($user) {
                $q->where('filial_id', $user->filial_id);
            })
            ->when($user->role_id == 3, function ($q) use ($user) {
                return $q->where('teacher_id', $user->id);
            })
            ->when($teacher_id, function ($q) use ($teacher_id) {
                return $q->where('teacher_id', $teacher_id);
            })
            ->orderBy('date')
            ->get();
        foreach ($schedules as $schedule) {
            $schedule->start_time = Carbon::parse($schedule->start_time)->format('H:i');
            $schedule->end_time = Carbon::parse($schedule->end_time)->format('H:i');
        }
        return response()->json([
            'schedules' => $schedules,
            'startweekdate' => $startweekdate->copy()->format('d.m.Y'),
            'endweekdate' => $endweekdate->copy()->format('d.m.Y')
        ]);
    }

    public function getGroups($id)
    {
        $groups = Group::where('teacher_id', $id)->get();
        return response()->json($groups);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Schedule  $schedule
     * @return \Illuminate\Http\Response
     */
    public function edit(Schedule $schedule)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Schedule  $schedule
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Schedule $schedule)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Schedule  $schedule
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Schedule::findOrFail($id)->delete();
        return redirect()->back();
    }
}
