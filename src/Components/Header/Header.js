import React from 'react';
import "./Header.css";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>Welcome to React Route</h1>
            <div className='link'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="users">Users</NavLink>
                <NavLink to="dashboard">Dash</NavLink>
            </div>
        </div>
    );
};

export default Header;