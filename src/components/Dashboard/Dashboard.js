import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'
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
            <h1 className='chart-title'>Welcome To Chart</h1>
            <div className='chart-cotainer'>
                <div className="chart-info">
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
                </div>
                <div className="chart-info">
                    <h1>Bar Chart</h1>
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
                <div className="chart-info">
                    <h1>Pie Chart</h1>
                    <PieChart width={600} height={600}>
                        <Pie dataKey={"revenue"} data={data} cx={200} cy={200} outerRadius={200} fill="#07395C" />
                        <Tooltip />
                    </PieChart>
                </div>


                <div className="chart-info">
                    <h1>Aria Chart</h1>
                    <AreaChart width={500} height={400} data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#901117" />
                        <Area type="monotone" dataKey="revenue" stroke="#8884d8" fill="#10075C" />
                    </AreaChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;