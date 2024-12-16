import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate a login check (you can replace this with a real API request)
    if (email === 'admin@admin.com' && password === 'admin123') {
      // Set user role (admin in this case)
      localStorage.setItem('userRole', 'admin');
      navigate('/admin'); // Redirect to Admin Page
    } else if (email === 'client@client.com' && password === 'client123') {
      // Set user role (client in this case)
      localStorage.setItem('userRole', 'client');
      navigate('/client'); // Redirect to Client Page
    } else {
      // If login fails
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="loginp">
        <div className="login-page">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
            <div className="form-group">
            <label>Email:</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            </div>
            <div className="form-group">
            <label>Password:</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Login</button>
        </form>
        </div>
    </div>
    
  );
};

export default LoginPage;
