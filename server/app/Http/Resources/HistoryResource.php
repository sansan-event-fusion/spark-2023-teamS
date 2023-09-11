<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class HistoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'buyer_id' => $this->buyer_id,
            'agent_id' => $this->agent_id,
            'status' => $this->status,
            'delivery_date' => $this->delivery_date,
            'delivery_time' => $this->delivery_time,
            'receiving_address' => $this->receiving_address
        ];
    }
}
