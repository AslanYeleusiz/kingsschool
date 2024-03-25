<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\CourseType;
use App\Models\EduOrder;
use App\Models\Subject;
use App\Models\TrainType;
use App\Models\User;
use App\Models\Log;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class StudentSubjectController extends Controller
{
    public function index(Request $request, $student_id)
    {
        $name = $request->name;
        $subjects = EduOrder::with(['user', 'subject', 'courseType', 'trainType', 'group', 'teacher'])->where('user_id', $student_id)->latest('id')
            ->when($name, fn ($q) => $q->where('name', 'like', "%$name%"))
            ->paginate($request->input('per_page', 20))
            ->appends($request->except('page'));
        return Inertia::render('Admin/StudentsSubjects/Index', [
            'subjects' => $subjects
        ]);
    }

    public function create($user_id)
    {
        $filial_id = User::find($user_id)->filial_id;
        $subjects = Subject::get();
        $teachers = User::where('role_id', 3)->where('filial_id', $filial_id)->get();
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
        return Inertia::render('Admin/StudentsSubjects/Create', [
            'subjects' => $subjects,
            'teachers' => $teachers,
            'courseTypes' => $courseTypes,
            'trainTypes' => $trainTypes,
            'shifts' => $shifts,
            'user_id' => $user_id,
        ]);
    }

    public function store(Request $request, $user_id)
    {
        $eduOrde = EduOrder::create([
            'user_id' => $user_id,
            'subject_id' => $request['subject_id'],
            'teacher_id' => $request['teacher_id'],
            'shift_id' => $request['shift_id'],
            'train_type_id' => $request['train_type_id'],
            'course_type_id' => $request['course_type_id'],
            'price' => $request['price'],
            'start_date' => $request['start_date'],
            'end_date' => $request['end_date'],
            'hours' => $request['hours'],
        ]);

        $eduOrde->load('user');
        if(Log::log_status()) {
            Log::create([
                'name' => 'Зарегистрировал предмет студенту ' . $eduOrde['user']->fio,
                'type' => 2,
                'user_id' => auth()->guard('web')->id(),
            ]);
        }
        return redirect()->route('admin.studentsSubjects.index', $user_id)->with('success', 'Успешно добавлено');
    }

    public function edit($user_id, $edu_order_id)
    {
        $edu_order = EduOrder::find($edu_order_id);
        $filial_id = User::find($user_id)->filial_id;
        $subjects = Subject::get();
        $teachers = User::where('role_id', 3)->where('filial_id', $filial_id)->get();
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
        return Inertia::render('Admin/StudentsSubjects/Edit', [
            'edu_order' => $edu_order,
            'subjects' => $subjects,
            'teachers' => $teachers,
            'courseTypes' => $courseTypes,
            'trainTypes' => $trainTypes,
            'shifts' => $shifts,
            'user_id' => $user_id,
        ]);
    }

    public function update(Request $request, $user_id, $edu_order_id)
    {
        $eduOrder = EduOrder::with('user')->find($edu_order_id);
        if(Log::log_status()) {
            Log::create([
                'name' => 'Изменил предмет студента ' . $eduOrder['user']->fio,
                'type' => 3,
                'user_id' => auth()->guard('web')->id(),
            ]);
        }
        $eduOrder->update([
            'subject_id' => $request['subject_id'],
            'teacher_id' => $request['teacher_id'],
            'shift_id' => $request['shift_id'],
            'train_type_id' => $request['train_type_id'],
            'course_type_id' => $request['course_type_id'],
            'price' => $request['price'],
            'start_date' => $request['start_date'],
            'end_date' => $request['end_date'],
            'hours' => $request['hours'],
            'enable' => $request['enable'],
        ]);
        return redirect()->route('admin.studentsSubjects.index', $user_id)->with('success', 'Успешно добавлено');
    }
    public function destroy($user_id, $edu_order_id)
    {
        $eduOrder = EduOrder::with('user')->findOrFail($edu_order_id);
        if(Log::log_status()) {
            Log::create([
                'name' => 'Удалил предмет студента ' . $eduOrder['user']->fio,
                'type' => 4,
                'user_id' => auth()->guard('web')->id(),
            ]);
        }
        $eduOrder->delete();
        return redirect()->back()->withSuccess('Успешно удалено');
    }
}
