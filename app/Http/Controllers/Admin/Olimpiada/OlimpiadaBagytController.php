<?php

namespace App\Http\Controllers\Admin\Olimpiada;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Olimpiada\OlimpiadaBagytSaveRequest;
use App\Http\Requests\Admin\Olimpiada\OlimpiadaBagytyRequest;
use App\Services\Admin\OlimpBagytService;
use App\Models\OlimpiadaBagyty;
use App\Models\OlimpiadaTury;
use App\Models\OlimpiadaKatysushy;
use App\Models\ClassList;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OlimpiadaBagytController extends Controller
{
    public $olimpBagytService;
    public function __construct(OlimpBagytService $olimpBagytService)
    {
        $this->olimpBagytService = $olimpBagytService;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $o_bagyty = $request->o_bagyty;
        $o_katysushy_idd = $request->o_katysushy_idd;
        $type = 2;
        $bagyt = $request->bagyt;
        $enable = $request->enable;
        $is_free = $request->is_free;

        $bagyts = OlimpiadaBagyty::where('type', $type)
            ->when($o_bagyty, fn($query) => $query->where('o_bagyty', 'like', "%$o_bagyty%"))
            ->when($o_katysushy_idd, fn($query) => $query->where('o_katysushy_idd', $o_katysushy_idd))
            ->when($bagyt, fn($query) => $query->where('bagyt', 'like', "%$bagyt%"))
            ->when($enable != null, fn($query) => $query->where('enable', $enable))
            ->when($is_free != null, fn($query) => $query->where('is_free', $is_free))
            ->with('katysushy')
            ->withCount('suraktar')
            ->latest('idd')
            ->paginate($request->input('per_page', 20))
            ->appends($request->except('page'));
        $BAGYT_TYPE_PRICE = OlimpiadaBagyty::BAGYT_TYPE_PRICE;
        $katysushylar = OlimpiadaKatysushy::get();
        return Inertia::render('Admin/OlimpBagyty/Index', [
            'bagyts' => $bagyts,
            'katysushylar' => $katysushylar,
            'BAGYT_TYPE_PRICE' => $BAGYT_TYPE_PRICE,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

        $katysushylar = OlimpiadaKatysushy::get();
        $classList = ClassList::get();
        return Inertia::render('Admin/OlimpBagyty/Create', [
            'katysushylar' => $katysushylar,
            'classItems' => $classList,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(OlimpiadaBagytSaveRequest $request)
    {
        $this->olimpBagytService->save($request);
        return redirect()->route('admin.olimpiadaBagyty.index')->withSuccess('Успешно сохранено');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\OlimpiadaBagyty  $olimpiadaBagyty
     * @return \Illuminate\Http\Response
     */
    public function show(OlimpiadaBagyty $olimpiadaBagyty)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\OlimpiadaBagyty  $olimpiadaBagyty
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $olimpiadaBagyty = OlimpiadaBagyty::findOrFail($id);
        return Inertia::render('Admin/OlimpBagyty/Edit', [
            'bagyt' => $olimpiadaBagyty
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\OlimpiadaBagyty  $olimpiadaBagyty
     * @return \Illuminate\Http\Response
     */
    public function update(OlimpiadaBagytyRequest $request, $id)
    {
        $this->olimpBagytService->multiupdate($request);
        return redirect()->back()->withSuccess('Успешно сохранено');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\OlimpiadaBagyty  $olimpiadaBagyty
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $olimpiadaBagyty = OlimpiadaBagyty::findOrFail($id);
        $olimpiadaBagyty->delete();
        OlimpiadaTury::where('o_bagyty_idd', $id)->delete();
        return redirect()->back()->withSuccess('Успешно сохранено');
    }
}
