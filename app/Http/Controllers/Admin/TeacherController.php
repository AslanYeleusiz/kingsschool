<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\EduOrder;
use App\Models\User;
use App\Models\Filial;
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
        $teachers = User::with('filial')->when($fio, fn($q)=>$q->where('fio', 'like', "%$fio%"))
            ->when($filial_id, fn($q)=>$q->where('filial_id', $filial_id))
            ->where('role_id', 3)
            ->paginate($request->input('per_page', 20))
            ->appends($request->except('page'));
        $filials = Filial::get();
        return Inertia::render('Admin/Teachers/Index', [
            'teachers' => $teachers,
            'filials' => $filials,
            'user' => $user,
        ]);
    }
}
