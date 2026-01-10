// About.js
import React from 'react';
import "./about.css"; // Make sure you have the ultra-transparent about.css from earlier

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-glass-card slide-up"> {/* Keep slide-up if you have animation */}
          <div className="about-accent-line"></div>
          
          <h2 className="about-title">About Me</h2>
          
          <p className="about-description">
            I am a full-stack developer with a passion for creating innovative, user-friendly web 
            applications that solve real-world problems.
          </p>

          <div className="notes-grid">
            <div className="modern-note">
              <h3>Passionate Craft</h3>
              <p>
                Turning complex problems into elegant, performant solutions with modern tech stacks.
              </p>
            </div>
            
            <div className="modern-note">
              <h3>Clean Code</h3>
              <p>
                Writing maintainable, readable code that scales gracefully over time.
              </p>
            </div>
            
            <div className="modern-note">
              <h3>User First</h3>
              <p>
                Designing intuitive experiences that delight and empower users.
              </p>
            </div>
          </div>

          {/* Optional subtle floating dots */}
          <div className="floating-dots">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;