import React from 'react';
import Bargraph from '../Bargraph/Bargraph';
import Linegraph from '../Linegrapg/Linegraph';
import Piegraph from '../Pie/Piegraph';
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <div className='chart'>
            <Linegraph></Linegraph>
            <Bargraph></Bargraph>
            <Piegraph></Piegraph>
        </div>
    );
};

export default Dashboard;