<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\EduOrder;
use App\Models\User;
use App\Models\Filial;
use App\Models\EduPaidOrder;
use App\Models\TeacherSalary;
use App\Models\Group;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Helpers\Date;
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
                $teacher['lastEduPaid']->date = Carbon::parse($teacher['lastEduPaid']->date);
                if($teacher['lastEduPaid']->date < $now) {
                    $teacher['lastEduPaid']->date = $teacher['lastEduPaid']->date->addMonths(1)->format('d.m.Y');
                    $teacher['lastEduPaid']->status = 2;
                } else $teacher['lastEduPaid']->date = $teacher['lastEduPaid']->date->format('d.m.Y');
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

    public function students(Request $request, $id){
        $user = auth()->guard('web')->user();
        $teacher_id = $id;
        $studFio = $request->studFio;
        $subj = $request->subj;
        $prepodFio = $request->prepodFio;
        $phone = $request->phone;
        $query = EduOrder::with(['user:id,avatar,fio,tel_num', 'teacher:id,fio', 'lastEduPaid', 'groups:id', 'subject']);
        $query->when($user->role_id == 3 || $user->role_id == 2, function ($query) use ($user) {
            if ($user->role_id == 3)
                return $query->where('teacher_id', $user->id);
            else return $query->whereHas('teacher', fn ($q) => $q->where('filial_id', $user->filial_id));
        });
        $query->when($teacher_id, function ($query) use ($teacher_id) {
            return $query->where('teacher_id', $teacher_id);
        });
        $query
            ->when($studFio, fn ($q) => $q->whereHas('user', fn ($q) => $q->where('fio', 'like', "%$studFio%")))
            ->when($subj, fn ($q) => $q->whereHas('subject', fn ($q) => $q->where('name', 'like', "%$subj%")))
            ->when($prepodFio, fn ($q) => $q->whereHas('teacher', fn ($q) => $q->where('fio', 'like', "%$prepodFio%")))
            ->when($phone, fn ($q) => $q->whereHas('user', fn ($q) => $q->where('tel_num', 'like', "%$phone%")));
        $orders = $query->paginate($request->input('per_page', 20))
            ->appends($request->except('page'));

        $now = Carbon::now();
        foreach ($orders as $order) {
            $order['lastEduPaid'] = $order->lastEduPaid;
            $percent = $order->percent;
            $order['group_ids'] = $order['groups']->pluck('id')->toArray();
            $order['newGroup'] = 0;
            if ($percent) $order->newPrice = $order->price / 100 * $percent->percent;
            if ($order['lastEduPaid']) {
                $orderDate = Carbon::parse($order['lastEduPaid']->date);
                if ($orderDate < $now) {
                    $endDate = Carbon::parse($order->end_date);
                    $startDate = Carbon::parse($order->start_date);
                    $daysDifference = $endDate->diffInDays($startDate);
                    $order['lastEduPaid']->date = $orderDate->addDays($daysDifference)->format('d.m.Y');
                    $order['lastEduPaid']->status = 2;
                } else $order['lastEduPaid']->date = $orderDate->format('d.m.Y');
            } else {
                $endDate = Carbon::parse($order->end_date);
                $status = $endDate->gt($now) ? 2 : 3;
                $order['lastEduPaid'] = [
                    'id' => 0, // Убедитесь, что end_date - это экземпляр Carbon
                    'date' => $endDate->format('d.m.Y'), // Убедитесь, что end_date - это экземпляр Carbon
                    'status' => $status
                ];
            }
        }

        $groups = null;
        if ($user->role_id == 3)
            $groups = Group::where('teacher_id', $user->id)->get();
        if ($teacher_id)
            $groups = Group::where('teacher_id', $teacher_id)->get();

        $teacher = null;
        if ($teacher_id) $teacher = User::findOrFail($teacher_id);

        return Inertia::render('Admin/Students/Index', [
            'orders' => $orders,
            'groups' => $groups,
            'user' => $user,
            'teacher' => $teacher
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
        $salaries = TeacherSalary::where('teacher_id', $teacher_id)->get();
        foreach($salaries as $salary){
            $salary['date'] = Date::dmYKZ($salary['date']);
        }
        $teacher = User::findOrFail($teacher_id);
        return Inertia::render('Admin/Teachers/FullReports', [
            'salaries' => $salaries,
            'teacher' => $teacher
        ]);
    }

    public function fullReportItem($id, $report_id) {
        $salary = TeacherSalary::with(['orders.eduOrder' => fn($q)=>$q->with(['user', 'subject'])])->findOrFail($report_id);
        foreach($salary['orders'] as $eduPaidOrder) {
            $percent = $eduPaidOrder->eduOrder['percent'];
            if($percent) $eduPaidOrder->newPrice = $eduPaidOrder->price / 100 * $percent->percent;
        }
        return response()->json($salary);
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
