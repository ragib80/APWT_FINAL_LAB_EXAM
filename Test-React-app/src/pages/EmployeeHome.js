import React from 'react'

import { useHistory, useParams } from "react-router-dom";

const EmployeeHome = () => {


    const btnstyle = { margin: '8px 0' }


    let history = useHistory();



    const logout = () => {
        localStorage.removeItem("users")
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
                            <h4>Employee Index

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
                                    <tr >
                                        <td>abc</td>
                                        <td>xyz</td>
                                        <td>dhaka</td>
                                        <td>10000</td>

                                        <td>
                                            <button type="button" className="btn btn-success btn sm">Edit</button>
                                        </td>
                                        <td>
                                            <button type="button" className='btn btn-danger btn-sm'>Delete</button>
                                        </td>

                                    </tr>
                                </tbody>

                            </table>

                        </div>

                    </div>
                </div>

            </div>


        </div>
    )
}

export default EmployeeHome