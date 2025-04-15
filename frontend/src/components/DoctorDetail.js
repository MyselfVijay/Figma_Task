import React from 'react';
import { Globe, Mic, Video, Volume2, Power } from 'lucide-react';
import './DoctorDetail.css';

function DoctorDetail() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo-section">
            <img 
              src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=180" 
              alt="InstaPract Logo" 
              className="logo-image"
            />
            <span className="company-name">InstaPract</span>
            <span className="company-subtitle">HealthTech IT Solutions</span>
          </div>
          
          <div className="user-section">
            <div className="user-info">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=40" 
                alt="User Avatar" 
                className="user-avatar"
              />
              <div className="user-details">
                <p className="user-name">Hi,Rowena Ravenclaw</p>
                <p className="user-id">User ID:AAE4125</p>
              </div>
            </div>
            <button className="power-button">
              <Power className="h-5 w-5" style={{ color: 'rgb(75, 85, 99)' }} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-container">
        <h1 className="page-title">Video Consultation</h1>
        
        {/* Video Preview */}
        <div className="video-preview"></div>

        {/* Status Message */}
        <p className="status-message">Please wait while we check your camera</p>

        {/* Device Check Grid */}
        <div className="device-grid">
          {/* Network Check */}
          <div className="device-check">
            <div className="device-info">
              <Globe className="device-icon" />
              <span className="device-name">Network</span>
            </div>
            <div className="check-icon">✓</div>
          </div>

          {/* Camera Check */}
          <div className="device-check">
            <div className="device-info">
              <Video className="device-icon" />
              <span className="device-name">Camera</span>
            </div>
            <div className="check-icon">✓</div>
          </div>

          {/* Microphone Check */}
          <div className="device-check">
            <div className="device-info">
              <Mic className="device-icon" />
              <span className="device-name">Microphone</span>
            </div>
            <div className="check-icon">✓</div>
          </div>

          {/* Speaker Check */}
          <div className="device-check">
            <div className="device-info">
              <Volume2 className="device-icon" />
              <span className="device-name">Speaker</span>
            </div>
            <div className="check-icon">✓</div>
          </div>
        </div>

        {/* Browser Support Message */}
        <p className="browser-support">
          Supported web browsers for this video consultation technology include the latest versions of google chrome,Mozilla firefox
        </p>

        {/* Continue Button */}
        <div className="button-container">
          <button className="continue-button">
            CONTINUE
          </button>
        </div>
      </main>
    </div>
  );
}
export default DoctorDetail;
