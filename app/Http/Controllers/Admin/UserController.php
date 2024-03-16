<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Role;
use App\Models\Filial;
use App\Models\Subject;
use App\Models\CourseType;
use App\Models\TrainType;
use App\Models\EduOrder;
use App\Models\Log;
use App\Models\TeacherSalaryOrder;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Services\FileService;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $roles = Role::get();
        $filials = Filial::get();

        $fio = $request->fio;
        $tel_num = $request->tel_num;
        $filial_id = $request->filial_id;
        $role_id = $request->role_id;

        $users = User::with(['role', 'filial'])
            ->isNotDeleted()
            ->when($fio, fn ($q) => $q->where('fio', 'like', "%$fio%"))
            ->when($tel_num, fn ($q) => $q->where('tel_num', 'like', "%$tel_num%"))
            ->when($filial_id, fn ($q) => $q->where('filial_id', $filial_id))
            ->when($role_id, fn ($q) => $q->where('role_id', $role_id))
            ->latest('id')
            ->paginate($request->input('per_page', 20))
            ->appends($request->except('page'));


        return Inertia::render('Admin/Users/Index', [
            'users' => $users,
            'roles' => $roles,
            'filials' => $filials,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $roles = Role::get();
        $filials = Filial::get();
        $subjects = Subject::get();
        $courseTypes = CourseType::get();
        $trainTypes = TrainType::get();
        $shifts = [];
        $shifts[] = [
            'id' => 1,
            'name' => 'Дневной'
        ];
        $shifts[] = [
            'id' => 2,
            'name' => 'Вечерний'
        ];
        return Inertia::render('Admin/Users/Create', [
            'roles' => $roles,
            'filials' => $filials,
            'subjects' => $subjects,
            'courseTypes' => $courseTypes,
            'trainTypes' => $trainTypes,
            'shifts' => $shifts,
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

        if ($request->hasFile('image')) {
            $file_path = FileService::saveFile($request->image, User::IMAGE_PATH);
            $file_path = User::IMAGE_PATH . '' . $file_path;
        } else {
            if ($request->image) {
                $file_path = $request->image;
            } else {
                $file_path = 'avatars/default.jpg';
            }
        }

        $real_password = $request->real_password ?? 'password';

        DB::beginTransaction();
        $user = User::create([
            'iin' => $request->iin,
            'card_id' => $request->card_id,
            'name' => $request->name,
            's_name' => $request->s_name,
            'fio' => $request->s_name . ' ' . $request->name,
            'birthday' => $request->birthday,
            'tel_num' => $request->tel_num,
            'tel_num_family' => $request->tel_num_family,
            'real_password' => $real_password,
            'password' => Hash('sha1', $real_password),
            'avatar' => $file_path,
            'filial_id' => $request->filial_id,
            'role_id' => $request->role_id,
            'start_edu_date' => $request->start_edu_date,
        ]);

        if ($request->role_id == 4) {
            $eduOrders = $request->eduOrders;
            if ($eduOrders) {
                foreach ($eduOrders as $eduOrder) {
                    EduOrder::create([
                        'user_id' => $user->id,
                        'subject_id' => $eduOrder['subject_id'],
                        'teacher_id' => $eduOrder['teacher_id'],
                        'shift_id' => $eduOrder['shift_id'],
                        'train_type_id' => $eduOrder['train_type_id'],
                        'course_type_id' => $eduOrder['course_type_id'],
                        'price' => $eduOrder['price'],
                        'start_date' => $eduOrder['start_date'],
                        'end_date' => $eduOrder['end_date'],
                    ]);
                }
            }
        }

        if ($request->role_id == 3) {
            $eduOrders = $request->eduOrders;
            foreach ($eduOrders as $eduOrder) {
                TeacherSalaryOrder::create([
                    'user_id' => $user->id,
                    'train_type_id' => $eduOrder['id'],
                    'percent' => $eduOrder['percent'],
                ]);
            }
        }
        DB::commit();

        if (Log::log_status()) {
            Log::create([
                'name' => 'Добавил нового пользователя ' . $request->s_name . ' ' . $request->name,
                'type' => 2,
                'user_id' => auth()->guard('web')->id(),
            ]);
        }

        return redirect()->route('admin.users.index')->with('success', 'Успешно добавлено');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        $auth_user = auth()->guard('web')->user();
        $roles = Role::get();
        $filials = Filial::get();
        $user->load('salaryOrders.trainType');
        if (count($user['salaryOrders']) == 0) {
            $trainTypes = TrainType::get();
            foreach ($trainTypes as $trainType) {
                TeacherSalaryOrder::create([
                    'user_id' => $user->id,
                    'train_type_id' => $trainType['id'],
                    'percent' => 40,
                ]);
            }
            $user->load('salaryOrders.trainType');
        }
        return Inertia::render('Admin/Users/Edit', [
            'roles' => $roles,
            'filials' => $filials,
            'user' => $user,
            'auth_user' => $auth_user,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        if ($request->hasFile('image')) {
            $file_path = FileService::saveFile($request->image, User::IMAGE_PATH);
            $file_path = User::IMAGE_PATH . '' . $file_path;
        } else {
            $file_path = $request->avatar;
        }

        $real_password = $request->real_password ?? 'password';
        $current_user_fio = $user->fio;
        $user->update([
            'iin' => $request->iin,
            'card_id' => $request->card_id,
            'name' => $request->name,
            's_name' => $request->s_name,
            'fio' => $request->s_name . ' ' . $request->name,
            'birthday' => $request->birthday,
            'tel_num' => $request->tel_num,
            'tel_num_family' => $request->tel_num_family,
            'real_password' => $real_password,
            'password' => Hash('sha1', $real_password),
            'avatar' => $file_path,
            'filial_id' => $request->filial_id,
            'role_id' => $request->role_id,
            'start_edu_date' => $request->start_edu_date,
        ]);
        $log_text1 = 'Изменил ФИО пользователя и данные из ' . $current_user_fio . ' в ' . $user->fio;
        $log_text2 = 'Изменил данные пользователя ' . $current_user_fio;
        if (Log::log_status()) {
            Log::create([
                'name' => $current_user_fio == $user->fio ? $log_text2 : $log_text1,
                'type' => 3,
                'user_id' => auth()->guard('web')->id(),
            ]);
        }
        if ($user->role_id == 3) {
            foreach ($request['salary_orders'] as $order) {
                TeacherSalaryOrder::find($order['id'])->update([
                    'percent' => $order['percent']
                ]);
            }

            if (Log::log_status()) {
                Log::create([
                    'name' => 'Изменил данные о ставках пользователя ' . $request->s_name . ' ' . $request->name,
                    'type' => 3,
                    'user_id' => auth()->guard('web')->id(),
                ]);
            }
        }

        return redirect()->route('admin.users.index')->with('success', 'Успешно сохранено');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $user->is_deleted = 1;
        $user->save();
        if (Log::log_status()) {
            Log::create([
                'name' => 'Добавил пользователя ' . $user->fio . ' в корзину ',
                'type' => 4,
                'user_id' => auth()->guard('web')->id(),
            ]);
        }
        return redirect()->back()->withSuccess('Успешно удалено');
    }

    public function remove($id)
    {
        $user = User::findOrFail($id);

        $user->delete();
        if (Log::log_status()) {
            Log::create([
                'name' => 'Удалил данные пользователя ' . $user->fio,
                'type' => 4,
                'user_id' => auth()->guard('web')->id(),
            ]);
        }
        return redirect()->back()->withSuccess('Успешно удалено');
    }



    public function is_deleted(Request $request)
    {
        $roles = Role::get();
        $filials = Filial::get();

        $fio = $request->fio;
        $tel_num = $request->tel_num;
        $filial_id = $request->filial_id;
        $role_id = $request->role_id;

        $users = User::with(['role', 'filial'])
            ->isDeleted()
            ->when($fio, fn ($q) => $q->where('fio', 'like', "%$fio%"))
            ->when($tel_num, fn ($q) => $q->where('tel_num', 'like', "%$tel_num%"))
            ->when($filial_id, fn ($q) => $q->where('filial_id', $filial_id))
            ->when($role_id, fn ($q) => $q->where('role_id', $role_id))
            ->latest('id')
            ->paginate($request->input('per_page', 20))
            ->appends($request->except('page'));

        return Inertia::render('Admin/Users/Deleted', [
            'users' => $users,
            'roles' => $roles,
            'filials' => $filials,
        ]);
    }

    public function activate($user_id)
    {
        User::findOrFail($user_id)->update([
            'is_deleted' => 0
        ]);
        if (Log::log_status()) {
            Log::create([
                'name' => 'Восстановил данные пользователя ' . User::findOrFail($user_id)->fio . ' из корзины ',
                'type' => 2,
                'user_id' => auth()->guard('web')->id(),
            ]);
        }
        return redirect()->back()->withSuccess('Успешно обновлено');
    }

    public function checkIin(Request $request)
    {
        $iin = $request->iin;
        $user = User::where('iin', $iin)->first();
        return response()->json([
            'status' => $user ? true : false
        ]);
    }
}
