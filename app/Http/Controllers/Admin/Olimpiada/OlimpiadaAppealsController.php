<?php

namespace App\Http\Controllers\Admin\Olimpiada;

use App\Http\Controllers\Controller;
use App\Models\OlimpiadaAppeals;
use App\Models\TestSuraktar;
use App\Models\TestZhauaptar;
use App\Models\OlimpiadaKatysushy;
use App\Helpers\Date;
use App\Http\Requests\Admin\Olimpiada\OlimpiadaAppealSaveRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OlimpiadaAppealsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user_id = $request->user_id;
        $fio = $request->fio;
        $variable = $request->variable;
        $bagyt_name = $request->bagyt_name;
        $o_katysushy_idd = $request->o_katysushy_idd;
        $is_checked = $request->is_checked;
        $appeals = OlimpiadaAppeals::with(['surak', 'user', 'o_bagyt', 'o_tizim.katysushy'])
            // ->has('o_tizim')
            ->when($variable, fn($query) => $query->where('variable', 'like', "%$variable%"))
            ->when($user_id, fn($query) => $query->where('user_id', $user_id))
            ->when($o_katysushy_idd, fn($query) => $query->whereHas('o_bagyt', function($q) use ($o_katysushy_idd){
                $q->where('o_katysushy_idd', $o_katysushy_idd);
            }))
            ->when($fio, fn($query) => $query->whereHas('user', function($q) use ($fio){
                $q->where('fio', 'like', "%$fio%");
            }))

            ->when($bagyt_name, fn($query) => $query->whereHas('o_bagyt', function($q) use ($bagyt_name){
                $q->where('bagyt', 'like', "%$bagyt_name%");
            }))
            ->when($is_checked != null, fn($query) => $query->where('is_checked', $is_checked))
            ->latest('id')
            ->paginate($request->input('per_page', 20))
            ->appends($request->except('page'));
        $o_katysushylar = OlimpiadaKatysushy::get();
        foreach($appeals as $appeal){
            $appeal->o_date = Date::dmYKZ($appeal->created_at);
        }
        return Inertia::render('Admin/OlimpiadaAppeals/Index', [
            'appeals' => $appeals,
            'appeal_types' => $appeals,
            'o_katysushylar' => $o_katysushylar,
        ]);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\OlimpiadaAppeals  $olimpiadaAppeals
     * @return \Illuminate\Http\Response
     */
    public function show(OlimpiadaAppeals $olimpiadaAppeals)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\OlimpiadaAppeals  $olimpiadaAppeals
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $appeal = OlimpiadaAppeals::with('user')->findOrFail($id);
        $testSurak = TestSuraktar::with(['zhauap','bagyty','tury'])->findOrFail($appeal->surak_id);
        $zhauaptar = TestZhauaptar::where('surak_id', $appeal->surak_id)->get();
        foreach($zhauaptar as $key=>$zhauap){
            if($zhauap->zhauap_id == 1) $testSurak->correct_answer_number = $key;
        }
        return Inertia::render('Admin/OlimpiadaAppeals/Edit', [
            'surak' => $testSurak,
            'appeal' => $appeal,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\OlimpiadaAppeals  $olimpiadaAppeals
     * @return \Illuminate\Http\Response
     */
    public function update(OlimpiadaAppealSaveRequest $request, $id)
    {
        $olimpiadaAppeals = OlimpiadaAppeals::findOrFail($id);

        $testSurak = TestSuraktar::findOrFail($olimpiadaAppeals->surak_id);
        $testSurak->update([
            'surak' => $request->surak['surak'],
            'tusinik' => $request->surak['tusinik'] ?? " ",
        ]);
        $zhauaptar = $request->surak['zhauap'];
        foreach($zhauaptar as $key=>$zhauap){
            $zhauap_id = $key == $request->surak['correct_answer_number'] ? 1 : 0;
            TestZhauaptar::findOrFail($zhauap['id'])->update([
                'variant' => $zhauap['variant'],
                'zhauap_id' => $zhauap_id,
            ]);
        }
        $olimpiadaAppeals->update([
            'is_checked' => $request->appeal['is_checked'],
            'error_type' => $request->appeal['error_type'],
        ]);
        return redirect()->back()->withSuccess('Успешно сохранено');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\OlimpiadaAppeals  $olimpiadaAppeals
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        OlimpiadaAppeals::findOrFail($id)->delete();
        return redirect()->back()->withSuccess('Успешно удалено');
    }
}
