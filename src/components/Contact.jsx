import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    emailjs
      .sendForm(
        'service_oyvyvln',        // ✅ NEW SERVICE ID
        'template_nwd5hg8',       // keep your template ID (confirm it's correct)
        formRef.current,
        'O4xSxVZqa2Fqtasyc'       // public key
      )
      .then(
        (result) => {
          console.log('SUCCESS:', result.text);
          setLoading(false);
          setSuccess(true);

          // reset form
          formRef.current.reset();

          // hide success after 4s
          setTimeout(() => setSuccess(false), 4000);
        },
        (err) => {
          console.error('FAILED:', err.text);
          setLoading(false);
          setError(true);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">

      <div className="contact-container">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="contact-header"
        >
          <h2>Let’s Work Together</h2>
          <p>Contact me for software development, ERP systems, data analysis & ai solutions</p>
        </motion.div>

        {/* GRID */}
        <div className="contact-grid">

          {/* LEFT INFO */}
          <div className="contact-info-card">
            <h3>Contact Details</h3>

            <div className="info-item">
              <span>📱 WhatsApp</span>
              <a href="https://wa.me/254769570325">+254 769 570 325</a>
            </div>

            <div className="info-item">
              <span>📞 Phone</span>
              <a href="tel:+254769570325">+254 769 570 325</a>
            </div>

            <div className="info-item">
              <span>📧 Email</span>
              <a href="mailto:ronoandrew43@gmail.com">
                ronoandrew43@gmail.com
              </a>
            </div>

            <div className="info-item">
              <span>💼 LinkedIn</span>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                Andrew Rono
              </a>
            </div>
          </div>

          {/* RIGHT FORM */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            className="contact-form"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {success && (
              <p className="success-msg">✔ Message sent successfully</p>
            )}

            {error && (
              <p className="error-msg">❌ Failed to send message. Try again.</p>
            )}

          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;