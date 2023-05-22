import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';


const SignUp = () => {
    const {signUp,  errorToast, successToast} = useContext(AuthContext)
    const navigate = useNavigate();
    useTitle('Sign up')

    // handle signUp form
    const handleSignUpForm = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoUrl.value;
        const formInfo = {name, email, password, photoUrl}
        console.log(formInfo)

        signUp(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            successToast('You are sing-up successfully')
            form.reset()
            navigate('/sign-in')
        })
        .catch(error => {
            errorToast(error.message)
        })
    }

    return (
        <div className="hero my-8">
            <div className="hero-content border w-2/5 rounded-lg bg-[#98D6E5]">
                <div className="card w-full">
                    <div className="card-body">
                        <h2 className='text-center font-bold text-3xl underline'>Sign Up</h2>
                        <form onSubmit={handleSignUpForm}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name='name' placeholder="type your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="type your email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="type a strong password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photoUrl' placeholder="photo url" className="input input-bordered" required/>
                            </div>
                            <div className="form-control mt-6">
                            <input className='btn text-white border-none bg-[#EA624C]' type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='text-center mt-4'>You have an account? <Link className='font-bold text-[#EA4A30]' to='/sign-in'>Sign in</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;