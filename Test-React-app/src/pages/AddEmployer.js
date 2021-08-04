

import React, { Component } from 'react';
import axios from 'axios';

class AddEmployer extends Component {

    state = {
        name: '',
        username: '',
        companyname: '',
        email: '',
        phone: '',
        password: '',
    }
    handleInput = (e) => {

        this.setState({
            [e.target.name]: e.target.value

        });
    }

    saveEmployee = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:8000/api/add-employer', this.state);
        if (res.data.status === 200) {
            console.log(res.data.message);
            this.setState({
                name: '',
                username: '',
                companyname: '',
                email: '',
                phone: '',
                password: '',
            });
        }
    }

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
                            <form onSubmit={this.saveEmployee}>
                                <div className="form-group mb-3">

                                    <table cellPadding="7px">
                                        <tr>
                                            <td > Name   </td>


                                            <td><input type="text" name="name" onChange={this.handleInput} value={this.state.name} /></td>
                                        </tr>
                                        <tr>
                                            <td > Username   </td>


                                            <td><input type="text" name="username" onChange={this.handleInput} value={this.state.username} /></td>
                                        </tr>
                                        <tr>
                                            <td > Company Name   </td>


                                            <td><input type="text" name="companyname" onChange={this.handleInput} value={this.state.companyname} /></td>
                                        </tr>

                                        <tr>
                                            <td>Email </td>

                                            <td><input type="text" name="email" onChange={this.handleInput} value={this.state.email} /></td>

                                        </tr>
                                        <tr>
                                            <td>Phone </td>

                                            <td><input type="text" name="phone" onChange={this.handleInput} value={this.state.phone} /></td>

                                        </tr>
                                        <tr>
                                            <td>Password </td>

                                            <td><input type="password" name="password" name="password" onChange={this.handleInput} value={this.state.password} /></td>

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
