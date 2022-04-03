import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>Welcome to React Route</h1>
            <div className='link'>
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
                <Link to="users">Users</Link>
            </div>
        </div>
    );
};

export default Header;