<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\EduOrder;
use App\Models\EduPaidOrder;
use App\Models\Group;
use App\Models\User;
use App\Models\GroupOrder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use App\Helpers\Date;
use App\Models\PaidHistory;
use Inertia\Inertia;
use Illuminate\Support\Str;

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

        $teacher_id = null;
        if($user->role_id == 3) $teacher_id = $user->id;
        $studFio = $request->studFio;
        $subj = $request->subj;
        $prepodFio = $request->prepodFio;
        $phone = $request->phone;
        $query = EduOrder::has('user')->with(['user:id,avatar,fio,tel_num', 'teacher:id,fio', 'lastEduPaid', 'groups', 'subject']);
        $query->when($user->role_id == 2, function ($query) use ($user) {
            return $query->whereHas('teacher', fn ($q) => $q->where('filial_id', $user->filial_id));
        });
        $query->when($teacher_id, function ($query) use ($teacher_id) {
            return $query->where('teacher_id', $teacher_id);
        });
        $query
            ->when($studFio, fn ($q) => $q->whereHas('user', fn ($q) => $q->where('fio', 'like', "%$studFio%")))
            ->when($subj, fn ($q) => $q->whereHas('subject', fn ($q) => $q->where('name', 'like', "%$subj%")))
            ->when($prepodFio, fn ($q) => $q->whereHas('teacher', fn ($q) => $q->where('fio', 'like', "%$prepodFio%")))
            ->when($phone, fn ($q) => $q->whereHas('user', fn ($q) => $q->where('tel_num', 'like', "%$phone%")));
        $orders = $query->paginate($request->input('per_page', 20))
            ->appends($request->except('page'));

        $now = Carbon::now();
        foreach ($orders as $order) {
            $order['lastEduPaid'] = $order->lastEduPaid;
            $percent = $order->percent;
            $order['group_ids'] = $order['groups']->pluck('id')->toArray();
            $order['newGroup'] = 0;
            if ($percent) $order->newPrice = $order->price / 100 * $percent->percent;
            if ($order['lastEduPaid']) {
                $orderDate = Carbon::parse($order['lastEduPaid']->date);
                if ($orderDate < $now) {
                    $endDate = Carbon::parse($order->end_date);
                    $startDate = Carbon::parse($order->start_date);
                    $daysDifference = $endDate->diffInDays($startDate);
                    $order['lastEduPaid']->date = $orderDate->addDays($daysDifference)->format('d.m.Y');
                    $order['lastEduPaid']->status = 2;
                } else $order['lastEduPaid']->date = $orderDate->format('d.m.Y');
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
        if ($teacher_id)
            $groups = Group::where('teacher_id', $teacher_id)->get();

        $teacher = null;
        if ($teacher_id) $teacher = User::findOrFail($teacher_id);

        return Inertia::render('Admin/Students/Index', [
            'orders' => $orders,
            'groups' => $groups,
            'user' => $user,
            'teacher' => $teacher
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
        $newGroup = $request->name;
        DB::beginTransaction();
        $groups = Group::create([
            'name' => $newGroup,
            'teacher_id' => $eduOrder->teacher_id
        ]);
        $eduOrder->groups()->sync([$groups['id']]);
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
        $eduOrder = EduOrder::with('lastEduPaid', 'user')->findOrFail($id);
        $date = null;
        if ($eduOrder->lastEduPaid) {
            $endDate = Carbon::parse($eduOrder->end_date);
            $startDate = Carbon::parse($eduOrder->start_date);
            $lastEduPaidDate = Carbon::parse($eduOrder->lastEduPaid['date']);
            $diffInDays = $endDate->diffInDays($startDate);
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

        PaidHistory::create([
            'edu_paid_order_id' => $eduOrder->id,
        ]);


        return redirect()->back();
    }

    public function deletePaid($id)
    {
        $order = EduOrder::with('lastEduPaid')->findOrFail($id);
        if ($order->lastEduPaid) {
            $order->lastEduPaid->delete();
        }
        return redirect()->back();
    }

    public function destroyGroup($group_id)
    {
        Group::findOrFail($group_id)->delete();
        GroupOrder::where('group_id', $group_id)->delete();
        return redirect()->back()->withSuccess('Успешно удалено');
    }

    public function destroyOrder($order_id, $groupId)
    {
        GroupOrder::where('edu_order_id', $order_id)->where('group_id', $groupId)->delete();
        return redirect()->back()->withSuccess('Успешно удалено');
    }

    public function setGroups($order_id, Request $request){
        $groupsIds = $request->group_ids;
        $eduOrder = EduOrder::findOrFail($order_id);
        $eduOrder->groups()->sync($groupsIds);
        return response()->json($eduOrder['groups']->pluck('id')->toArray());
    }
}
