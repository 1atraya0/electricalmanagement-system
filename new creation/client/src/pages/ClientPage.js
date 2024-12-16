// src/components/ClientPage.js
import React from 'react';
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './ClientPage.css'; // Add custom styles here

const ClientPage = () => {
  // Sample data for Line Chart
  const lineData = [
    { name: 'Jan', units: 400, revenue: 2400 },
    { name: 'Feb', units: 300, revenue: 2210 },
    { name: 'Mar', units: 200, revenue: 2290 },
    { name: 'Apr', units: 278, revenue: 2000 },
    { name: 'May', units: 189, revenue: 2181 },
    { name: 'Jun', units: 239, revenue: 2500 },
    { name: 'Jul', units: 349, revenue: 2100 },
  ];

  // Sample data for Pie Chart
  const pieData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

  return (
    <div className="client-page">
      <header>
        <div className="user-info-header">
          <div className="username">Username</div>
          <div className="header-buttons">
            <button>Generate Bill</button>
            <button>Logout</button>
          </div>
        </div>
      </header>
      <div className="content-container">
        <div className="info-section">
          <h3>User Info</h3>
          {/* Add user info content here */}
        </div>
        <div className="graphs-section">
          <div className="consumption-graph">
            <h3>Consumption Graph</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="units" stroke="#8884d8" />
                <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="pie-graph">
            <h3>Pie Graph</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={['#0088FE', '#00C49F', '#FFBB28', '#FF8042'][index % 4]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="analysis-section">
          <h3>AI Analysis</h3>
          {/* Add AI analysis content here */}
        </div>
      </div>
    </div>
  );
};

export default ClientPage;
