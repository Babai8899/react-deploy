// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react'
import SimpleAlert from '../../shared/SimpleAltert.jsx';
import { useNavigate } from 'react-router-dom';
import axios, { HttpStatusCode } from 'axios';

function Add() {
    const [alert, setAlert] = useState({
        type: 'info',
        msg: 'Welcome to InfyTrip'
    });

    const showAlert = (type, msg) => {
        setAlert({ type: type, msg: msg });
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }

    const navigate = useNavigate();

    const [user, setUser] = useState({
        userId: "",
        userName: "",
        password: "",
        confirmPassword: "",
        email: "",
        dob: "",
        phone: "",
        gender: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        pincode: ""
    })

    const {
        userId,
        userName,
        password,
        confirmPassword,
        email,
        dob,
        phone,
        gender,
        addressLine1,
        addressLine2,
        city,
        state,
        pincode
    } = user

    const onInputChange = (e) => {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }


    const resetInputs = () => {
        setUser({
            userId: "",
            userName: "",
            password: "",
            confirmPassword: "",
            email: "",
            phone: "",
            dob: "",
            gender: "Gender",
            addressLine1: "",
            addressLine2: "",
            city: "",
            state: "",
            pincode: ""
        })
        setAlert({ type: 'info', msg: 'Welcome to InfyTrip' });
    }

    const requestBody = {
        userId: user.userId,
        userName: user.userName,
        password: user.password,
        confirmPassword: user.confirmPassword,
        email: user.email,
        phone: user.phone,
        dob: user.dob,
        gender: user.gender.toLowerCase(),
        address: {
            addressLine1: user.addressLine1,
            addressLine2: user.addressLine2,
            city: user.city,
            state: user.state,
            pincode: user.pincode
        }
    }


    const data = requestBody;

    console.log(data);

    const URL = 'https://demodummy-7nz3bh2w.b4a.run/user/';

    const onSubmit = async (e) => {
        e.preventDefault();
        if (user.password !== user.confirmPassword) {
            setAlert({ type: 'error', msg: 'Password does not match' });
            error = true;
            return;
        }
        axios.post(URL, data).then((response) => {
            const { data } = response;
            const msg = data.message;
            showAlert('success', msg);
            setTimeout(() => {
                navigate('/react-deploy/login');
                window.location.reload();
            }, 1200);
            window.localStorage.setItem('isLoggedIn', false);
        }).catch((error) => {
            const { data } = error.response;
            const msg = data.message;
            showAlert('error', msg);
        })

    }

    return (
        <div>
            <div>
                <div className="card mx-auto w-10/12 h-96 lg:h-11/12 border-base-300 border-4 py-2 my-2 overflow-y-scroll">
                    <div className='flow-root mx-auto lg:my-1 w-5/6'>
                        <label className="input input-bordered flex items-center w-64 mx-auto lg:ml-10 lg:float-left text-sm">
                            <input type="text" className="grow" placeholder="User Id" name='userId' value={userId} onChange={(e) => onInputChange(e)} />
                        </label>
                        <label className="input input-bordered flex items-center w-64 mx-auto lg:mx-2.5 lg:float-left text-sm">
                            <input type="email" placeholder='Name' className="grow" name='userName' value={userName} onChange={(e) => onInputChange(e)} />
                        </label>
                        <label className="input input-bordered flex items-center w-64 mx-auto lg:float lg:mr-10 lg:float-right text-sm">
                            <input type="contact" placeholder='Contact No' className="grow" name='phone' value={phone} onChange={(e) => onInputChange(e)} />
                        </label>
                    </div>
                    <div className='flow-root mx-auto lg:my-1 w-5/6'>
                        <label className="input input-bordered flex items-center w-64 mx-auto lg:ml-10 lg:float-left text-sm">
                            <input type="contact" placeholder='Email' className="grow" name='email' value={email} onChange={(e) => onInputChange(e)} />
                        </label>
                        <label className="input input-bordered flex items-center w-64 mx-auto lg:mx-2.5 lg:float-left text-sm">
                            DOB:&nbsp;
                            <input type="date" className="grow" name='dob' value={dob} onChange={(e) => onInputChange(e)} />
                        </label>
                        <label>
                            <select className="select input input-bordered flex items-center mx-auto w-64 lg:mr-10 lg:float-right text-sm" name='gender' value={gender} onChange={(e) => onInputChange(e)}>
                                <option disabled selected>Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </label>
                    </div>
                    <div className='flow-root mx-auto lg:my-1 w-5/6'>
                        <label className="input input-bordered flex items-center w-64 lg:w-96 mx-auto lg:ml-10 lg:float-left text-sm">
                            <input type="text" className="grow" placeholder="Address Line 1" name='addressLine1' value={addressLine1} onChange={(e) => onInputChange(e)} />
                        </label>
                        <label className="input input-bordered flex items-center w-64 lg:w-96 mx-auto lg:mr-10 lg:float-right text-sm">
                            <input type="text" className="grow" placeholder="Address Line 2" name='addressLine2' value={addressLine2} onChange={(e) => onInputChange(e)} />
                        </label>
                    </div>
                    <div className='flow-root mx-auto lg:my-1 w-5/6'>
                        <label className="input input-bordered flex items-center w-64 lg:ml-10 mx-auto lg:float-left text-sm">
                            <input type="text" placeholder='City' className="grow" name='city' value={city} onChange={(e) => onInputChange(e)} />
                        </label>
                        <label className="input input-bordered flex items-center w-64 lg:mx-2.5 mx-auto lg:float-left text-sm">
                            <input type="text" placeholder='State' className="grow" name='state' value={state} onChange={(e) => onInputChange(e)} />
                        </label>
                        <label className="input input-bordered flex items-center w-64 lg:mr-10 mx-auto lg:float-right text-sm">
                            <input type="text" className="grow" placeholder="Pincode" name='pincode' value={pincode} onChange={(e) => onInputChange(e)} />
                        </label>
                    </div>
                    <div className='flow-root mx-auto lg:my-1 w-5/6'>
                        <label className="input input-bordered flex items-center lg:ml-10 w-64 mx-auto lg:w-96 lg:float-left text-sm">
                            <input type="password" placeholder='Password' className="grow" name='password' value={password} onChange={(e) => onInputChange(e)} />
                        </label>
                        <label className="input input-bordered flex items-center lg:mr-10 lg:w-96 mx-auto w-64 lg:float-right text-sm">
                            <input type="password" placeholder='Confirm Password' className="grow" name='confirmPassword' value={confirmPassword} onChange={(e) => onInputChange(e)} />
                        </label>
                    </div>
                    <div className='mx-auto'>
                        <button className='bg-base-300 h-10 rounded-xl w-20 py-1 px-2 hover:bg-base-200 hover:w-24 hover:transition-all my-3 mx-3' onClick={(e) => resetInputs(e)}>Reset</button>
                        <button className='bg-base-300 h-10 rounded-xl w-20 py-1 px-2 hover:bg-base-200 hover:w-24 hover:transition-all my-3 mx-3' onClick={(e) => onSubmit(e)}>Register</button>
                    </div>

                </div>
                <SimpleAlert alert={alert} className="text-xl" />
            </div>
        </div>
    )
}

export default Add
