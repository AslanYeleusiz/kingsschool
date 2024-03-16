<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Log;
use App\Models\Role;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RoleController extends Controller
{
    public function index(Request $request)
    {
        $roles = Role::paginate($request->input('per_page', 20))
            ->appends($request->except('page'));
        return Inertia::render('Admin/Role/Index', [
            'roles' => $roles
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Role/Create');
    }

    public function store(Request $request)
    {
        Role::create([
            'name' => $request->name
        ]);
        if (Log::log_status()) {
            Log::create([
                'name' => 'Добавил новую роль ' . $request->name,
                'type' => 2,
                'user_id' => auth()->guard('web')->id(),
            ]);
        }
        return redirect()->route('admin.roles.index')->with('success', 'Успешно добавлено');
    }

    public function edit(Role $role)
    {
        return Inertia::render('Admin/Role/Edit', [
            'role' => $role
        ]);
    }

    public function update(Request $request, Role $role)
    {
        $current_name = $role->name;
        $role->update([
            'name' => $request->name
        ]);
        if (Log::log_status()) {
            Log::create([
                'name' => 'Изменил название роля из ' . $current_name . ' в ' . $request->name,
                'type' => 3,
                'user_id' => auth()->guard('web')->id(),
            ]);
        }
        return redirect()->back()->withSuccess('Успешно сохранено');
    }

    public function destroy(Role $role)
    {
        $role->delete();
        if (Log::log_status()) {
            Log::create([
                'name' => 'Удалил роль ' . $role->name,
                'type' => 4,
                'user_id' => auth()->guard('web')->id(),
            ]);
        }
        return redirect()->back()->withSuccess('Успешно удалено');
    }
}
