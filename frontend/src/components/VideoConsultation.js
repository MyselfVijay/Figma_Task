import React from 'react';
import './VideocallConsultation.css';
import { Mic, Video, PhoneOff, Smile, PlusCircle, Camera, Send } from 'lucide-react';
import Navbar from './UserContext';

<Navbar user={{ name: 'Rowena Ravenclaw', id: 'AAE4125' }} onLogout={() => setToken('')} />

function VideocallConsultation() {
  return (
    <div>
      {/* Nav Bar */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', background: 'white', borderBottom: '1px solid #ddd' }}>
        <img src="/logo.png" alt="InstaPract" style={{ height: '30px' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="/profile.png" alt="User" style={{ height: '35px', width: '35px', borderRadius: '50%' }} />
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontWeight: 'bold' }}>Hi, Rowena Ravenclaw</div>
            <div style={{ fontSize: '12px', color: '#777' }}>User ID: AAE4125</div>
          </div>
        </div>
      </header>

      <div style={{ display: 'flex', height: 'calc(100vh - 60px)' }}>
        {/* Video Section */}
        <div style={{ flex: 1, position: 'relative' }} className="video-container">
          <video className="video-stream" autoPlay muted></video>
          <div className="patient-video">
            <video width="100%" height="100%" autoPlay muted></video>
          </div>
          <div className="video-controls">
            <button className="control-button"><Mic /></button>
            <button className="control-button"><Video /></button>
            <button className="control-button end-call"><PhoneOff /></button>
          </div>
          <div style={{ position: 'absolute', top: 20, right: 20, color: 'white', textAlign: 'right' }}>
            <h3 style={{ margin: 0 }}>Dr. Rainer Mere</h3>
            <span style={{ fontSize: '14px' }}>10:50</span>
          </div>
        </div>

        {/* Chat Section */}
        <div className="chat-container">
          <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
            <div style={{ marginBottom: '10px', textAlign: 'left' }}>
              <div style={{ background: '#f1f1f1', padding: '10px 15px', borderRadius: '15px', display: 'inline-block' }}>
                Please share your x-ray report
              </div>
            </div>
            <div style={{ marginBottom: '10px', textAlign: 'right' }}>
              <div style={{ background: '#006494', color: 'white', padding: '10px 15px', borderRadius: '15px', display: 'inline-block' }}>
                Sure, here it is
              </div>
            </div>
            <div style={{ marginBottom: '10px', textAlign: 'right' }}>
              <img src="/xray.png" alt="X-ray" style={{ width: '120px', borderRadius: '8px' }} />
            </div>
          </div>

          {/* Message Input */}
          <div className="message-input">
            <PlusCircle size={22} />
            <div className="input-wrapper">
              <input type="text" placeholder="Type your message..." />
              <div className="message-actions">
                <Smile size={18} />
                <Camera size={18} />
                <Send size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideocallConsultation;
