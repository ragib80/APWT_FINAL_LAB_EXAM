import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function EditJobs() {
    const { id: eid } = useParams();
    const [msg, setMsg] = useState('');
    const [c_name, setCName] = useState("");
    const [job_title, setJobTitle] = useState("");
    const [job_location, setJobLocation] = useState("");
    const [salary, setSalary] = useState("");

    const handleCNameChange = (e) => {
        setCName(e.target.value)
    }

    const handleJobTitleChange = (e) => {
        setJobTitle(e.target.value)
    }

    const handleJobLocationChange = (e) => {
        setJobLocation(e.target.value)
    }
    const handleSalaryChange = (e) => {
        setSalary(e.target.value)
    }


    const handleUpdate = () => {
        const data = {
            c_name: c_name,
            job_title: job_title,
            job_location: job_location,
            salary: salary


        }
        axios.put(`http://127.0.0.1:8000/api/edit-job/update/${eid}`, data)
            .then(response => {
                setMsg("updated ")

            }).catch((err) => {
                setMsg("error")
            })

    }

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/job/info/${eid}`)
            .then(response => {
                setCName(response.data.c_name)
                setJobTitle(response.data.job_title)
                setJobLocation(response.data.job_location)
                setSalary(response.data.salary)

            });
    }, [])

    return (
        <>
            <h1>Edit Job Details</h1>
            <h3>{msg}</h3>
            <form >
                <table>
                    <tr>
                        <td>  <label htmlFor="name" className="form-label">Name</label></td>
                        <td>  <input
                            type="text"
                            name="c_name"
                            className="form-control"
                            id="c_name"
                            value={c_name}
                            onChange={handleCNameChange}
                            placeholder="Enter Company Name"

                        /></td>
                    </tr>
                    <tr>
                        <td>   <label htmlFor="name" className="form-label"> Job Title</label></td>
                        <td>  <input
                            type="text"
                            name="job_title"
                            className="form-control"
                            id="job_title"
                            value={job_title}
                            onChange={handleJobTitleChange}
                            placeholder="Enter job title"

                        /></td>
                    </tr>
                    <tr>
                        <td>   <label htmlFor="name" className="form-label">job_location</label></td>
                        <td>  <input
                            type="text"
                            name="job_location"
                            className="form-control"
                            id="job_location"
                            value={job_location}
                            onChange={handleJobLocationChange}
                            placeholder="Enter job location"

                        /></td>
                    </tr>

                    <tr>
                        <td> <label htmlFor="name" className="form-label"> salary</label></td>
                        <td> <input
                            type="text"
                            name="salary"
                            className="form-control"
                            id="salary"
                            value={salary}
                            onChange={handleSalaryChange}
                            placeholder="Enter salary"

                        /></td>
                    </tr>


                    <td></td>
                    <button type="button" onClick={handleUpdate} className="btn btn-outline-secondary">Update</button>
                </table>

            </form>

        </>
    )



}