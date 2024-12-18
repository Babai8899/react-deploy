import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import SimpleAlert from '../../shared/SimpleAltert.jsx';

import axios, { HttpStatusCode } from 'axios'

function LogIn() {
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
        password: ""
    })

    const { userId,
        password } = user

    const onInputChange = (e) => {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }


    const data = user;

    console.log(data);

    const URL = 'https://demodummy-7nz3bh2w.b4a.run/user/login';

    const onSubmit = async (e) => {
        e.preventDefault();
        axios.post(URL, data).then((response) => {
            const { data } = response;
            const msg = data.message;
            showAlert('success', msg);
            setTimeout(() => {
                navigate('/react-deploy');
                window.location.reload();
            }, 1200);
            window.localStorage.setItem('isLoggedIn', true);
        }).catch((error) => {
            const { data } = error.response;
            const msg = data.message;
            showAlert('error', msg);
        })
    }
    return (
        <div>
            <div className="card mx-auto w-80 h-11/12 border-base-300 border-4 py-8 mt-10 mb-5 lg:my-7">
                <label className="input input-bordered flex items-center gap-2 w-64 mx-auto my-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input type="text" className="grow" placeholder="Unique Id" name='userId' value={userId} onChange={(e) => onInputChange(e)} />
                </label>
                <label className="input input-bordered flex items-center gap-2 w-64 mx-auto my-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                            clipRule="evenodd" />
                    </svg>
                    <input type="password" placeholder='password' className="grow" name='password' value={password} onChange={(e) => onInputChange(e)} />
                </label>
                <div className='mx-auto'>
                    <button className='bg-base-300 h-10 rounded-xl w-20 py-1 px-2 hover:bg-base-200 hover:w-24 hover:transition-all my-5 mx-3' onClick={(e) => onSubmit(e)}>Log in</button>
                    <button className='bg-base-300 h-10 rounded-xl w-20 py-1 px-2 hover:bg-base-200 hover:w-24 hover:transition-all my-5 mx-3'><Link to={'/react-deploy/register'}>Register</Link></button>
                </div>
            </div>
            <SimpleAlert alert={alert} className="text-xl" />
        </div>
    )
}

export default LogIn
