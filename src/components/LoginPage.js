import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
  const [form, setForm] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(form);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>InstaPract</h1>
        <h5>HealthTech IT Solutions</h5>
        <h2>Patient Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={form.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={form.password}
            onChange={handleChange}
          />
          <div className="remember-container">
        <input
          type="checkbox"
          id="remember"
          checked={remember}
          onChange={() => setRemember(!remember)}
        />
        <label htmlFor="remember">Remember me</label>
      </div>
          
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
