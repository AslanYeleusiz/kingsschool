<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\CourseType;
use Illuminate\Http\Request;
use App\Models\Log;
use Inertia\Inertia;

class CourseTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $courseTypes = CourseType::paginate($request->input('per_page', 20))
                    ->appends($request->except('page'));
        return Inertia::render('Admin/CourseType/Index', [
            'courseTypes' => $courseTypes
        ]);
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/CourseType/Create');
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        CourseType::create([
            'name' => $request->name
        ]);
        if(Log::log_status()) {
            Log::create([
                'name' => 'Создал тип курса',
                'type' => 2,
                'user_id' => auth()->guard('web')->id(),
            ]);
        }
        return redirect()->route('admin.courseTypes.index')->with('success','Успешно добавлено');
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CourseType  $courseType
     * @return \Illuminate\Http\Response
     */
    public function show(CourseType $courseType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CourseType  $courseType
     * @return \Illuminate\Http\Response
     */
    public function edit(CourseType $courseType)
    {
        return Inertia::render('Admin/CourseType/Edit', [
            'courseType' => $courseType
        ]);
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CourseType  $courseType
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CourseType $courseType)
    {
        $courseType->update([
            'name' => $request->name
        ]);
        if(Log::log_status()) {
            Log::create([
                'name' => 'Изменил тип курса',
                'type' => 3,
                'user_id' => auth()->guard('web')->id(),
            ]);
        }
        return redirect()->back()->withSuccess('Успешно сохранено');
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CourseType  $courseType
     * @return \Illuminate\Http\Response
     */
    public function destroy(CourseType $courseType)
    {
        $courseType->delete();
        if(Log::log_status()) {
            Log::create([
                'name' => 'Удалил тип курса',
                'type' => 4,
                'user_id' => auth()->guard('web')->id(),
            ]);
        }
        return redirect()->back()->withSuccess('Успешно удалено');
        
    }
}
