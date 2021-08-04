

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

class Login extends Component {


    render() {
        return (

            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <h4>Employee Login

                                </h4>

                            </div>
                        </div>

                        <div className="card-body ">
                            <form onSubmit={this.saveStudent}>
                                <div className="form-group mb-3">

                                    <table cellPadding="7px">


                                        <tr>
                                            <td>Email </td>

                                            <td><input type="text" name="email" o /></td>

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

export default Login;
