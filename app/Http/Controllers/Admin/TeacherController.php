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
}
