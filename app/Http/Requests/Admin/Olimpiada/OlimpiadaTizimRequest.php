<?php

namespace App\Http\Requests\Admin\Olimpiada;

use Illuminate\Foundation\Http\FormRequest;

class OlimpiadaTizimRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'katysushy_name' => 'required',
            'katysushy_fname' => 'required',
            'katysushy_obwcode' => 'required',
        ];
    }
}
