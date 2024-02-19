<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Subject;
use App\Models\CourseType;
use App\Models\TrainType;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $name = $request->name;
        $subjects = Subject::latest('id')
            ->when($name, fn($q)=>$q->where('name', 'like', "%$name%"))
            ->paginate($request->input('per_page', 20))
            ->appends($request->except('page'));
        return Inertia::render('Admin/Subject/Index', [
            'subjects' => $subjects
        ]);
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $courses = CourseType::get();
        $trainTypes = TrainType::get();
        
        //Создать массив который принимает все допустимые цены для предмета используя типы курсов и типы занятии
        
        
        return Inertia::render('Admin/Subject/Create', [
            'courseTypes' => $courses,
            'trainTypes' => $trainTypes,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Subject::create([
            'name' => $request->name,
            'price' => $request->price,
        ]);
        return redirect()->route('admin.subjects.index')->with('success','Успешно добавлено');
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Subject  $subject
     * @return \Illuminate\Http\Response
     */
    public function show(Subject $subject)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Subject  $subject
     * @return \Illuminate\Http\Response
     */
    public function edit(Subject $subject)
    {
        return Inertia::render('Admin/Subject/Edit', [
            'subject' => $subject
        ]);
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Subject  $subject
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Subject $subject)
    {
        $subject->update([
            'name' => $request->name,
            'price' => $request->price,
        ]);
        return redirect()->back()->withSuccess('Успешно сохранено');
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Subject  $subject
     * @return \Illuminate\Http\Response
     */
    public function destroy(Subject $subject)
    {
        $subject->delete();
        return redirect()->back()->withSuccess('Успешно удалено');
        
    }
}
