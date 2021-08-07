

import React from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react';

const AddJob = () => {

    const [c_name, setCName] = useState("");
    const [job_title, setJobTitle] = useState("");
    const [job_location, setJobLocation] = useState("");
    const [salary, setSalary] = useState("");
    const history = useHistory();

    async function saveJob() {

        let job = { c_name, job_title, job_location, salary };
        const res = await axios.post('http://localhost:8000/api/add-job', job);


        if (res.data.status === 200) {
            console.log(res.data.message);
        }
        history.push('/home')


    }
    return (

        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <h4>Create Job

                            </h4>

                        </div>
                    </div>

                    <div className="card-body ">

                        <div className="form-group mb-3">

                            <table cellPadding="7px">
                                <tr>
                                    <td >Company Name   </td>


                                    <td><input type="text" name="c_name" onChange={(e) => setCName(e.target.value)} /></td>
                                </tr>
                                <tr>
                                    <td > Job Title   </td>


                                    <td><input type="text" name="job_title" onChange={(e) => setJobTitle(e.target.value)} /></td>
                                </tr>
                                <tr>
                                    <td > Job Location   </td>


                                    <td><input type="text" name="job_location" onChange={(e) => setJobLocation(e.target.value)} /></td>
                                </tr>

                                <tr>
                                    <td>Salary </td>

                                    <td><input type="text" name="salary" onChange={(e) => setSalary(e.target.value)} /></td>

                                </tr>

                                <tr>
                                    <td></td>

                                </tr>

                            </table>

                        </div>

                        <button type="submit" onClick={saveJob} className="btn btn-outline-secondary">Save</button>



                    </div>
                </div>

            </div>


        </div >


    );






}

export default AddJob;
