import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

const About = () => {
  // Function to trigger download of cv.pdf
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '../Images/cv.pdf'; // Ensure your CV is placed in the public folder
    link.download = 'cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="about-section">
      <div className="about-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="about-grid"
        >
          {/* Image */}
          <div className="about-image-wrapper">
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="about-image"
            >
              <img src="../Images/graduate.jpg" alt="Profile" />
            </motion.div>
          </div>

          {/* Content */}
          <div className="about-content">
            <h2 className="about-title">About Me</h2>
            <p className="about-text">
              I'm a passionate Full Stack Developer with 5 years of experience 
              building web applications. I specialize in React, Node.js, and 
              modern web technologies.
            </p>
            <div className="about-stats">
              <div>
                <h3 className="about-stat-number">50+</h3>
                <p className="about-stat-text">Projects Completed</p>
              </div>
              <div>
                <h3 className="about-stat-number">5+</h3>
                <p className="about-stat-text">Years Experience</p>
              </div>
            </div>
            <button className="about-button" onClick={downloadCV}>Download CV</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
