<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\CardOrder;
use Illuminate\Http\Request;

class RefitController extends Controller
{
    public function create($id)
    {
        CardOrder::create([
            'card_id' => $id,
            'datetime' => now()
        ]);
        return response(200);
    }
}
