import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com'; // Ensure you have installed: npm install emailjs-com
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace these IDs with your EmailJS credentials
    const serviceID = 'service_aq237zi';
    const templateID = '__ejs-test-mail-service__';
    const userID = 'd_o4RaUJUXfxz5pbP';

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitting(false);
          setIsSubmitted(true);
          // Clear state to reset controlled inputs
          setFormData({ name: '', email: '', message: '' });
          // Force-reset the form via ref (in case browser autofill interferes)
          if (formRef.current) {
            formRef.current.reset();
          }
          // Auto-hide the success message after 5 seconds
          setTimeout(() => setIsSubmitted(false), 5000);
        },
        (error) => {
          console.error(error.text);
          setIsSubmitting(false);
          // Optionally, handle the error by displaying a message to the user
        }
      );
  };

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
            <h2 className="contact-title">Contact Me</h2>
            <p className="contact-subtitle">
              Let's work together on your next project
            </p>
          </motion.div>

          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <label htmlFor="name" className="contact-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="contact-input"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <label htmlFor="email" className="contact-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="contact-input"
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <label htmlFor="message" className="contact-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="contact-textarea"
                required
              />
            </motion.div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="contact-button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="contact-success"
              >
                Message sent successfully!
              </motion.div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
