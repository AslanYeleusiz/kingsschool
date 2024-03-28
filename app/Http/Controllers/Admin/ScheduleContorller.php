<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Schedule;
use App\Models\User;
use App\Models\CourseType;
use App\Models\TrainType;
use App\Models\Group;
use App\Models\Log;
use App\Models\Journal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use App\Helpers\Date;
use Carbon\Carbon;

class ScheduleContorller extends Controller
{
    public function index(Request $request)
    {
        $user = auth()->guard('web')->user();
        return Inertia::render('Admin/Schedule/Index', [
            'user' => $user,
        ]);
    }
    
    public function create(Request $request)
    {
        $user = auth()->guard('web')->user();
        $filial_id = $request->filial_id ?? 2;
        $day = $request->day;
        $date = Carbon::parse($request->date)->addDays($day - 1);
        $schedules = Schedule::with(['teacher:id,fio', 'group'])
            ->whereHas('teacher', function ($q) use ($user) {
                $q->where('filial_id', $user->filial_id);
            })
            ->whereDate('date', $date)->orderBy('start_time')->get();
        $teachers = User::where('filial_id', $filial_id)
            ->where('role_id', 3)
            ->when($user->role_id == 3, fn($q)=>$q->where('id', $user->id))
            ->get();
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
            'teachers' => $teachers,
            'courseTypes' => $courseTypes,
            'trainTypes' => $trainTypes,
            'shifts' => $shifts,
        ]);
    }
    
    public function store(Request $request)
    {
        $filial_id = $request->filial_id ?? 2;
        $start_time = Carbon::parse($request->start_time);
        $minutes = $request->duration;
        $end_time = Carbon::parse($request->start_time)->addMinutes($minutes);
        $date = Carbon::parse($request->date);


        Schedule::create([
            'start_time' => $start_time,
            'end_time' => $end_time,
            'date' => $date,
            'minutes' => $minutes,
            'teacher_id' => $request->teacher_id,
            'day' => $request->day,
            'group_id' => $request->group_id,
        ]);

        $teacher = User::findOrFail($request->teacher_id);
        if(Log::log_status()) {
            Log::create([
                'name' => 'Добавил расписания преподавателю ' . $teacher->fio,
                'type' => 2,
                'user_id' => auth()->guard('web')->id(),
            ]);
        }
        return redirect()->back()->withSuccess('Успешно сохранено');
    }
    
    public function getSchedule(Request $request)
    {
        $user = auth()->guard('web')->user();
        $filial_id = $request->filial_id ?? 2;
        $date = Carbon::parse($request->date);
        $startweekdate = $date->copy()->startOfWeek();
        $endweekdate = $date->copy()->endOfWeek();
        $teacher_id = $request->teacher_id;
        $schedules = Schedule::with(['teacher:id,fio,filial_id', 'group'])
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
            'startweekdate' => $startweekdate->copy()->format('d.m.Y'),
            'endweekdate' => $endweekdate->copy()->format('d.m.Y'),
            'schedules' => $schedules,
            'currentDate' => Date::dmYKZ($date),
            'date' => Carbon::parse($date)->format('d.m.Y'),
            'dayOfWeek' => $date->dayOfWeekIso,
        ]);
    }

    public function getGroups($id)
    {
        $groups = Group::where('teacher_id', $id)->get();
        return response()->json($groups);
    }

    public function destroy($id)
    {
        $sched = Schedule::findOrFail($id);
        Journal::where('schedule_id', $id)->delete();
        // $date = Carbon::parse($sched->date);
        $sched->delete();
        // $startDate = $date->copy()->startOfWeek();
        // $endDate = $date->copy()->endOfWeek();
        // $schedules = Schedule::whereDate('date', '>=', $startDate)->whereDate('date', '<=', $endDate)->get();
        // Schedule::whereDate('date', '>', $endDate)->delete();
        // for($n=1; $n<4; $n++) {
        //     foreach($schedules as $schedule) {
        //         $newSchedule = $schedule->replicate();
        //         $cstdate =  Carbon::parse($newSchedule->date)->addDays(7 * $n);
        //         $newSchedule->date = $cstdate;
        //         $newSchedule->save();
        //     }
        // }
        return redirect()->back();
    }

    public function setStatus($id, Request $request) {
        $status = $request->status;
        $schedule = Schedule::with('teacher')->findOrFail($id);
        if(Log::log_status()) {
            $statuses = ['Урок не начался', 'Урок проведён', 'Урок не проведён', 'Ещё не пришел'];
            Log::create([
                'name' => 'Изменил статус в расписании преподавателя ' . $schedule['teacher']->fio . ' на ' . $statuses[$status],
                'type' => 3,
                'user_id' => auth()->guard('web')->id(),
            ]);
        }
        $schedule->update([
            'status' => $status
        ]);
        return response()->json(200);
    }

    public function updateStatus(){
        $now = Carbon::now();
        Schedule::with('teacher.refit')
            ->whereHas('teacher.refit')
            ->where('status', 0)
            ->where('date', $now->format('Y-m-d'))
            ->whereRaw('HOUR(start_time) = ? AND MINUTE(start_time) = ?', [$now->hour, $now->minute])
            ->update(['status'=>1]);

        Schedule::with('teacher.refit')
            ->doesntHave('teacher.refit')
            ->where('status', 0)
            ->where('date', $now->format('Y-m-d'))
            ->whereRaw('HOUR(start_time) = ? AND MINUTE(start_time) = ?', [$now->hour, $now->minute])
            ->update(['status'=>3]);

        Schedule::with('teacher.refit')
            ->doesntHave('teacher.refit')
            ->where('status', 3)
            ->where('date', $now->format('Y-m-d'))
            ->whereRaw('HOUR(end_time) = ? AND MINUTE(end_time) = ?', [$now->hour, $now->minute])
            ->update(['status'=>2]);


        return response()->json(200);
    }

    public function dublicateWeeks(){
        $date = Carbon::now();
        $startDate = $date->copy()->startOfWeek();
        $endDate = $date->copy()->endOfWeek();
        $schedules = Schedule::whereDate('date', '>=', $startDate)->whereDate('date', '<=', $endDate)->get();
        Schedule::whereDate('date', '>', $endDate)->delete();
        for($n=1; $n<4; $n++) {
            foreach($schedules as $schedule) {
                $newSchedule = $schedule->replicate();
                $cstdate =  Carbon::parse($newSchedule->date)->addDays(7 * $n);
                $newSchedule->date = $cstdate;
                $newSchedule->save();
            }
        }
    }
}
