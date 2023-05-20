import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    const location = useLocation();

    if(user){
        return children;
    }
    return <Navigate to='/sign-in' state={{from: location}}></Navigate>
};

export default PrivetRoute;