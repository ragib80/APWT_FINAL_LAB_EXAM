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
        $employee = Employee::find($id);
        $employee->delete();
        return response()->json([
            'status'=>200,
            'message'=>"Deleted  Succesfully",
 
         ]);
    }

    public function SearchEmployee(Request $request,$keyowrd){

        $data=Employee::where('name', 'like', '%' . $keyowrd . '%')
            ->orWhere('email', 'like', '%' . $keyowrd . '%')
            ->get();
            
        if($data){
            return response()->json($data, 200);
        }else{
            return response()->json([
                'code'=>401, 
                'message' => 'No Product Found!']);
        }
    }

}
