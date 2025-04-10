import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import DoctorList from './components/DoctorList';

const App = () => {
  const [token, setToken] = useState('');
  const [doctors, setDoctors] = useState([]);

  const handleLogin = async (form) => {
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          device_id: 'device123',
          os_id: 'web',
          time_zone: 'Asia/Kolkata',
          role_id: '4',
        }),
      });

      const data = await response.json();
      setToken(data.token);

      // Fetch doctors
      const doctorRes = await fetch('http://localhost:5000/api/doctors', {
        method: 'POST',
        headers: { Authorization: `Bearer ${data.token}` },
      });

      const doctorData = await doctorRes.json();
      setDoctors(doctorData.data || []);
    } catch (err) {
      alert('Login or Doctor fetch failed');
    }
  };

  return (
    <>
      {token ? <DoctorList doctors={doctors} /> : <LoginPage onLogin={handleLogin} />}
    </>
  );
};

export default App;
