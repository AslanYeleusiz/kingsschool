<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\PaidHistory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PaidController extends Controller
{
    public function index(Request $request)
    {
        $studFio = $request->studFio;
        $prepodFio = $request->prepodFio;
        $user = auth()->guard('web')->user();
        $query = PaidHistory::with(['paidStudent.user:id,avatar,fio,tel_num,filial_id', 'paidStudent.teacher:id,fio']);

        $query->when($user->role_id == 2, function ($query) use ($user) {
            return $query->whereHas('paidStudent.user', fn ($q) => $q->where('filial_id', $user->filial_id));
        })
            ->when($studFio, fn ($q) => $q->whereHas('paidStudent.user', fn ($q) => $q->where('fio', 'like', "%$studFio%")))
            ->when($prepodFio, fn ($q) => $q->whereHas('paidStudent.teacher', fn ($q) => $q->where('fio', 'like', "%$prepodFio%")));
        $orders = $query->latest()->paginate($request->input('per_page', 20))
            ->appends($request->except('page'));

        return Inertia::render('Admin/PaidHistories/Index', [
            'orders' => $orders,
        ]);
    }

    public function paid($id)
    {
        PaidHistory::find($id)->update([
            'status' => 2,
        ]);

        return redirect()->back();
    }

    public function destroy($id)
    {
        PaidHistory::findOrFail($id)->delete();
        return redirect()->back()->withSuccess('Успешно удалено');
    }
}
