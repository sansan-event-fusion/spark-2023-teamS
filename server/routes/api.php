<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\BuyerController;
use App\Http\Controllers\Api\ShiftController;
use App\Http\Controllers\Api\AgentController;
use App\Http\Controllers\Api\HistoryController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('/user/buyer', BuyerController::class);
Route::apiResource('/user/agent', AgentController::class);
Route::apiResource('/delivery/buyers', HistoryController::class);
Route::apiResource('/shifts/agents', ShiftController::class);
Route::apiResource('/user/agent', AgentController::class);
