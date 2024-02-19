<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
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
        return redirect()->route('admin.trainTypes.index')->with('success','Успешно добавлено');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TrainType  $trainType
     * @return \Illuminate\Http\Response
     */
    public function show(TrainType $trainType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\TrainType  $trainType
     * @return \Illuminate\Http\Response
     */
    public function edit(TrainType $trainType)
    {
        return Inertia::render('Admin/TrainType/Edit', [
            'trainType' => $trainType
        ]);
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TrainType  $trainType
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TrainType $trainType)
    {
        $trainType->update([
           'name' => $request->name
        ]);
        return redirect()->back()->withSuccess('Успешно сохранено');
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TrainType  $trainType
     * @return \Illuminate\Http\Response
     */
    public function destroy(TrainType $trainType)
    {
        $trainType->delete();
        return redirect()->back()->withSuccess('Успешно удалено');
    }
}
