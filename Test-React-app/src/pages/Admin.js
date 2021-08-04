import axios from 'axios';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class Admin extends Component {
    state = {
        employees: [],
        loading: true,
    }

    async componentDidMount() {
        const res = await axios.get('http://127.0.0.1:8000/api/employees');
        //console.log(res) ;   
        if (res.data.status === 200) {
            this.setState({
                employees: res.data.employees,
                loading: false,
            });

        }
    }
    deleteStudent = async (e, id) => {
        console.log(id);
        const clicked = e.currentTarget;
        clicked.innerText = "deleting..";
        const res = await axios.delete(`http://localhost:8000/api/delete-employee/${id}`);

        if (res.data.status === 200) {
            clicked.closest("tr").remove();
            console.log(res.data.message);
        }
    }

    render() {
        var employee_table = "";

        if (this.state.loading) {
            employee_table = <tr>
                <td colSpan="6">
                    <h2>loadong....</h2>
                </td>

            </tr>

        }
        else {
            employee_table =
                this.state.employees.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.companyname}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>
                                <Link to={`edit-employer/update/${item.id}`} className="btn btn-success btn sm">Edit</Link>
                            </td>
                            <td>
                                <button type="button" onClick={(e) => this.deleteStudent(e, item.id)} className='btn btn-danger btn-sm'>Delete</button>
                            </td>

                        </tr>
                    );

                });
        }

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
                                    {employee_table}
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