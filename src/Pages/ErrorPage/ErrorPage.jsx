import React from 'react';
import errorImg from '../../assets/404_img/error.webp'
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className='relative'>
            <img src={errorImg} className='w-[100vw] h-[100vh]' alt="error page" />
            <div className='absolute bottom-0 w-full py-24 text-center'>
                <p className='text-center text-red-600 text-xl font-bold'> <i>{error.statusText || error.message}</i></p>
                <Link to='/'><button className="btn btn-sm bg-[#EA4A30] border-none mt-4">Back to home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;