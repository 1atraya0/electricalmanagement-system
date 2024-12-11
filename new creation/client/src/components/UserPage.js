// src/components/UsersPage.js
import React, { useState } from 'react';
import './UserPage.css'; // You can add custom styles here
const UsersPage = () => {
  // Sample users data (in a real app, this would be fetched from a backend)
  const [users] = useState([
    { id: 1, name: 'John Doe', consumption: 200, amountPaid: 150 },
    { id: 2, name: 'Jane Smith', consumption: 150, amountPaid: 120 },
    { id: 3, name: 'Alice Johnson', consumption: 300, amountPaid: 180 },
    { id: 4, name: 'Bob Brown', consumption: 180, amountPaid: 130 },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter users based on the search query
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="users-page">
      <h2>Users List</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search users by name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ padding: '8px', margin: '10px 0', width: '200px' }}
      />

      <table border="1" cellPadding="5" style={{ width: '100%', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Consumption (Units)</th>
            <th>Amount Paid ($)</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.consumption}</td>
                <td>{user.amountPaid}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
