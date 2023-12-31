import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { FaPen, FaSignOutAlt, FaUser } from 'react-icons/fa';

const UserProfile = () => {
    const { user, logOut, successToast, errorToast } = useContext(AuthContext);
    const [hovered, setHovered] = useState(false)

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

    const mouseHover = (value) => {
        setHovered(value)
    }

    return (
        <div className="dropdown dropdown-end">
            <div className='flex items-end'>
                {
                    hovered === true && <p className='text-black border border-gray-500	 p-1'>{user?.displayName}</p>
                }
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    {
                        user.photoURL === null ?
                            <div className="avatar placeholder">
                                <div className="rounded-full w-10 mx-auto  border-slate-800 border-2">
                                    <FaUser size='1.5em'></FaUser>
                                </div>
                            </div>
                            :
                            <div className="w-10 rounded-full mx-auto">
                                <img onMouseEnter={() => mouseHover(true)} onMouseLeave={() => mouseHover(false)} src={user?.photoURL} />
                            </div>}

                </label>
            </div>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                <li className='mb-4'>
                    <div className='flex flex-col'>
                        {
                            user.photoURL === null ?
                                <div className="avatar placeholder">
                                    <div className="rounded-full w-10 mx-auto  border-slate-800 border-2">
                                        <FaUser size='1.5em'></FaUser>
                                    </div>
                                </div>
                                :
                                <div className="w-[50px]">
                                    <img className='rounded-full' src={user?.photoURL} />
                                </div>}
                        <div className='text-center'>
                            <h3 className='font-bold'>{user?.displayName}</h3>
                            <p className='text-gray-600'>{user?.email}</p>
                        </div>
                    </div>
                </li>
                <hr />
                <li>
                    <Link to='/update-profile' className="justify-start">
                        <FaPen></FaPen> Profile
                    </Link>
                </li>
                <li><a onClick={handleLogOutBtn}><FaSignOutAlt></FaSignOutAlt>Logout</a></li>
            </ul>

        </div>
    );
};

export default UserProfile;