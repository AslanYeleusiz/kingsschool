<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Expenses;
use App\Models\Filial;
use App\Models\Log;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExpensesController extends Controller
{
    public function index(Request $request)
    {
        $name = $request->name;
        $type_id = $request->type_id;
        $fio = $request->fio;
        $filial_id = $request->filial_id;
        $expenses = Expenses::with(['user', 'filial'])
            ->when($name, fn ($q) => $q->where('name', 'like', "%$name%"))
            ->when($type_id, fn ($q) => $q->where('type_id', $type_id))
            ->when($fio, fn ($q) => $q->whereHas('user', fn ($q) => $q->where('fio', 'like', "%$fio%")))
            ->when($filial_id, fn ($q) => $q->where('filial_id', $filial_id))
            ->paginate($request->input('per_page', 20))
            ->appends($request->except('page'));
        $filials = Filial::get();
        $model = new Expenses();
        $types = $model->types();
        return Inertia::render('Admin/Expenses/Index', [
            'expenses' => $expenses,
            'types' => $types,
            'filials' => $filials,
        ]);
    }

    public function create()
    {
        $expenses = new Expenses();
        $types = $expenses->types();
        return Inertia::render('Admin/Expenses/Create', [
            'types' => $types
        ]);
    }

    public function store(Request $request)
    {
        $user = auth()->guard('web')->user();
        Expenses::create([
            'name' => $request->name,
            'summa' => $request->summa,
            'date' => Carbon::now(),
            'user_id' => $user->id,
            'filial_id' => $user->filial_id,
            'type_id' => $request->type_id,
        ]);
        if (Log::log_status()) {
            Log::create([
                'name' => 'Добавил расход ' . $request->name,
                'type' => 2,
                'user_id' => auth()->guard('web')->id(),
            ]);
        }
        return redirect()->route('admin.expenses.index')->with('success', 'Успешно добавлено');
    }

    public function edit($id)
    {
        $model = new Expenses();
        $types = $model->types();
        $expenses = Expenses::find($id);
        return Inertia::render('Admin/Expenses/Edit', [
            'expenses' => $expenses,
            'types' => $types,
        ]);
    }

    public function update(Request $request, $id)
    {
        $expenses = Expenses::find($id);
        $current_name = $expenses->name;
        $expenses->update([
            'name' => $request->name,
            'summa' => $request->summa,
            'date' => Carbon::now(),
            'type_id' => $request->type_id,
        ]);
        $log_text1 = 'Изменил название и данные расхода из ' . $current_name . ' в ' . $expenses->name;
        $log_text2 = 'Изменил данные расхода ' . $current_name;
        if (Log::log_status()) {
            Log::create([
                'name' => $current_name == $expenses->name ? $log_text2 : $log_text1,
                'type' => 3,
                'user_id' => auth()->guard('web')->id(),
            ]);
        }
        return redirect()->route('admin.expenses.index')->withSuccess('Успешно сохранено');
    }

    public function destroy($id)
    {
        $expense = Expenses::findOrFail($id);
        $expense->delete();
        if (Log::log_status()) {
            Log::create([
                'name' => 'Удалил расход ' . $expense->name,
                'type' => 4,
                'user_id' => auth()->guard('web')->id(),
            ]);
        }
        return redirect()->back()->withSuccess('Успешно удалено');
    }
}
