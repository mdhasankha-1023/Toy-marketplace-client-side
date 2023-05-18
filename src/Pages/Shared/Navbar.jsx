import React from 'react';
import logo from '../../assets/company_logo/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 w-11/12 mx-auto">
            <div className="navbar-center lg:navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-80">
                        <li className='mx-auto'><Link>Home</Link></li>
                        <li tabIndex={0} className='mx-auto'>
                            <Link>All toys</Link>
                        </li>
                        <li className='mx-auto'><Link>My toys</Link></li>
                        <li className='mx-auto'><Link>Blog</Link></li>
                        <div className="navbar-end mx-auto gap-2 btn-group btn-group-vertical">
                            <button className="btn-sm bg-[#F5B120] hover:bg-[#ac790c] text-white rounded-md">Sign in</button>
                            <button className="btn-sm bg-[#EA624C] hover:bg-[#b3402e] text-white rounded-md">Sign up</button>
                        </div>

                    </ul>

                </div>
                <img className='w-[200px]' src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link>Home</Link></li>
                    <li tabIndex={0}>
                        <Link>All toys</Link>
                    </li>
                    <li><Link>My toys</Link></li>
                    <li><Link>Blog</Link></li>
                </ul>
            </div>
            <div className="navbar-end  gap-4 btn-group invisible lg:visible">
                <button className="btn-sm bg-[#F5B120] hover:bg-[#ac790c] text-white rounded-md">Sign in</button>
                <button className="btn-sm bg-[#EA624C] hover:bg-[#b3402e] text-white rounded-md">Sign up</button>
            </div>

        </div>
    );
};

export default Navbar;