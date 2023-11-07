<?php

namespace App\Http\Requests\Admin\Olimpiada;

use Illuminate\Foundation\Http\FormRequest;

class OlimpiadaKatysuSaveRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'o_katysushy_idd' => 'required',
            'o_bagyty_idd' => 'required',
            'o_tury_idd' => 'required',
            'user_id' => 'required',
            'o_katysushy_name' => 'required',
            'o_katysushy_fname' => 'required',
        ];
    }
}
