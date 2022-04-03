import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
    const { userId } = useParams();
    const [userDetails, setUserDetails] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setUserDetails(data));
    }, [])
    return (
        <div>
            <h2>This is from User Deatails : {userId}</h2>
            <h3>NickName: {userDetails.username}</h3>
            <h4>Email : {userDetails.email}</h4>
            <h3>Website : {userDetails.website}</h3>
            <p>City : {userDetails.address?.city}</p>

        </div>
    );
};

export default UserDetail;