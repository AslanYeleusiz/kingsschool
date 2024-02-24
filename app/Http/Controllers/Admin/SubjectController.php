<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Subject;
use App\Models\CourseType;
use App\Models\TrainType;
use App\Models\SubjectOrder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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
        foreach($trainTypes as $trainType) {
            $trainType['price'] = 0;
        }
        $shifts = [];
        $shifts[] = [
            'id' => 1,
            'name' => 'Дневной',
            'trainTypes' => $trainTypes
        ];
        $shifts[] = [
            'id' => 2,
            'name' => 'Вечерний',
            'trainTypes' => $trainTypes
        ];
        foreach($courses as $course){
            $course['shifts'] = $shifts;
        }
        
        return Inertia::render('Admin/Subject/Create', [
            'courseTypes' => $courses
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
        DB::beginTransaction();
        $subject = Subject::create([
            'name' => $request->name
        ]);
        $orders = $request->orders;
        foreach($orders as $order) {
            $shifts = $order['shifts'];
            foreach($shifts as $shift) {
                $trainTypes = $shift['trainTypes'];
                foreach($trainTypes as $trainType) {
                    SubjectOrder::create([
                        'subject_id' => $subject['id'],
                        'course_type_id' => $order['id'],
                        'shift_id' => $shift['id'],
                        'train_type_id' => $trainType['id'],
                        'price' => $trainType['price']
                    ]);
                }
            }
        }
        DB::commit();
        
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
        $courses = CourseType::get()->toArray();
        $trainTypes = TrainType::get()->toArray();
        $subjectOrders = SubjectOrder::where('subject_id', $subject->id)->get();
        $shifts = [];
        $shifts[] = [
            'id' => 1,
            'name' => 'Дневной'
        ];
        $shifts[] = [
            'id' => 2,
            'name' => 'Вечерний'
        ];
        // return $subjectOrders;
        foreach($courses as &$order) {
            $order['shifts'] = $shifts;
            foreach($order['shifts'] as &$shift) {
                $shift['trainTypes'] = $trainTypes;
                foreach($shift['trainTypes'] as &$trainType) {
                    $trainType['price'] = $subjectOrders->first(function($item) use ($order, $shift, $trainType) {
                        return $item->course_type_id == $order['id'] && $item->shift_id == $shift['id'] && $item->train_type_id == $trainType['id'];
                    })->price;
                }
            }
        }

        // return $courses;

        return Inertia::render('Admin/Subject/Edit', [
            'subject' => $subject,
            'courseTypes' => $courses,
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
        DB::beginTransaction();
        $subject->update([
            'name' => $request->name
        ]);
        $orders = $request->orders;
        foreach($orders as $order) {
            $shifts = $order['shifts'];
            foreach($shifts as $shift) {
                $trainTypes = $shift['trainTypes'];
                foreach($trainTypes as $trainType) {
                    SubjectOrder::where('subject_id', $subject->id)
                    ->where('course_type_id', $order['id'])
                    ->where('shift_id', $shift['id'])
                    ->where('train_type_id', $trainType['id'])
                    ->update([
                        'price' => $trainType['price']
                    ]);
                }
            }
        }
        DB::commit();
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
        SubjectOrder::where('subject_id', $subject->id)->delete();
        $subject->delete();
        return redirect()->back()->withSuccess('Успешно удалено');
        
    }

    public function getSubjectOrder($id) {
        $SubjectOrder = SubjectOrder::where('subject_id', $id)->get();
        return response()->json($SubjectOrder);
    }

    public function dublicate($id) {
        $subject = Subject::findOrFail($id);
        
        DB::beginTransaction();
        $dsubject = Subject::create([
            'name' => $subject->name
        ]);
        $sorders = SubjectOrder::where('subject_id', $subject->id)->get();
        foreach ($sorders as $sorder) {
            $dsorder = $sorder->replicate();
            $dsorder->subject_id = $dsubject->id;
            $dsorder->save();
        }
        DB::commit();
        
        return redirect()->back()->withSuccess('Успешно сдублировано');
    }
}
