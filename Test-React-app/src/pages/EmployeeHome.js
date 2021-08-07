import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';

import { useHistory, useParams } from "react-router-dom";

const EmployeeHome = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/home')
            .then(response => {
                setData(response.data);

            });


    }, [])

    const btnstyle = { margin: '8px 0' }


    let history = useHistory();

    function deleteJob(e, id) {
        console.log(id);
        const clicked = e.currentTarget;
        clicked.innerText = "deleting..";
        const res = axios.delete(`http://localhost:8000/api/delete-job/${id}`);

        if (res.data !== null) {
            clicked.closest("tr").remove();

        }
    }

    const logout = () => {

        history.push("/");
    }

    return (
        <div className="">

            <div style={{ float: "right", marginRight: "50px" }}>

                <button type='submit' onClick={logout} color='primary' justifyContent="flex-end"
                    className="btn btn-outline-danger" variant="contained" style={btnstyle} >Logout</button>

            </div>

            <div className="container" >
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <h4>Job Index

                            </h4>

                        </div>
                        <div className="card-body">
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>

                                        <th>Company Name</th>
                                        <th>Job Title</th>
                                        <th>Job Location</th>
                                        <th>Salary</th>
                                        <th>Eidt</th>
                                        <th>Delete</th>

                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        data.map(row => {
                                            return (
                                                <tr key={row.id}>
                                                    <td>{row.c_name}</td>
                                                    <td>{row.job_title}</td>
                                                    <td>{row.job_location}</td>
                                                    <td>{row.salary}</td>
                                                    <td><Link to={`edit-job/update/${row.id}`} className="btn btn-success btn sm">Edit</Link> </td>
                                                    <td> <button type="button" onClick={(e) => deleteJob(e, row.id)} className='btn btn-danger btn-sm'>Delete</button>
                                                    </td>

                                                </tr>

                                            );
                                        })
                                    }





                                </tbody>

                            </table>

                        </div>

                    </div>
                </div>

            </div>


        </div >
    )
}

export default EmployeeHome;