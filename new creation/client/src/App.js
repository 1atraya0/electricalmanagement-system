import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClientPage from './pages/ClientPage';
import AdminPage from './pages/AdminPage';
import UsersPage from './pages/UserPage';// Import the UsersPage
import LoginPage from './pages/LoginPage';

function App() {
  const userRole = localStorage.getItem('userRole');

  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<LoginPage />} />
          {userRole === 'admin' && <Route path="/admin" element={<AdminPage />} />}
          {userRole === 'client' && <Route path="/client" element={<ClientPage />} />}
          <Route path="/users" element={<UsersPage />} /> {/* Add route for UsersPage */}
          <Route path="/login" element={<LoginPage />} /> {/* Add Login route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
