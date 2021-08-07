<?php
use App\Http\Controllers\API\JobController;
use App\Http\Controllers\API\LoginController;
use App\Http\Controllers\API\EmployeeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::post('/add-employer',[EmployeeController::class, 'store']);
Route::get('employees',[EmployeeController::class, 'index']);

Route::delete('delete-employee/{id}',[EmployeeController::class, 'distroy']);
Route::put("/edit-employer/update/{id}",[EmployeeController::class,'update']);
Route::get('/employees/info/{id}',[EmployeeController::class, 'details']);
Route::get("employee/search/{keyword}",[EmployeeController::class,'searchEmployee']);

Route::post("/login",[LoginController::class,'login']);

Route::get('/home',[JobController::class,'index']);
Route::post('/add-job',[JobController::class, 'store']);
Route::put("/edit-job/update/{id}",[JobController::class,'update']);
Route::get('/job/info/{id}',[JobController::class, 'details']);
Route::delete('delete-job/{id}',[JobController::class, 'distroy']);



Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
 