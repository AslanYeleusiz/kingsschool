<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Log;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LogController extends Controller
{
    public function index(Request $request)
    {
        $fio = $request->fio;
        $logs = Log::with('user')
            ->when($fio, fn ($q) => $q->whereHas('user', fn ($q) => $q->where('fio', 'like', "%$fio%")))
            ->paginate($request->input('per_page', 20))
            ->appends($request->except('page'));

        $log = new Log();
        $types = $log->types();
        return Inertia::render('Admin/Log/Index', [
            'logs' => $logs,
            'log_status' => Log::log_status(),
            'types' => $types,
        ]);
    }
}
