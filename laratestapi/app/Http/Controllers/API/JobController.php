<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Job;

class JobController extends Controller
{
    public function index(){
        $data=Job::all();
        return $data;
 
        

    }

    public function store(Request $request){
        $job = new Job;
        $job->c_name = $request->input('c_name');
        $job->job_title = $request->input('job_title');
        $job->job_location = $request->input('job_location');
        $job->salary = $request->input('salary');
       
        $job->save(); 

        return response()->json([
           'status'=>200,
           'message'=>"Added Succesfully",

        ]);
    }

    function update(Request $req,$id)
    {
        $job = Job::find($id);
        $job->c_name = $req->c_name;
        $job->job_title = $req->job_title;
        $job->job_location = $req->job_location;
        $job->salary = $req->salary;
      
         $job->save();
        return response()->json([
            'status'=>200,
            'message'=>"Updated Succesfully",
 
         ]);
    }
    public function details($id)
    {
        
        $deta = Job::find($id);
        return $deta;
    }
    public function distroy($id){
        $job = Job::find($id);
        $job->delete();
        return response()->json([
            'status'=>200,
            'message'=>"Deleted  Succesfully",
 
         ]);
    }

}
