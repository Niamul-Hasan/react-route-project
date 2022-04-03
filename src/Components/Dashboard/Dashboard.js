import React from 'react';
import Bargraph from '../Bargraph/Bargraph';
import Linegraph from '../Linegrapg/Linegraph';
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <div className='chart'>
            <Linegraph></Linegraph>
            <Bargraph></Bargraph>
        </div>
    );
};

export default Dashboard;