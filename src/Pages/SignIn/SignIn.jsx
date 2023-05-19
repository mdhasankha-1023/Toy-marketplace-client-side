import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SignIn = () => {
    return (
        <div className="hero mt-8">
            <div className="hero-content border w-2/5 rounded-lg bg-[#98D6E5]">
                <div className="card w-full">
                    <div className="card-body">
                        <h2 className='text-center font-bold text-3xl underline'>Sign In</h2>
                        <form >
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
                        <p className='text-center my-3 font-bold'>Or login with</p>
                        <button className="btn btn-outline"><FaGoogle size='2em' className='text-[#DE4032]'></FaGoogle><span className='ms-4'>Sign In with Google</span></button>
                        <button className="btn btn-outline"><FaGithub size='2em'></FaGithub><span className='ms-4'>Sign In with Github</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;