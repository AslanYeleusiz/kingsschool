<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\EduOrder;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EduOrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($userId, Request $request)
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($userId)
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store($userId, Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\EduOrder  $eduOrder
     * @return \Illuminate\Http\Response
     */
    public function show($userId, EduOrder $eduOrder)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\EduOrder  $eduOrder
     * @return \Illuminate\Http\Response
     */
    public function edit($userId, EduOrder $eduOrder)
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
    public function update($userId, Request $request, EduOrder $eduOrder)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\EduOrder  $eduOrder
     * @return \Illuminate\Http\Response
     */
    public function destroy($userId, EduOrder $eduOrder)
    {
        //
    }
}
