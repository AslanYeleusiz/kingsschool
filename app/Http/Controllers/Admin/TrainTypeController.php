<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Log;
use App\Models\TrainType;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TrainTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $trains = TrainType::paginate($request->input('per_page', 20))
            ->appends($request->except('page'));
        return Inertia::render('Admin/TrainType/Index', [
            'trainTypes' => $trains
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/TrainType/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        TrainType::create([
            'name' => $request->name,
        ]);
        if (Log::log_status()) {
            Log::create([
                'name' => 'Добавил тип обучения ' . $request->name,
                'type' => 2,
                'user_id' => auth()->guard('web')->id(),
            ]);
        }
        return redirect()->route('admin.trainTypes.index')->with('success', 'Успешно добавлено');
    }

    public function edit(TrainType $trainType)
    {
        return Inertia::render('Admin/TrainType/Edit', [
            'trainType' => $trainType
        ]);
    }

    public function update(Request $request, TrainType $trainType)
    {
        $current_name = $trainType->name;
        $trainType->update([
            'name' => $request->name
        ]);
        if (Log::log_status()) {
            Log::create([
                'name' => 'Изменил тип обучения из ' . $current_name . ' в ' . $request->name,
                'type' => 3,
                'user_id' => auth()->guard('web')->id(),
            ]);
        }
        return redirect()->back()->withSuccess('Успешно сохранено');
    }
    
    public function destroy(TrainType $trainType)
    {
        $trainType->delete();
        if (Log::log_status()) {
            Log::create([
                'name' => 'Удалил тип обучения ' . $trainType->name,
                'type' => 4,
                'user_id' => auth()->guard('web')->id(),
            ]);
        }
        return redirect()->back()->withSuccess('Успешно удалено');
    }
}
