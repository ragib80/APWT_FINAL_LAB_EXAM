<?php
use App\Http\Controllers\API\StudentController;
use App\Http\Controllers\API\EmployeeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::post('/add-employer',[EmployeeController::class, 'store']);
Route::get('employees',[EmployeeController::class, 'index']);



Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
 