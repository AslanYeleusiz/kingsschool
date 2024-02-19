<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Filial;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FilialController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $filials = Filial::paginate($request->input('per_page', 20))
                    ->appends($request->except('page'));
        return Inertia::render('Admin/Filial/Index', [
            'filials' => $filials
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/Filial/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Filial::create([
            'name' => $request->name
        ]);
        return redirect()->route('admin.filials.index')->with('success','Успешно добавлено');
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\filial  $filial
     * @return \Illuminate\Http\Response
     */
    public function show(Filial $filial)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\filial  $filial
     * @return \Illuminate\Http\Response
     */
    public function edit(Filial $filial)
    {
        return Inertia::render('Admin/Filial/Edit', [
            'filial' => $filial
        ]);
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\filial  $filial
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Filial $filial)
    {
        $filial->update([
            'name' => $request->name
        ]);
        return redirect()->back()->withSuccess('Успешно сохранено');
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\filial  $filial
     * @return \Illuminate\Http\Response
     */
    public function destroy(Filial $filial)
    {
        //
    }
}
