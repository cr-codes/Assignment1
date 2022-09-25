import React from 'react';
import "./register.css";
import axios from "axios";

export const Register = () => {
    const form = document.querySelector("form");
    const handleSubmit = () => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            axios
                .post("http://162.240.56.117:3001/users/register_user", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        });
    };

    function Checkfiles() {
        var fup = document.getElementById('document');
        var fileName = fup.value;
        var ext = fileName.substring(fileName.lastIndexOf('.') + 1);
        if (ext == "pdf") {
            return true;
        }
        else {
            alert("Upload pdf files only");
            fup.focus();
            return false;
        }
    };
    return (
        <div className='register' >
            <form id='regForm' onSubmit={handleSubmit}>
                <h2 className="regHead">Fill details for Appoinment:</h2>

                <div className="perDetails">
                    <div className="inputBox">
                        <label htmlFor="f_name">First Name:</label>
                        <input type="text" name="f_name" id="f_name" />
                    </div>
                    <div className="inputBox">
                        <label htmlFor="l_name">Last Name:</label>
                        <input type="text" name="l_name" id="l_name" />
                    </div>
                </div>

                <div className="boxRow">
                    Gender:
                    <div className="boxRow">

                        <select name="gender" id="gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>

                        <label htmlFor="age">Age:</label>
                        <input className="ageBox" type="number" name="age" id="age" />
                    </div>
                </div>

                <div className="boxRow">
                    <span className="inputBox">
                        <label htmlFor="mob_no">Phone:</label>
                        <input type="tel" name="mob_no" id="mob_no" />
                    </span>

                    <span className="inputBox">
                        <label htmlFor="email_id">Email:</label>
                        <input type="email" name="email_id" id="email_id" />
                    </span>


                </div>

                <div className="boxRow">
                    <span className="inputBox">
                        <label htmlFor="quali">Qualification:</label>
                        <input type="text" name="quali" id="quali" />
                    </span>

                    <span className="inputBox">
                        <label htmlFor="speci">Specialization Type:</label>
                        <input type="text" name="speci" id="speci" />
                    </span>
                </div>

                <div className="boxRow">
                    <span className="inputBox">
                        <label htmlFor="designation">Designation:</label>
                        <input type="text" name="designation" id="designation" />
                    </span>

                    <span className="inputBox">
                        <label htmlFor="li_no">Licence Number:</label>
                        <input type="text" name="li_no" id="li_no" />
                    </span>
                </div>

                <div className="boxRow">
                    <span className="inputBox">
                        <label htmlFor="doctor_type">Doctor Type:</label>
                        <input type="text" name="doctor_type" id="doctor_type" />
                    </span>

                    <span className="inputBox">
                        <label htmlFor="adder">Address:</label>
                        <input type="text" name="addr" id="enterAdder" />
                    </span>
                </div>

                <div className="boxRow">
                    <span className="inputBox">

                        <label htmlFor="patient_charge'">In Patient Charge:</label>
                        <input type="number" name="patient_charge'" id="patient_charge'" />
                    </span>
                    <span className="inputBox">

                        <label htmlFor="consul_charge">Consulting Charges:</label>
                        <input type="text" name="consul_charge" id="consul_charge" />
                    </span>
                </div>

                <div className="boxRow">
                    <span className="inputBox">

                        <label htmlFor="document">Upload Document:</label>
                        <input type="file" name="document" id="document" onChange={Checkfiles} />
                    </span>
                    <span className="inputBox">

                        <label htmlFor="image">Upload Image:</label>
                        <input type="file" name="image" id="image" />
                    </span>
                </div>
                <button className='btn' type='submit'>Add Form</button>
            </form>

        </div>
    )
}
