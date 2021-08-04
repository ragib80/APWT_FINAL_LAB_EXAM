import axios from 'axios';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class Admin extends Component {

    render() {

        return (
            <div className="container" >
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <h4>Admin Index

                            </h4>

                        </div>
                        <div className="card-body">
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Username</th>
                                        <th>Company Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Eidt</th>
                                        <th>Delete</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr >
                                        <td>abc</td>
                                        <td>xyz</td>
                                        <td>it inter national</td>
                                        <td>abc@gmail.com</td>
                                        <td>02554545</td>
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
        )

    }
}
export default Admin;