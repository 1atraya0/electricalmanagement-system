import React, { useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import GenerateBill from './GenerateBill';
import './ClientPage.css'; // Add custom styles here

Modal.setAppElement('#root'); // Set the root element for accessibility

const ClientPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

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

  // Hardcoded user information
  const userInfo = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    address: '1234 Main St, Anytown, USA',
    membership: 'Premium',
  };

  // Hardcoded bill data
  const billData = {
    unitsConsumed: 300,
    totalAmount: 150,
    date: new Date().toLocaleDateString(),
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // Handle logout and navigate to login page
  const handleLogout = () => {
    localStorage.removeItem('userRole'); // Remove user role from local storage
    navigate('/login'); // Navigate to the login page
  };

  return (
    <div className="client-page">
      <header>
        <div className="user-info-header">
          <div className="username">{userInfo.name}</div>
          <div className="header-buttons">
            <button onClick={openModal}>Generate Bill</button>
            <button onClick={handleLogout}>Logout</button> {/* Add onClick handler for logout */}
          </div>
        </div>
      </header>
      <div className="content-container">
        <div className="info-section">
          <h3>User Info : </h3>
          <p><strong>Name:</strong> {userInfo.name}</p>
          <p><strong>Email:</strong> {userInfo.email}</p>
          <p><strong>Phone:</strong> {userInfo.phone}</p>
          <p><strong>Address:</strong> {userInfo.address}</p>
          <p><strong>Membership:</strong> {userInfo.membership}</p>
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

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Generate Bill"
        className="Modal"
        overlayClassName="Overlay"
      >
        <GenerateBill userInfo={userInfo} billData={billData} />
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default ClientPage;
