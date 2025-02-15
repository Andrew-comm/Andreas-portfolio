import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-card">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="contact-header"
          >
            <h2 className="contact-title">Get in Touch</h2>
            <p className="contact-subtitle">I'd love to hear from you!</p>
          </motion.div>
          <div className="contact-info">
            <motion.div
              className="contact-info-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <strong>WhatsApp:</strong>
              <a
                href="https://wa.me/254769570325"
                target="_blank"
                rel="noopener noreferrer"
              >
                +254769570325
              </a>
            </motion.div>
            <motion.div
              className="contact-info-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <strong>Phone:</strong>
              <a href="tel:+254769570325">+254769570325</a>
            </motion.div>
            <motion.div
              className="contact-info-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <strong>Email:</strong>
              <a href="mailto:ndrwrono2001@gmail.com">
                ndrwrono2001@gmail.com
              </a>
            </motion.div>
            <motion.div
              className="contact-info-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <strong>LinkedIn:</strong>
              <a
                href="https://linkedin.com/in/andrew-rono-971b45227"
                target="_blank"
                rel="noopener noreferrer"
              >
                Andrew Rono
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
