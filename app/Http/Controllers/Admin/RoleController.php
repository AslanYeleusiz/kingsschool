<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
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
        return redirect()->route('admin.roles.index')->with('success','Успешно добавлено');
        
    }

    public function edit(Role $role)
    {
        return Inertia::render('Admin/Role/Edit', [
            'role' => $role
        ]);
        
    }
    
    public function update(Request $request, Role $role)
    {
        $role->update([
            'name' => $request->name
        ]);
        return redirect()->back()->withSuccess('Успешно сохранено');
        
    }
    
    public function destroy(Role $role)
    {
        $role->delete();
        return redirect()->back()->withSuccess('Успешно удалено');
        
    }
}
