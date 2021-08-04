import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function EditEmployeer() {
    const { id: eid } = useParams();
    const [msg, setMsg] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [companyname, setCompanyname] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    const handleCompanynameChange = (e) => {
        setCompanyname(e.target.value)
    }
    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlPasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleUpdate = () => {
        const data = {
            name: name,
            username: username,
            companyname: companyname,
            phone: phone,
            email: email,
            password: password

        }
        axios.put(`http://127.0.0.1:8000/api/edit-employer/update/${eid}`, data)
            .then(response => {
                setMsg("updated ")

            }).catch((err) => {
                setMsg("error")
            })

    }

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/employees/info/${eid}`)
            .then(response => {
                setName(response.data.name)
                setUsername(response.data.username)
                setCompanyname(response.data.companyname)
                setPhone(response.data.phone)
                setEmail(response.data.email)
                setPassword(response.data.password)

            });
    }, [])

    return (
        <>
            <h1>Edit Employee</h1>
            <h3>{msg}</h3>
            <form >
                <table>
                    <tr>
                        <td>  <label htmlFor="name" className="form-label">Name</label></td>
                        <td>  <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="name"
                            value={name}
                            onChange={handleNameChange}
                            placeholder="Enter Name"

                        /></td>
                    </tr>
                    <tr>
                        <td>   <label htmlFor="name" className="form-label"> Username</label></td>
                        <td>  <input
                            type="text"
                            name="username"
                            className="form-control"
                            id="username"
                            value={username}
                            onChange={handleUsernameChange}
                            placeholder="Enter Username"

                        /></td>
                    </tr>
                    <tr>
                        <td>   <label htmlFor="name" className="form-label">Company Name</label></td>
                        <td>  <input
                            type="text"
                            name="companyname"
                            className="form-control"
                            id="companyname"
                            value={companyname}
                            onChange={handleCompanynameChange}
                            placeholder="Enter Company Name"

                        /></td>
                    </tr>

                    <tr>
                        <td> <label htmlFor="name" className="form-label"> Phone</label></td>
                        <td> <input
                            type="text"
                            name="phone"
                            className="form-control"
                            id="phone"
                            value={phone}
                            onChange={handlePhoneChange}
                            placeholder="Enter phone no."

                        /></td>
                    </tr>

                    <tr>
                        <td> <label htmlFor="name" className="form-label"> email</label></td>
                        <td> <input
                            type="text"
                            name="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Enter Email"

                        /></td>
                    </tr>
                    <tr>
                        <td> <label htmlFor="name" className="form-label"> Password</label></td>
                        <td> <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={handlPasswordChange}
                            placeholder="Enter password"

                        /></td>
                    </tr>
                    <td></td>
                    <button type="button" onClick={handleUpdate} className="btn btn-outline-secondary">Update</button>
                </table>

            </form>

        </>
    )



}