<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    use HasFactory; 
    protected $table='jobs';
    protected $fillable=[
    'c_name',
    'job_title',
    'job_location',
    'salary',
    ];
}
