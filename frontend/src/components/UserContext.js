import React from 'react';
import './UserContext.css';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext';

const UserContext = () => {
  const navigate = useNavigate();
  const { user, logout } = useUser();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="navbar">
      <img src="/logo.png" alt="InstaPract" className="logo" />
      <div className="user-info">
        <img src="/profile.png" alt="User" className="profile-pic" />
        <div className="user-details">
          <div className="user-name">Hi, {user?.name || 'Guest'}</div>
          <div className="user-id">User ID: {user?.id || 'Unknown'}</div>
        </div>
        <button className="logout-btn" onClick={handleLogout}>⏻</button>
      </div>
    </header>
  );
};

export default UserContext;
