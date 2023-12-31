import React, { useContext } from 'react';
import logo from '../../assets/company_logo/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import UserProfile from '../Home/UserProfile';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
    const { user, logOut, successToast, errorToast } = useContext(AuthContext)

    // handle logOut btn
    const handleLogOutBtn = () => {
        logOut()
            .then(() => {
                successToast('Successfully Sign Out')
            })
            .catch(error => {
                errorToast(error.message)
            })
    }
console.log(user)
    return (
        <div className="navbar bg-base-100 w-11/12 mx-auto justify-between">
            <div className="navbar-center lg:w-2/5 lg:navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-80">
                        <li className='mx-auto'><NavLink to='/'>Home</NavLink></li>
                        <li tabIndex={0} className='mx-auto'>
                            <NavLink to='/all-toys'>All Toys</NavLink>
                        </li>
                        <li className='mx-auto'><NavLink to='/my-toys'>My Toys</NavLink></li>
                        <li className='mx-auto'><NavLink to='/add-toy'>Add a Toy</NavLink></li>
                        <li className='mx-auto'><NavLink to='/blog'>Blog</NavLink></li>
                        <div className="navbar-end mx-auto gap-2 btn-group btn-group-vertical">
                            {
                                user ?
                                    <>
                                        <button onClick={handleLogOutBtn} className="btn-sm bg-[#F5B120] hover:bg-[#ac790c] text-white rounded-md">Log out</button>
                                    </>
                                    :
                                    <>
                                        <Link to='sign-in'><button className="btn-sm bg-[#F5B120] hover:bg-[#ac790c] text-white rounded-md">Sign in</button></Link>
                                        <Link to='sign-up'><button className="btn-sm bg-[#EA624C] hover:bg-[#b3402e] text-white rounded-md">Sign up</button></Link>
                                    </>
                            }
                        </div>

                    </ul>

                </div>
                <img className='w-[200px]' src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='me-2'><NavLink to='/' >Home</NavLink></li>
                    <li className='me-2' tabIndex={0}>
                        <NavLink to='/all-toys'>All Toys</NavLink>
                    </li>
                    <li className='me-2'><NavLink className='' to='/my-toys'>My Toys</NavLink></li>
                    <li className='me-2'><NavLink to='/add-toy'>Add a Toy</NavLink></li>
                    <li className='me-2'><NavLink to='/blog'>Blog</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end  gap-4 btn-group invisible lg:visible">
                {
                    user ? 
                            <UserProfile></UserProfile>
                        :
                        <>
                            <Link to='/sign-in'>
                                <button className="btn-sm bg-[#F5B120] hover:bg-[#ac790c] text-white rounded-md">Sign in</button>
                            </Link>
                            <Link to='/sign-up'>
                                <button className="btn-sm bg-[#EA624C] hover:bg-[#b3402e] text-white rounded-md">Sign up</button>
                            </Link>
                        </>
                }
            </div>

        </div>
    );
};

export default Navbar;