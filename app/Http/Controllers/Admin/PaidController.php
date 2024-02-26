<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\PaidHistory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PaidController extends Controller
{
    public function index(Request $request)
    {
        $user = auth()->guard('web')->user();
        $query = PaidHistory::with(['user:id,avatar,fio,tel_num,filial_id']);
        
        $query->when($user->role_id == 2, function ($query) use ($user) {
            return $query->whereHas('user', fn ($q) => $q->where('filial_id', $user->filial_id));
        });
        $orders = $query->paginate($request->input('per_page', 20))
            ->appends($request->except('page'));

        return Inertia::render('Admin/PaidHistories/Index', [
            'orders' => $orders,
        ]);
    }
}
