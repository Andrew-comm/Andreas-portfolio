import React from 'react';
import { motion } from 'framer-motion';
import '../styles/HeroAbout.css';

const HeroAbout = () => {

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf'; // move CV to public folder (IMPORTANT FIX)
    link.download = 'Andrew-Rono-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="hero-about-section" id="home">

      {/* MINI NAVBAR */}
      <header className="mini-nav">
        <div className="nav-logo">AR</div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <div className="hero-about-container">

        {/* LEFT SIDE */}
        <div className="hero-about-content">

          <motion.span className="badge">
            Software Engineer • ERP Developer • Full Stack Engineer • Data analysis • AI Solutiions
          </motion.span>

          <motion.h1 className="title">
            Andrew Kibet Rono
          </motion.h1>

          <motion.h2 className="subtitle">
            Building scalable web applications, ERP systems & backend platforms
          </motion.h2>

          <p className="description">
            I design and develop production-grade software systems including
            ERP solutions, APIs, automation tools, and full-stack web applications
            using Django, Laravel, Nodejs, MERN stack, React, Next.js, and ERPNext.
          </p>

          {/* STATS */}
          <div className="stats">
            <div className="stat">
              <h3>50+</h3>
              <p>Projects</p>
            </div>

            <div className="stat">
              <h3>4+</h3>
              <p>Years Experience</p>
            </div>

            <div className="stat">
              <h3>Full Stack & ERP</h3>
              <p>Specialist</p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="buttons">
            <button className="primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
              View Projects
            </button>

            <button className="secondary" onClick={downloadCV}>
              Download CV
            </button>
          </div>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="hero-about-image-wrapper">

          <motion.div
            className="image-card"
            initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
            animate={{ opacity: 1, rotate: -8, scale: 1 }}
            transition={{ duration: 0.8 }}
          >

            <img src="/Images/graduate.jpg" alt="Andrew Rono Software Engineer" />

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default HeroAbout;