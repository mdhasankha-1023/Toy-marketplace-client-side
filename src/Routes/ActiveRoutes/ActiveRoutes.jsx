import React from 'react';
import './ActiveRoutes.css'
import { NavLink } from 'react-router-dom';

const ActiveRoutes = ({ to, children }) => {
    return (
        <div>
            <NavLink
                to={to}
                className={({ isActive }) => isActive ? "active" : ""}
            >
                {children}
            </NavLink>
        </div>
    );
};

export default ActiveRoutes;