import React from 'react';

const Profile = () => {
  return (
    <aside className="profile-sidebar">
      <div className="profile-card">
        <div className="avatar-container">
          <img 
            src="https://www.shutterstock.com/image-illustration/neon-glowing-user-icon-profile-260nw-2462175375.jpg" 
            alt="Your Name" 
            className="avatar"
          />
          <div className="avatar-glow"></div>
        </div>
        
        <h2 className="profile-name">Tesfalem Ab</h2>
        <p className="profile-role">Full Stack Developer</p>
        
        <div className="social-icons">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" alt="GitHub" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" />
          </a>
          <a href="mailto:your@email.com" aria-label="Email">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Profile;