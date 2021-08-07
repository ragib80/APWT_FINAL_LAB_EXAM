<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Employee;

class LoginController extends Controller
{
    function login(Request $req)
    {
        $emp = Employee::where("username",$req->username)
        ->where("password",$req->password)->get();
       

        if(count($emp)>0) {
        return response()->json($emp);
        }
        return response()->json([
            'status'=>200,
            'employees'=>$employees,
 
         ]);
    } 
}
