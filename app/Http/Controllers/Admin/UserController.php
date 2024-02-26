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
        $teachers = User::where('role_id', 3)->get();
        return Inertia::render('Admin/Users/Create', [
            'roles' => $roles,
            'filials' => $filials,
            'subjects' => $subjects,
            'courseTypes' => $courseTypes,
            'trainTypes' => $trainTypes,
            'teachers' => $teachers,
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
        $roles = Role::get();
        $filials = Filial::get();
        return Inertia::render('Admin/Users/Edit', [
            'roles' => $roles,
            'filials' => $filials,
            'user' => $user,
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

        $user->update([
            'iin' => $request->iin,
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

        return redirect()->back()->withSuccess('Успешно сохранено');
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
        return redirect()->back()->withSuccess('Успешно удалено');
    }

    public function remove($id)
    {
        $user = User::findOrFail($id);

        $user->delete();
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
