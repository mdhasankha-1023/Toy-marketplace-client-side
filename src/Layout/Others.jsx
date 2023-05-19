import React from 'react';
import Navbar from '../Pages/Shared/navbar';
import { Outlet } from 'react-router-dom';

const Others = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Others;