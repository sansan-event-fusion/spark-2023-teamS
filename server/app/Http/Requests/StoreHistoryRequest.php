<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Log;

class StoreHistoryRequest extends FormRequest
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
        Log::info('Request data:', $this->all());

        return [
            'buyer_id' => 'required',
            'agent_id' => 'required',
            'delivery_date' => 'required',
            'delivery_time' => 'required',
            'receiving_address' => 'required'
        ];
    }
}
