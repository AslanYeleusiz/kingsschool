<?php

namespace App\Http\Controllers\Admin\Olimpiada;

use App\Http\Controllers\Controller;
use App\Models\Oblys;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OblysController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $name = $request->name;
        $oblys = Oblys::withCount('audans')->orderBy('name')
            ->when($name, fn($q)=>$q->where('name', 'like', "%$name%"))
            ->paginate($request->input('per_page', 20))
            ->appends($request->except('page'));
        return Inertia::render('Admin/OlimpiadaOblys/Index', [
            'oblys' => $oblys,
        ]);
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/OlimpiadaOblys/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Oblys::create([
            'name' => $request->name
        ]);
        return redirect()->route('admin.oblys.index')->withSuccess('Успешно добавлено');
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Oblys  $oblys
     * @return \Illuminate\Http\Response
     */
    public function show(Oblys $oblys)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Oblys  $oblys
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $oblys = Oblys::findOrFail($id);
        return Inertia::render('Admin/OlimpiadaOblys/Edit', [
            'oblys' => $oblys,
        ]);
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Oblys  $oblys
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $oblys = Oblys::findOrFail($id);
        $oblys->update([
            'name' => $request->name
        ]);
        return redirect()->back()->withSuccess('Успешно сохранено');
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Oblys  $oblys
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $oblys = Oblys
        ::findOrFail($id)->delete();
        return redirect()->back()->withSuccess('Успешно удалено');
        
    }
}
