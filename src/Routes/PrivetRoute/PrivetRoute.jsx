import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();

    // set loading
    if(loading) return <div className='w-full text-center'>
        <progress className="progress w-56 text-center"></progress>
    </div>

    if (user) {
        return children;
    }
    return <Navigate to='/sign-in' state={{ from: location }} replace={true}></Navigate>
};

export default PrivetRoute;