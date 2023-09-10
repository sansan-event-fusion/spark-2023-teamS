<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBuyerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required',
            'email' => 'required',
            'postal_code' => 'required',
            'prefecture' => 'required',
            'city' => 'required',
            'address1' => 'required',
            'address2' => 'nullable',
            'phone_number' => 'required',
            'firebase_uid' => 'required'
        ];
    }
}
