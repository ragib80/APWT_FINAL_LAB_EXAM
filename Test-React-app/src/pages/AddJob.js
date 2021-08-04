

import React, { Component } from 'react';
import axios from 'axios';

class AddJob extends Component {



    render() {
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
                            <form onSubmit={this.saveStudent}>
                                <div className="form-group mb-3">

                                    <table cellPadding="7px">
                                        <tr>
                                            <td >Company Name   </td>


                                            <td><input type="text" name="jobname" /></td>
                                        </tr>
                                        <tr>
                                            <td > Job Title   </td>


                                            <td><input type="text" name="title" /></td>
                                        </tr>
                                        <tr>
                                            <td > Job Location   </td>


                                            <td><input type="text" name="location" /></td>
                                        </tr>

                                        <tr>
                                            <td>Salary </td>

                                            <td><input type="text" name="salary" /></td>

                                        </tr>

                                        <tr>
                                            <td></td>

                                        </tr>

                                    </table>

                                </div>

                                <button type="submit" className="btn btn-outline-secondary">Save</button>
                            </form>


                        </div>
                    </div>

                </div>


            </div >


        );
    }





}

export default AddJob;
