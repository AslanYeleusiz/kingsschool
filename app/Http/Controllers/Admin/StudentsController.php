<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\EduOrder;
use App\Models\EduPaidOrder;
use App\Models\Group;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use App\Helpers\Date;
use Inertia\Inertia;

class StudentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = auth()->guard('web')->user();
        $teacher_id = $request->teacher_id;
        $query = EduOrder::with(['user:id,avatar,fio,tel_num', 'teacher:id,fio', 'lastEduPaid', 'group', 'subject']);
        $query->when($user->role_id == 3, function ($query) use ($user) {
            return $query->where('teacher_id', $user->id);
        });
        $query->when($teacher_id, function ($query) use ($teacher_id) {
            return $query->whereHas('teacher', fn($q)=>$q->where('id', $teacher_id));
        });
        $orders = $query->paginate($request->input('per_page', 20))
            ->appends($request->except('page'));

        $now = Carbon::now();
        foreach ($orders as $order) {
            $order['lastEduPaid'] = $order->lastEduPaid;
            if ($order['lastEduPaid']) {
                $order['lastEduPaid']->date = Carbon::parse($order['lastEduPaid']->date)->format('d.m.Y');
            } else {
                $endDate = Carbon::parse($order->end_date);
                $status = $endDate->gt($now) ? 2 : 3;
                $order['lastEduPaid'] = [
                    'id' => 0, // Убедитесь, что end_date - это экземпляр Carbon
                    'date' => $endDate->format('d.m.Y'), // Убедитесь, что end_date - это экземпляр Carbon
                    'status' => $status
                ];
            }
        }
        
        $groups = null;
        if ($user->role_id == 3)
            $groups = Group::where('teacher_id', $user->id)->get();

        return Inertia::render('Admin/Students/Index', [
            'orders' => $orders,
            'groups' => $groups,

            'orders' => $orders,
            'user' => $user
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\EduOrder  $eduOrder
     * @return \Illuminate\Http\Response
     */
    public function show(EduOrder $eduOrder)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\EduOrder  $eduOrder
     * @return \Illuminate\Http\Response
     */
    public function edit(EduOrder $eduOrder)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\EduOrder  $eduOrder
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $eduOrder = EduOrder::findOrFail($id);
        $groupId = $request->groupId;
        DB::beginTransaction();
        if (!$groupId) {
            if(!$request->name) {
                return redirect()->back();
            }
            $group = Group::create([
                'name' => $request->name,
                'teacher_id' => $eduOrder->teacher_id
            ]);
        } else {
            $group = Group::findOrFail($groupId);
        }

        $eduOrder->group_id = $group->id;
        $eduOrder->save();

        DB::commit();
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\EduOrder  $eduOrder
     * @return \Illuminate\Http\Response
     */
    public function destroy(EduOrder $eduOrder)
    {
        //
    }

    public function paid($id)
    {
        $eduOrder = EduOrder::with('lastEduPaid')->findOrFail($id);
        $date = null;
        if ($eduOrder->lastEduPaid) {
            $lastEduPaidDate = $eduOrder->lastEduPaid['date'];
            $diffInDays = $eduOrder->end_date->diffInDays($eduOrder->start_date);
            $date = $lastEduPaidDate->copy()->addDays($diffInDays);
        } else {
            $date = $eduOrder->end_date;
        }
        $late_days = null;
        $late_date = null;
        $now = Carbon::now();
        if ($now > $date) {
            $late_days = $now->diffInDays($date);
            $late_date = $now->copy()->addDays($late_days);
        }

        EduPaidOrder::create([
            'edu_order_id' => $eduOrder->id,
            'date' => $date,
            'price' => $eduOrder->price,
            'late_days' => $late_days,
            'late_date' => $late_date
        ]);

        return redirect()->route('admin.students.index');
    }

    public function deletePaid($id)
    {
        $order = EduOrder::with('lastEduPaid')->findOrFail($id);
        if ($order->lastEduPaid) {
            $order->lastEduPaid->delete();
        }
        return redirect()->route('admin.students.index');
    }
}
