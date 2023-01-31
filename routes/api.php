<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\userController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('user')->group(function () {
    Route::get('/',[ userController::class, 'getAll']);
    Route::post('/',[ userController::class, 'create']);
    Route::delete('/{id}',[ userController::class, 'delete']);
    Route::get('/{id}',[ userController::class, 'get']);
    Route::put('/{id}',[ userController::class, 'update']);
});
