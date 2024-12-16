import React, { useState } from 'react';
import axios from 'axios';
import './AddClient.css';

const AddClient = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [meterId, setMeterId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/clients', { name, phoneNumber, email, meterId });
      alert('Client added successfully');
      setName('');
      setPhoneNumber('');
      setEmail('');
      setMeterId('');
    } catch (error) {
      console.error('There was an error adding the client!', error);
    }
  };

  return (
    <div className="add-client">
      <h2>Add Client</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Meter ID:</label>
          <input type="text" value={meterId} onChange={(e) => setMeterId(e.target.value)} required />
        </div>
        <button type="submit">Add Client</button>
      </form>
    </div>
  );
};

export default AddClient;
