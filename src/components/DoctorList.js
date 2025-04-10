import React from 'react';
import './DoctorList.css';

const DoctorList = ({ doctors }) => {
  return (
    <div className="doctor-container">
      <h2>List of Available Doctors</h2>
      <div className="doctor-grid">
        {doctors.map((doc, index) => (
          <div className="doctor-card" key={index}>
            <h3>{doc.name}</h3>
            <p><strong>Specialty:</strong> {doc.specialty}</p>
            <p><strong>Available:</strong> {doc.availability}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
