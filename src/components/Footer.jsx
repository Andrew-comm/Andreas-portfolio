import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="footer-content"
        >
          <div className="footer-links">
            <a href="https://github.com/Andrew-comm" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/andrew-rono-971b45227/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            
          </div>
          <p className="footer-text">
            &copy; {new Date().getFullYear()} Andrew Rono. All rights reserved.
          </p>
          <button onClick={scrollToTop} className="footer-button">
            Back to Top
          </button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;