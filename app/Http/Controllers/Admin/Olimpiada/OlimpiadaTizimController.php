<?php

namespace App\Http\Controllers\Admin\Olimpiada;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Olimpiada\OlimpiadaTizimRequest;
use App\Http\Requests\Admin\Olimpiada\OlimpiadaKatysuSaveRequest;
use Illuminate\Support\Facades\Auth;
use App\Models\OlimpiadaTizim;
use App\Models\OlimpiadaKatysu;
use App\Models\OlimpiadaKatysushy;
use App\Models\OlimpiadaBagyty;
use App\Models\OlimpiadaTury;
use App\Models\ClassList;
use App\Models\OlimpiadaZhetekshi;
use Illuminate\Support\Facades\Storage;
use App\Services\V1\Olimpiada\OlimpiadaTizimService;
use App\Services\V1\Olimpiada\OlimpCertGenerateService;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Inertia\Inertia;

class OlimpiadaTizimController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public $tizimService;
    public $certificateService;
    public function __construct(OlimpiadaTizimService $tizimService, OlimpCertGenerateService $certificateService)
    {
        $this->tizimService = $tizimService;
        $this->certificateService = $certificateService;
    }

    public function index(Request $request)
    {
        $user_id = $request->user_id;
        $katysushy_name = $request->katysushy_name;
        $o_katysushy_idd = $request->o_katysushy_idd;
        $bagyt_name = $request->bagyt_name;
        $obwcode = $request->obwcode;
        $success = $request->success;
        $o_katysushylar = OlimpiadaKatysu::has('user')->with(['user', 'o_katysushy', 'bagyty', 'o_tizim'])
            ->when($user_id, fn($query)=>$query->where('user_id',$user_id))
            ->when($katysushy_name, fn($query)=>$query->where('o_katysushy_fio','like',"%$katysushy_name%"))
            ->when($o_katysushy_idd, fn($query)=>$query->where('o_katysushy_idd',$o_katysushy_idd))
            ->when($obwcode, fn($query)=>$query->where('obwcode',$obwcode))
            ->when($success != null, fn($query)=>$query->where('success',$success))
            ->when($bagyt_name, fn($query)=>$query->whereHas('bagyty', function($q) use ($bagyt_name){
                $q->where('bagyt', 'like', "%$bagyt_name%");
            }))
            ->orderByDesc('idd')
            ->paginate($request->input('per_page', 20))
            ->appends($request->except('page'));
        $katysushylar = OlimpiadaKatysushy::get();
        return Inertia::render('Admin/OlimpiadaTizim/Index', [
            'o_katysushylar' => $o_katysushylar,
            'katysushylar' => $katysushylar,
        ]);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $bagyts = null;
        $classList = null;
        $o_katysushy_idd = $request->o_katysushy_idd;
        $o_bagyty_idd = $request->o_bagyty_idd;
        $o_tury_idd = $request->o_tury_idd;
        $katysushylar = OlimpiadaKatysushy::get();
        if($o_katysushy_idd)
            $bagyts = OlimpiadaBagyty::IsEnabled()
                ->where('type', 2)
                ->when($o_katysushy_idd, fn($q)=>$q->where('o_katysushy_idd', $o_katysushy_idd))
                ->get();
            if($o_bagyty_idd)
                $classList = OlimpiadaTury::IsEnabled()
                    ->when($o_katysushy_idd, fn($q)=>$q->where('o_katysushy_idd', $o_katysushy_idd))
                    ->when($o_bagyty_idd, fn($q)=>$q->where('o_bagyty_idd', $o_bagyty_idd))
                    ->get();
        return Inertia::render('Admin/OlimpiadaTizim/Create', [
            'katysushylar' => $katysushylar,
            'bagyts' => $bagyts,
            'classList' => $classList,
            'o_katysushy_idd' => $o_katysushy_idd,
            'o_bagyty_idd' => $o_bagyty_idd,
            'o_tury_idd' => $o_tury_idd,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(OlimpiadaKatysuSaveRequest $request)
    {
        $katysushy = new OlimpiadaKatysu();
        $now = Carbon::now();
        $katysushy_id = $request->o_katysushy_idd;
        $katysushy->o_katysushy_idd = $katysushy_id;
        $katysushy->o_turnir_idd = $now->format('n');
        $katysushy->o_bagyty_idd = $request->o_bagyty_idd;
        $katysushy->o_tury_idd = $request->o_tury_idd;
        $katysushy->o_mekeme = $request->o_mekeme;
        if($request->zhetekshi) {
            $zhetekshi = OlimpiadaZhetekshi::where('name', $request->zhetekshi)->first();
            if($zhetekshi) $katysushy->o_zhetekshi_id = $zhetekshi->id;
            else {
                $zhetekshi = OlimpiadaZhetekshi::create([
                    'user_id' => $request->user_id,
                    'o_bagyty_idd' => $request->o_bagyty_idd,
                    'o_turnir_idd' => $now->format('n'),
                    'name' => $request->o_zhetekshi_name,
                    'date' => $now
                ]);
                $katysushy->o_zhetekshi_id = $zhetekshi->id;
            }
        }
        $katysushy->o_katysushy_fio = $request->o_katysushy_name.' '.$request->o_katysushy_fname;
        $katysushy->o_katysushy_name = $request->o_katysushy_name;
        $katysushy->o_katysushy_fname = $request->o_katysushy_fname;
        $katysushy->user_id = $request->user_id;
        $katysushy->o_date = $now->format('Y-m-d');
        $katysushy->o_sany = 1;
        $katysushy->o_order_id = strtotime($now).''.rand(0,9);
        $katysushy->obwcode = $katysushy->o_order_id%1000 . $request->user_id%1000 . rand(10,99);
        $chec = OlimpiadaKatysu::where('obwcode', $katysushy->obwcode)->first();
        while($chec){
            $katysushy->obwcode = $katysushy->o_order_id%1000 . $request->user_id%1000 . rand(10,99);
            $chec = OlimpiadaKatysu::where('obwcode', $katysushy->obwcode)->first();
        }
        if($katysushy_id == 2 || $katysushy_id == 3) {
            $katysushy->price = 390;
        } else $katysushy->price = 490;
        if($request->success){
            $price = OlimpiadaBagyty::BAGYT_TYPE_PRICE[$katysushy->o_katysushy_idd];
            $tizim = new OlimpiadaTizim();
            $this->tizimService->save($tizim, $katysushy, $request);
            $tizim->update([
                'code' => $tizim->id . rand(10,99)
            ]);
        }
        $katysushy->success = $request->success ?? null;
        $katysushy->update_count = 3;
        $katysushy->o_oblis = 2;
        $katysushy->o_skidka = ($katysushy->price/10);
        $katysushy->oblysy = 0;
        $katysushy->save();
        return redirect()->route('admin.olimpiadaTizim.index')->withSuccess('Успешно добавлено');
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\OlimpiadaTizim  $olimpiadaTizim
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\OlimpiadaTizim  $olimpiadaTizim
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $classList = [];
        $o_katysu = OlimpiadaKatysu::with(['user','bagyty','o_tizim', 'o_zhetekshi'])->findOrFail($id);
        $katysushylar = OlimpiadaKatysushy::get();
        $bagyts = OlimpiadaBagyty::where('o_katysushy_idd', $o_katysu->o_katysushy_idd)->IsEnabled()->where('type', 2)->get();
        $classList = OlimpiadaTury::where('o_katysushy_idd', $o_katysu->o_katysushy_idd)->IsEnabled()->where('o_bagyty_idd', $o_katysu->o_bagyty_idd)->get();
        $o_katysu->o_zhetekshi_name = $o_katysu->o_zhetekshi ? $o_katysu->o_zhetekshi->name : null;
        return Inertia::render('Admin/OlimpiadaTizim/Edit', [
            'o_katysushy' => $o_katysu,
            'katysushylar' => $katysushylar,
            'bagyts' => $bagyts,
            'classList' => $classList,
        ]);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\OlimpiadaTizim  $olimpiadaTizim
     * @return \Illuminate\Http\Response
     */
    public function update(OlimpiadaTizimRequest $request, $id)
    {
        $user_id = $request->katysushy_user_id;
        $now = Carbon::now();
        $OlimpiadaKatysu = OlimpiadaKatysu::with(['o_tizim'])->findOrFail($id);
        $fio = $request->katysushy_name . ' ' . $request->katysushy_fname;
        $zh_name = $request->katysushy_o_zhetekshi_name;
        $result = $request->katysushy_result;
        $success = $request->katysushy_success;
        $zhetekshi = null;

        if($success) {
            if($OlimpiadaKatysu->o_tizim){
                $o_tizim = OlimpiadaTizim::findOrFail($OlimpiadaKatysu->o_tizim->id);
            } else {
                $o_tizim = new OlimpiadaTizim();
                $o_tizim->user_id = $user_id;
                $o_tizim->katysushy_nomeri = 1;
                $o_tizim->katysushy_name = $fio;
                $o_tizim->obwcode = $request->katysushy_obwcode;
                $o_tizim->ozgertu_sany = 3;
                $o_tizim->o_order_id = $OlimpiadaKatysu->o_order_id;
                $o_tizim->save();
                $o_tizim->update([
                    'code' => $o_tizim->id . rand(10,99)
                ]);
            }
        }

        if($zh_name) {
            $zhetekshi = OlimpiadaZhetekshi::where('name', $zh_name)->first();
            if(!$zhetekshi) {
                $zhetekshi = OlimpiadaZhetekshi::create([
                    'user_id' => $user_id,
                    'o_bagyty_idd' => $OlimpiadaKatysu->o_bagyty_idd,
                    'o_turnir_idd' => $now->format('n'),
                    'name' => $zh_name,
                    'date' => $now
                ]);
            }
            $OlimpiadaKatysu->update([
                'o_zhetekshi_id' => $zhetekshi->id
            ]);
        }
        if($result != null) {
            if($OlimpiadaKatysu->o_tizim) {
                OlimpiadaTizim::findOrFail($OlimpiadaKatysu->o_tizim->id)->update([
                    'result' => $result
                ]);
            }
        }
        
            
        $OlimpiadaKatysu->update([
            'o_katysushy_name' => $request->katysushy_name,
            'o_katysushy_fname' => $request->katysushy_fname,
            'o_katysushy_fio' => $fio,
            'o_zhetekshi_id' => $zhetekshi ? $zhetekshi->id : null,
            'o_mekeme' => $request->katysushy_o_mekeme,
            'obwcode' => $request->katysushy_obwcode,
            'success' => $success,
            'o_date' => $request->katysushy_o_date,
        ]);
        $o_tizim = OlimpiadaTizim::where('o_order_id', $OlimpiadaKatysu->o_order_id)->first();
        if($o_tizim)
            $o_tizim->update([
                'katysushy_name' => $fio,
                'obwcode' => $request->katysushy_obwcode,
            ]);
        return redirect()->back()->withSuccess('Успешно сохранено');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\OlimpiadaTizim  $olimpiadaTizim
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $olimpiadaTizim = OlimpiadaKatysu
        ::findOrFail($id);
        $o_katysu = olimpiadaTizim::where('o_order_id', $olimpiadaTizim->o_order_id)->delete();
        $olimpiadaTizim->delete();
        return redirect()->back()->withSuccess('Успешно удалено');

    }

    public function saveCategory($id, Request $request) {
        $o_katysu = OlimpiadaKatysu::findOrFail($id);
        $o_bagyty = OlimpiadaBagyty::where('o_katysushy_idd', $request->o_katysushy_idd)->IsEnabled()->where('type', 2)->first();
        $o_tury = OlimpiadaTury::where('o_bagyty_idd', $o_bagyty->idd)->IsEnabled()->first();
        $o_katysu->update([
            'o_katysushy_idd' => $request->o_katysushy_idd,
            'o_bagyty_idd' => $o_bagyty->idd,
            'o_tury_idd' => $o_tury->idd,
        ]);
        return redirect()->back();
    }

    public function saveBagyt($id, Request $request) {
        $o_katysu = OlimpiadaKatysu::findOrFail($id);
        $o_tury = OlimpiadaTury::where('o_katysushy_idd', $o_katysu->o_katysushy_idd)->where('o_bagyty_idd', $request->o_bagyty_idd)->first();
        $o_katysu->update([
            'o_bagyty_idd' => $request->o_bagyty_idd,
            'o_tury_idd' => $o_tury->idd,
        ]);
        return redirect()->back();
    }
    
    
    public function saveClass($id, Request $request) {
        OlimpiadaKatysu::findOrFail($id)->update([
            'o_tury_idd' => $request->o_tury_idd,
        ]);
        return redirect()->back();
    }

    public function getCertificate($id, Request $request){
        $o_katysu = OlimpiadaKatysu::with('o_tizim')->findOrFail($id);

        $diplom_type = $this->calculate($o_katysu->o_tizim['result']);
        if($diplom_type != 4)
            $certificateName = $this->certificateService->getDiplom($o_katysu->o_tizim['code'], $diplom_type);
        else $certificateName = $this->certificateService->getSertificate($o_katysu->o_tizim['code']);
        return response()->download(Storage::disk('public')->path(OlimpiadaTizim::CERTIFICATE_PATH)."/".$certificateName);
    }

    public function getAlgys($id){
        $o_katysu = OlimpiadaKatysu::findOrFail($id);
        $o_tizim = OlimpiadaTizim::where('o_order_id', $o_katysu->o_order_id)->first();
        $certificateName = $this->certificateService->getAlgys($o_tizim->o_order_id, 2, $o_tizim->code);
        return response()->download(Storage::disk('public')->path(OlimpiadaTizim::CERTIFICATE_PATH)."/".$certificateName);
    }

    public function zh_algys($id) {
        $o_katysu = OlimpiadaKatysu::findOrFail($id);
        $zhetekshi = OlimpiadaZhetekshi::with('o_katysu')->findOrFail($o_katysu->o_zhetekshi_id);
        $order = $zhetekshi->o_katysu->o_order_id;
        $o_tizim = OlimpiadaTizim::where('o_order_id', $order)->first();
        $certificateName = $this->certificateService->getAlgys($order, 1, $o_tizim->code, $zhetekshi);
        return response()->download(Storage::disk('public')->path(OlimpiadaTizim::CERTIFICATE_PATH)."/".$certificateName);
    }


    protected function calculate($durys) {
        if($durys >= 19) return 1;
        else if($durys >= 16) return 2;
        else if($durys >= 13) return 3;
        else return 4;
    }
}
