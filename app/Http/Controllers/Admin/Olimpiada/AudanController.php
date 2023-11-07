<?php

namespace App\Http\Controllers\Admin\Olimpiada;

use App\Http\Controllers\Controller;
use App\Models\Audan;
use App\Models\Oblys;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AudanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($oblysId, Request $request)
    {
        $name = $request->name;
        $audan = Audan::withCount(['mektepter'])
            ->where('oblys_id', $oblysId)
            ->orderBy('name')
            ->when($name, fn($q)=>$q->where('name', 'like', "%$name%"))
            ->paginate($request->input('per_page', 20))
            ->appends($request->except('page'));
        $oblys = Oblys::findOrFail($oblysId);
        
        return Inertia::render('Admin/OlimpiadaAudan/Index', [
            'audan' => $audan,
            'oblys' => $oblys,
        ]);
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($oblysId)
    {
        $oblys = Oblys::findOrFail($oblysId);
        
        return Inertia::render('Admin/OlimpiadaAudan/Create', [
            'oblys' => $oblys,
        ]);
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store($oblysId, Request $request)
    {
        Audan::create([
            'name' => $request->name,
            'oblys_id' => $oblysId,
        ]);
        return redirect()->route('admin.audan.index', $oblysId)->withSuccess('Успешно добавлено');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Audan  $audan
     * @return \Illuminate\Http\Response
     */
    public function show(Audan $audan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Audan  $audan
     * @return \Illuminate\Http\Response
     */
    public function edit($oblysId, $id)
    {
        $audan = Audan::findOrFail($id);
        $oblys = Oblys
        ::findOrFail($oblysId);
        
        return Inertia::render('Admin/OlimpiadaAudan/Edit', [
            'audan' => $audan,
            'oblys' => $oblys,
        ]);
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Audan  $audan
     * @return \Illuminate\Http\Response
     */
    public function update($oblysId, Request $request, $id)
    {
        $audan = Audan::findOrFail($id)->update([
            'name' => $request->name
        ]);
        return redirect()->back()->withSuccess('Успешно сохранено');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Audan  $audan
     * @return \Illuminate\Http\Response
     */
    public function destroy($oblysId, $id)
    {
        $audan = Audan::findOrFail($id)->delete();
        return redirect()->back()->withSuccess('Успешно удалено');
    }
}
