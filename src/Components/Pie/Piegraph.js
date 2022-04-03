import React from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

const Piegraph = () => {
    const data01 = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        }
    ];
    const data02 = [
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 770,
            "revenue": 81000
        },
        {
            "month": "Sep",
            "investment": 750000,
            "sell": 470,
            "revenue": 71000
        },
        {
            "month": "Oct",
            "investment": 704000,
            "sell": 650,
            "revenue": 64000
        },
        {
            "month": "Nov",
            "investment": 709000,
            "sell": 450,
            "revenue": 65000
        }
    ]
    return (
        <PieChart width={730} height={250}>
            <Pie data={data01} dataKey="sell" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
            <Pie data={data02} dataKey="sell" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            <Tooltip />
            <Legend />
        </PieChart>
    );
};

export default Piegraph;