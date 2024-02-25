<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\EduOrder;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TeacherController extends Controller
{
    public function index(Request $request)
    {
        $teachers = User::where('role_id', 3)->paginate($request->input('per_page', 20))
            ->appends($request->except('page'));
        return Inertia::render('Admin/Teachers/Index', [
            'teachers' => $teachers
        ]);
    }

    public function students(Request $request, $teacher_id)
    {
        $orders = EduOrder::where('teacher_id', $teacher_id)->with(['user:id,avatar,fio,tel_num', 'teacher:id,fio', 'lastEduPaid'])
            ->paginate($request->input('per_page', 20))
            ->appends($request->except('page'));

        $now = Carbon::now();
        foreach ($orders as $order) {
            $order['lastEduPaid'] = $order->lastEduPaid;
            if ($order['lastEduPaid']) {
                $order['lastEduPaid']->date = Carbon::parse($order['lastEduPaid']->date)->format('d.m.Y');
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
        return Inertia::render('Admin/Teachers/Students', [
            'orders' => $orders
        ]);
    }
}
