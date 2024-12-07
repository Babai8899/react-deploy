import React, { useEffect, useState } from 'react'
import { CheckCheck, CircleUser, Bell, Sun, Moon, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {

    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'mylighttheme')

    const toggleTheme = (e) => {
        if (e.target.checked) {
            setTheme('mydarktheme');
        }
        else {
            setTheme('mylighttheme');
        }
    }
    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector("html").setAttribute("data-theme", localTheme);
    });

    return (
        <div>
            <div className="navbar bg-base-200 mx-auto max-h-20 min-h-20">
                <div className="navbar-start">

                    <Link className="relative flex text-4xl px-2 py-2 rounded-md cursor-pointer mx-1 hover:bg-base-300 hover:duration-500" to={'/'}><CheckCheck size={40} className='mr-4' />InfyTrip</Link>
                </div>
                <div className='navbar-end'>
                    

                    <label className="swap swap-rotate mr-1 ml-2 px-1 py-1 w-12 h-12 rounded-full cursor-pointer hover:bg-base-300 hover:duration-500">
                        {/* this hidden checkbox controls the state */}
                        
                        <input type="checkbox" className="theme-controller " value="synthwave" onChange={toggleTheme} />
                
                        {/* sun icon */}
                        <Sun size={40} className='swap-on ' />

                        {/* moon icon */}
                        <Moon size={40} className='swap-off ' />
                    </label>
                    <div className="mr-1 ml-2 px-1 py-1 w-12 h-12 rounded-full cursor-pointer hover:bg-base-300 hover:duration-500">
                        <div className="indicator w-10 h-10 rounded-full">
                            <Bell size={40} />
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </div>

                    <div className="dropdown dropdown-end mr-1 ml-2 px-1 py-1 w-12 h-12 rounded-full cursor-pointer hover:bg-base-300 hover:duration-500">
                        <div tabIndex={0} className="avatar">
                            <div className="w-10 h-10 rounded-full">
                                <CircleUser size={40} />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm  dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between text-xl">
                                    Profile
                                </a>
                            </li>
                            <li><a className='text-xl'>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar