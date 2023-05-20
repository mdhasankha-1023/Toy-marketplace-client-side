import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const {googleSignIn, signIn, errorToast, successToast} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    // handle signIn form
    const handleSignInForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
        .then(result => {
            console.log(result.user)
            successToast('You are sign-in successfully')
            form.reset()
            navigate(from, {replace: true})
        })
        .catch(error => {
            errorToast(error.message)
        })
    }

    // signIn with google
    const handleGoogleBtn = () => {
        googleSignIn()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            successToast('You are sign-in successfully')
            navigate(from, {replace: true})
            
        })
        .catch(error => {
            errorToast(error.message)
        })
    }

    return (
        <div className="hero mt-8">
            <div className="hero-content border w-2/5 rounded-lg bg-[#98D6E5]">
                <div className="card w-full">
                    <div className="card-body">
                        <h2 className='text-center font-bold text-3xl underline'>Sign In</h2>
                        <form onSubmit={handleSignInForm}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="type your email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="type a strong password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn text-white border-none bg-[#EA624C]' type="submit" value="Sign In" />
                            </div>
                        </form>
                        <p className='text-center my-3 font-bold'>Or Sign-in with</p>

                        {/* signIn with google */}
                        <button onClick={handleGoogleBtn} className="btn btn-outline">
                            <FaGoogle size='2em' className='text-[#DE4032]'></FaGoogle>
                            <span className='ms-4'>Sign In with Google</span>
                        </button>
                        <p className='text-center mt-4'>You have no account? <Link className='font-bold text-[#EA4A30]' to='/sign-up'>Sign up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;