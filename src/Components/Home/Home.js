import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const getUsers = () => {
        navigate("/users")
    }
    return (
        <div>
            <h1>This is my Home....</h1>
            <h3>Dei ekhane ghm...</h3>
            <button onClick={getUsers}>Users</button>
        </div>
    );
};

export default Home;