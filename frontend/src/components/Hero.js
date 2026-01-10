import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-container">
        {/* LEFT TEXT */}
        <div className="hero-text">
          <p className="hero-hello">Hello</p>
          <h1 className="hero-name">
            I'm <span>Tesfalem Markos</span>
          </h1>
          <p className="hero-desc">
            Full Stack Developer building real-world web applications using
            React, Node.js, MySQL, and modern technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-image">
          <img src="/images/profile.png" alt="Tesfalem Ab" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
