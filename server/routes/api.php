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

// Firebaseによる認証
Route::middleware(['firebase'])->group(function (){

    //購入者
    Route::post('/sign-up/buyer', [BuyerController::class, 'signUp']);
    Route::get('/sign-in/buyer', [BuyerController::class, 'signIn']);
    //代理人
    Route::post('/sign-up/agent', [AgentController::class, 'signUp']);
    Route::get('/sign-in/agent', [AgentController::class, 'signIn']);
});

// 購入者関連API
// Route::apiResource('/user/buyer', BuyerController::class);

// 代理人関連API
// Route::apiResource('/user/agent', AgentController::class);

// 配送情報関連API
Route::apiResource('/delivery/buyers', HistoryController::class);
Route::apiResource('/histories', HistoryController::class);

// 代理人シフト関連API
Route::apiResource('/shifts/agents', ShiftController::class);
