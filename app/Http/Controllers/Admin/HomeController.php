<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\EduOrder;
use App\Models\EduPaidOrder;
use App\Models\TeacherSalary;
use App\Models\User;

class HomeController extends Controller
{
    public function index(Request $request) {
        $user = auth()->guard('web')->user();
        $filial_id = $user->filial_id;
        $orders = EduOrder::whereHas('user', fn($q)=>$q->where('filial_id', $filial_id)->isNotDeleted())->count();
        $students = User::where('filial_id', $filial_id)->where('role_id', 4)->isNotDeleted()->count();
        $teachers = User::isNotDeleted()->where('filial_id', $filial_id)->count();
        $profit = EduPaidOrder::whereHas('eduOrder.user', fn($q)=>$q->where('filial_id', $filial_id))->sum('price');
        $salaries = TeacherSalary::whereHas('teacher', fn($q)=>$q->where('filial_id', $filial_id)->isNotDeleted())->sum('price');
        return Inertia::render('Admin/home', [
            'orders' => $orders,
            'students' => $students,
            'teachers' => $teachers,
            'profit' => $profit,
            'salaries' => $salaries,
        ]);
    }
}
