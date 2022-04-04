import React from 'react';
import { Bar, BarChart, CartesianGrid, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
const Dashboard = () => {
    const data = [
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
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (

        <div>
            <h1>Line Chart</h1>
            <LineChart width={400} height={400} data={data}>
                <h1>this is </h1>
                <Line dataKey={'investment'}></Line>
                <Line dataKey={'sell'}></Line>
                <Line dataKey={'revenue'}></Line>
                <XAxis dataKey={'month'} />
                <YAxis />
                <Tooltip />
            </LineChart>
            <h1>Pie Chart</h1>
            <PieChart width={600} height={600}>
                <Pie dataKey={"revenue"} data={data} cx={200} cy={200} outerRadius={200} fill="#" />
                <Tooltip />
            </PieChart>

            <BarChart width={500} height={300} data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Bar dataKey="revenue" fill="#8884d8" label={{ position: 'top' }}>
                </Bar>

                <Bar dataKey="investment" fill="#E14E04" label={{ position: 'top' }}>
                </Bar>
                <Tooltip />
            </BarChart>
        </div>
    );
};

export default Dashboard;