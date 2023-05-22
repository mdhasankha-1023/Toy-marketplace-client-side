import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const UpdateProfile = () => {
    const {user, successToast, errorToast} = useContext(AuthContext);
    const navigate = useNavigate();
    useTitle('Update profile')
console.log(user)
    // handle update form 
    const handleUpdateForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        console.log(name, photoUrl)

        updateProfile(user, {
            displayName: name,
            photoURL: photoUrl,
        })
        .then(() => {
            successToast('Your profile updated successfully')
        })
        .catch(error => {
            errorToast(error.message)
        })
    }

    {
        !user && navigate('/sign-in')
    }


    return (
        <div className="hero mt-8">
            <div className="hero-content border w-2/5 rounded-lg bg-[#98D6E5]">
                <div className="card w-full">
                    <div className="card-body">
                        <h2 className='text-center font-bold text-3xl underline'>Update Your Profile</h2>
                        <form onSubmit={handleUpdateForm}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name='name' placeholder="Set your name" className="input input-bordered" defaultValue={user?.displayName} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="type your email" className="input input-bordered" defaultValue={user?.email} readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" readOnly />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photoUrl' placeholder="Set your photo url" className="input input-bordered" defaultValue={user?.photoURL} />
                            </div>
                            <div className="form-control mt-6">
                            <input className='btn text-white border-none bg-[#EA624C]' type="submit" value="Update" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;