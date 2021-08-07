import { Link, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react';

import axios from 'axios';

const SearchEmp = () => {

    const [EmpSch, setSearchEmp] = useState('');
    const [list, setList] = useState([]);



    function search() {
        axios.get("http://127.0.0.1:8000/api/employee/search/" + EmpSch)
            .then(response => {
                const result = response.data;
                setList(result);

            });
    }

    function deleteEmployee(e, id) {
        console.log(id);
        const clicked = e.currentTarget;
        clicked.innerText = "deleting..";
        const res = axios.delete(`http://localhost:8000/api/delete-employee/${id}`);

        if (res.data !== null) {
            clicked.closest("tr").remove();

        }
    }

    return (
        <>
            <center className='mt-5'><h1>Search Employee</h1></center>
            <div className='row justify-content-center'>
                <div className='col-5 mt-5'>
                    <input type='text' name='search' className='form-control' placeholder='Search by name or email' onChange={(e) => { setSearchEmp(e.target.value) }}></input>
                    <center><button onClick={search} className='btn btn-primary mt-2'>Search</button></center>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-5 mt-5'>
                    <center>
                        <table className="table table-bordered table-striped" cellPadding="7px">
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
                                {
                                    list.map((row) =>
                                        <tr key={row.id}>
                                            <td>{row.name}</td>
                                            <td>{row.username}</td>
                                            <td>{row.companyname}</td>
                                            <td>{row.email}</td>
                                            <td>{row.phone}</td>
                                            <td>
                                                <Link to={`/edit-employer/update/${row.id}`} className="btn btn-success btn sm">Edit</Link> </td>
                                            <td> <button type="button" onClick={(e) => deleteEmployee(e, row.id)} className='btn btn-danger btn-sm'>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                        <Link to='/admin' className='btn btn-warning'>Go Index</Link>
                    </center>
                </div>
            </div>
        </>
    );
}

export default SearchEmp;