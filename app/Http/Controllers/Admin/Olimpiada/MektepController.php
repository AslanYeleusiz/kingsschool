<?php

namespace App\Http\Controllers\Admin\Olimpiada;

use App\Http\Controllers\Controller;
use App\Models\Mektep;
use App\Models\Oblys;
use App\Models\Audan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MektepController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($oblysId, $audanId, Request $request)
    {
        $name = $request->name;
        $mektep = Mektep::orderBy('name')
            ->where('oblys_id', $oblysId)
            ->where('audan_id', $audanId)
            ->when($name, fn($q)=>$q->where('name', 'like', "%$name%"))
            ->paginate($request->input('per_page', 20))
            ->appends($request->except('page'));
        $oblys = Oblys::findOrFail($oblysId);
        $audan = Audan::findOrFail($audanId);
        return Inertia::render('Admin/OlimpiadaMektep/Index', [
            'mektep' => $mektep,
            'oblys' => $oblys,
            'audan' => $audan,
        ]);
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($oblysId, $audanId)
    {
        $oblys = Oblys::findOrFail($oblysId);
        $audan = Audan::findOrFail($audanId);
        return Inertia::render('Admin/OlimpiadaMektep/Create', [
            'oblys' => $oblys,
            'audan' => $audan,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store($oblysId, $audanId, Request $request)
    {
        Mektep::create([
            'name' => $request->name,
            'oblys_id' => $oblysId,
            'audan_id' => $audanId,
        ]);
        return redirect()->route('admin.mektep.index', [$oblysId, $audanId])->withSuccess('Успешно добавлено');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Mektep  $mektep
     * @return \Illuminate\Http\Response
     */
    public function show(Mektep $mektep)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Mektep  $mektep
     * @return \Illuminate\Http\Response
     */
    public function edit($oblysId, $audanId, $id)
    {
        $mektep = Mektep::findOrFail($id);
        $oblys = Oblys::findOrFail($oblysId);
        $audan = Audan::findOrFail($audanId);
        return Inertia::render('Admin/OlimpiadaMektep/Edit', [
            'mektep' => $mektep,
            'oblys' => $oblys,
            'audan' => $audan,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Mektep  $mektep
     * @return \Illuminate\Http\Response
     */
    public function update($oblysId, $audanId, Request $request, $id)
    {
        $mektep = Mektep::findOrFail($id)->update([
            'name' => $request->name
        ]);
        return redirect()->back()->withSuccess('Успешно сохранено');
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Mektep  $mektep
     * @return \Illuminate\Http\Response
     */
    public function destroy($oblysId, $audanId, $id)
    {
        $mektep = Mektep::findOrFail($id)->delete();
        return redirect()->back()->withSuccess('Успешно удалено');
        
    }
}
