<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Employee;

class EmployeeController extends Controller
{
    public function store(Request $request){
        $employee = new Employee;
        $employee->name = $request->input('name');
        $employee->username = $request->input('username');
        $employee->companyname = $request->input('companyname');
        $employee->email = $request->input('email');
        $employee->phone = $request->input('phone');
        $employee->password = $request->input('password');
        $employee->save(); 

        return response()->json([
           'status'=>200,
           'message'=>"Added Succesfully",

        ]);
    }

    function update(Request $req,$id)
    {
        $employee = Employee::find($id);
        $employee->name = $req->name;
        $employee->username = $req->username;
        $employee->companyname = $req->companyname;
        $employee->email = $req->email;
        $employee->phone = $req->phone;
        $employee->password=$req->password;
         $employee->save();
        return response()->json([
            'status'=>200,
            'message'=>"Added Succesfully",
 
         ]);
    }
    public function details($id)
    {
        
        $deta = Employee::find($id);
        return $deta;
    }

    public function index(){
        $employees=Employee::all();
        return response()->json([
            'status'=>200,
            'employees'=>$employees,
 
         ]);

    }


    public function distroy($id){
        $students = Employee::find($id);
        $students->delete();
        return response()->json([
            'status'=>200,
            'message'=>"Deleted  Succesfully",
 
         ]);
    }

}
