import React from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function validateLogin() {
        if (username === '') {
            alert('Username Field is empty')
        }
        else if (password === '') {
            alert('Password Field is empty')
        }
        else if (username === 'admin' && password === 'admin' || username === 'ragib@admin' && password === 'admin') {
            history.push("/admin");
        }
        let data = { username, password };
        axios.post("http://127.0.0.1:8000/api/login", data)
            .then(response => {
                console.log(data);
                history.push("/home");
            });
    }

    return (

        <div>
            <div className="container">
                <div className="className='row justify-content-center">
                    <div className="col-md-12">
                        <div className="card">
                            <h4> Login

                            </h4>

                        </div>
                    </div>

                    <div className="card-body " >

                        <div className="form-group mb-3">

                            <table cellPadding="7px">

                                <tr>
                                    <td>User Name </td>

                                    <td><input type="text" name="username" onChange={(e) => setUsername(e.target.value)} /></td>

                                </tr>

                                <tr>
                                    <td>Password </td>

                                    <td><input type="password" name="password" onChange={(e) => setPassword(e.target.value)} /></td>

                                </tr>
                                <tr>

                                </tr>
                                <td></td><br />
                                <button type="submit" onClick={validateLogin} className="btn btn-outline-secondary">Save</button>
                            </table>

                        </div>

                    </div>
                </div>

            </div >


        </div >


    );






}

export default Login;
