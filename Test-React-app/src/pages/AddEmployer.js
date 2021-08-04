

import React, { Component } from 'react';
import axios from 'axios';

class AddEmployer extends Component {



    render() {
        return (

            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <h4>Employee Add

                                </h4>

                            </div>
                        </div>

                        <div className="card-body ">
                            <form onSubmit={this.saveStudent}>
                                <div className="form-group mb-3">

                                    <table cellPadding="7px">
                                        <tr>
                                            <td > Name   </td>


                                            <td><input type="text" name="name" /></td>
                                        </tr>
                                        <tr>
                                            <td > Username   </td>


                                            <td><input type="text" name="username" /></td>
                                        </tr>
                                        <tr>
                                            <td > Company Name   </td>


                                            <td><input type="text" name="username" /></td>
                                        </tr>

                                        <tr>
                                            <td>Email </td>

                                            <td><input type="text" name="companyname" /></td>

                                        </tr>
                                        <tr>
                                            <td>Phone </td>

                                            <td><input type="text" name="phone" /></td>

                                        </tr>
                                        <tr>
                                            <td>Password </td>

                                            <td><input type="password" name="password" /></td>

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

export default AddEmployer;
