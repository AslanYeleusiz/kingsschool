<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\User;
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
}
