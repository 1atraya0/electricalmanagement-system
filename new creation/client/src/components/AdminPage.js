import React, { useState, useEffect } from 'react';
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './AdminPage.css'; // You can add custom styles here
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
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

  const [analysis, setAnalysis] = useState({
    averageConsumption: 0,
    totalRevenue: 0,
    highestConsumption: 0,
    lowestConsumption: 0,
    consumptionTrend: '',
  });

  const navigate = useNavigate();

  // Handle the redirect to the users page
  const handleRedirect = () => {
    navigate('/users');
  };

  // Perform AI-driven analysis based on the provided data
  const performAnalysis = (data) => {
    const totalConsumption = data.reduce((acc, entry) => acc + entry.units, 0);
    const totalRevenue = data.reduce((acc, entry) => acc + entry.revenue, 0);
    const highestConsumption = Math.max(...data.map((entry) => entry.units));
    const lowestConsumption = Math.min(...data.map((entry) => entry.units));

    // Simple consumption trend analysis
    let trend = 'Stable';
    if (data[data.length - 1].units > data[0].units) {
      trend = 'Increasing';
    } else if (data[data.length - 1].units < data[0].units) {
      trend = 'Decreasing';
    }

    // Update the analysis state
    setAnalysis({
      averageConsumption: totalConsumption / data.length,
      totalRevenue: totalRevenue,
      highestConsumption: highestConsumption,
      lowestConsumption: lowestConsumption,
      consumptionTrend: trend,
    });
  };

  useEffect(() => {
    // Perform analysis on the line data when the component mounts
    performAnalysis(lineData);
  }, []);

  return (
    <div className="admin-page">
      <header>
        <div className="admin-title">
          <h2>Admin Dashboard</h2>
        </div>
        <div className="logout-button">
          <button>Logout</button>
        </div>
      </header>

      <div className="metrics-container">
        <div className="metric-card" onClick={handleRedirect}>
          <p class="a">30000</p>
          <p>Total No. of Users</p>
        </div>
        <div className="metric-card" onClick={handleRedirect}>
          <p class="a">152675</p>
          <p>Total Units Consumed</p>
        </div>
        <div className="metric-card" onClick={handleRedirect}>
          <p class="a">150000</p>
          <p>Total Revenue</p>
        </div>
      </div>

      <div className="charts-container">
        <div className="chart graph">
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

        <div className="chart pie-chart">
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

        <div className="chart analysis">
          <h2>AI-Driven Analysis</h2>
          <p><strong>Average Consumption:</strong> {analysis.averageConsumption.toFixed(2)} kWh</p>
          <p><strong>Total Revenue:</strong> ${analysis.totalRevenue}</p>
          <p><strong>Highest Consumption:</strong> {analysis.highestConsumption} kWh</p>
          <p><strong>Lowest Consumption:</strong> {analysis.lowestConsumption} kWh</p>
          <p><strong>Consumption Trend:</strong> {analysis.consumptionTrend}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
