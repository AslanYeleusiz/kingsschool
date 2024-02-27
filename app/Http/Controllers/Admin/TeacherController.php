<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\EduOrder;
use App\Models\User;
use App\Models\Filial;
use App\Models\EduPaidOrder;
use App\Models\TeacherSalary;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TeacherController extends Controller
{
    public function index(Request $request)
    {
        $user = auth()->guard('web')->user();
        $filial_id = $request->filial_id;
        $fio = $request->fio;
        if($user->role_id == 3 || $user->role_id == 2) $filial_id = $user->filial_id;
        $teachers = User::with(['filial','lastEduPaid'])->when($fio, fn($q)=>$q->where('fio', 'like', "%$fio%"))
            ->when($filial_id, fn($q)=>$q->where('filial_id', $filial_id))
            ->where('role_id', 3)
            ->paginate($request->input('per_page', 20))
            ->appends($request->except('page'));
        
        $now = Carbon::now();
        foreach ($teachers as $teacher) {
            $teacher['lastEduPaid'] = $teacher->lastEduPaid;
            if ($teacher['lastEduPaid']) {
                $teacher['lastEduPaid']->date = Carbon::parse($teacher['lastEduPaid']->date)->format('d.m.Y');
            } else {
                $endDate = Carbon::parse($teacher->start_edu_date)->addMonth();
                $status = $endDate->gt($now) ? 2 : 3;
                $teacher['lastEduPaid'] = [
                    'id' => 0, // Убедитесь, что end_date - это экземпляр Carbon
                    'date' => $endDate->format('d.m.Y'), // Убедитесь, что end_date - это экземпляр Carbon
                    'status' => $status
                ];
            }
        }
        
        $filials = Filial::get();
        return Inertia::render('Admin/Teachers/Index', [
            'teachers' => $teachers,
            'filials' => $filials,
            'user' => $user,
        ]);
    }
    
    public function reports($teacher_id, Request $request){
        $teacher = User::findOrFail($teacher_id);
        $eduPaidOrders = EduPaidOrder::with(['eduOrder.user','eduOrder.subject'])->whereHas('eduOrder', fn($q)=>$q->where('teacher_id', $teacher_id))->where('is_paid', 0)->get();
        foreach($eduPaidOrders as $eduPaidOrder) {
            $percent = $eduPaidOrder->eduOrder['percent'];
            if($percent) $eduPaidOrder->newPrice = $eduPaidOrder->price / 100 * $percent->percent;
        }
        return Inertia::render('Admin/EduPaidOrder/Index', [
            'eduPaidOrders' => $eduPaidOrders,
            'teacher' => $teacher
        ]);
    }

    public function fullReports($teacher_id, Request $request) {
        return 'Идет работа сайта... Не тревожте эту страницу!!!';
    }

    public function reportStore($teacher_id, Request $request) {
        $now = Carbon::now();
        $TeacherSalary = TeacherSalary::create([
            'teacher_id' => $teacher_id,
            'date' => $now,
            'price' => $request->price,
            'penalty' => $request->penalty ?? 0,
            'bonus' => $request->bonus ?? 0
        ]);
        EduPaidOrder::whereHas('eduOrder', fn($q)=>$q->where('teacher_id', $teacher_id))->where('is_paid', 0)->update([
            'is_paid' => 1,
            'teacher_salary_id' => $TeacherSalary->id
        ]);
        return redirect()->back()->withSuccess('Успешно сохранено');
    }
}
