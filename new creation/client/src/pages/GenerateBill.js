// src/components/GenerateBill.js
import React from 'react';
import './GenerateBill.css'; // Add custom styles for the bill

const GenerateBill = ({ userInfo, billData }) => {
  return (
    <div className="bill-container">
      <h2>Bill Receipt</h2>
      <div className="bill-info">
        <p><strong>Name:</strong> {userInfo.name}</p>
        <p><strong>Email:</strong> {userInfo.email}</p>
        <p><strong>Phone:</strong> {userInfo.phone}</p>
        <p><strong>Address:</strong> {userInfo.address}</p>
        <p><strong>Membership:</strong> {userInfo.membership}</p>
      </div>
      <div className="bill-details">
        <h3>Bill Details</h3>
        <p><strong>Units Consumed:</strong> {billData.unitsConsumed}</p>
        <p><strong>Total Amount:</strong> ${billData.totalAmount}</p>
        <p><strong>Date:</strong> {billData.date}</p>
      </div>
    </div>
  );
};

export default GenerateBill;
