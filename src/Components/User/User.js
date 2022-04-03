import React from 'react';
import { useNavigate } from 'react-router-dom';

const User = (props) => {
    // console.log(props);
    const { name, username, id } = props.user;
    let navigate = useNavigate();
    const showDetails = () => {
        navigate(`/users/${id}`);
    }
    return (
        <div>
            <h3>Name: {name}</h3>
            <button onClick={showDetails}>{username}</button>
        </div>
    );
};

export default User;