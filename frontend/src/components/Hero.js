import React from "react";
import "./hero.css";
import { FaGithub, FaTelegram, FaFacebook } from "react-icons/fa";

const Hero = ({ setActive }) => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      {/* NEW: Transparent decoration layers */}
      <div className="hero-decoration">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle slow"></div>
        <div className="particle tiny"></div>
        <div className="glow-blob"></div>
        <div className="glow-blob second"></div>
      </div>

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
            <a href="#" className="btn-primary" onClick={() => setActive("projects")}>
              View Projects
            </a>
            <a href="#" className="btn-outline" onClick={() => setActive("contact")}>
              Contact Me
            </a>
          </div>

          <div className="hero-social">
            <a href="https://github.com/tesfalem-tesfu" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon">
              <FaGithub />
            </a>
            <a href="https://t.me/@tesfu_22" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="social-icon">
              <FaTelegram />
            </a>
            <a href="https://facebook.com/YOUR_FACEBOOK_USERNAME" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon">
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-image">
          <img src="/images/profile.png" alt="Tesfalem Markos" />
        </div>
      </div>
    </section>
  );
};

export default Hero;