import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Experience.css';

const experiences = [
  {
    id: 1,
    role: "Software Engineer",
    company: "VortexCraft Software Limited",
    period: "May 2023 - Aug 2023",
    description:
      "Developed and maintained modern, responsive web applications using Django and React. Enhanced website performance and user engagement through optimized coding and content delivery.",
    achievements: [
      "Reduced website load times significantly",
      "Ensured cross-browser compatibility through extensive testing",
      "Implemented advanced content delivery techniques for optimal performance",
    ],
  },
  {
    id: 2,
    role: "Web Development Intern",
    company: "Uptechworld",
    period: "May 2022 - Aug 2022",
    description:
      "Developed and maintained responsive web applications using HTML, CSS, and JavaScript. Assisted in feature development, performance optimization, and cross-functional team collaboration.",
    achievements: [
      "Improved website functionality by 15%",
      "Optimized page load times by 20%",
      "Collaborated with cross-functional teams to launch new features",
    ],
  },
  {
    id: 3,
    role: "Freelance Developer",
    company: "Year Up",
    period: "Ongoing",
    description:
      "Designed and maintained scalable web solutions to enhance Year Up’s online presence. Developed full-stack applications, integrated RESTful APIs, and ensured efficient data retrieval.",
    achievements: [
      "Optimized website load times for better user retention",
      "Developed both frontend and backend solutions for seamless experiences",
      "Implemented Git-based version control for team collaboration",
    ],
  },
];

const Experience = () => {
  return (
    <section className="experience-section">
      <div className="experience-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="experience-header"
        >
          <h2 className="experience-title">Work Experience</h2>
          <p className="experience-subtitle">My professional journey</p>
        </motion.div>

        <div className="experience-timeline">
          <div className="experience-line" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`experience-item ${
                index % 2 === 0 ? "experience-item-right" : "experience-item-left"
              }`}
            >
              <div className="experience-dot" />
              <div className="experience-content">
                <h3 className="experience-role">{exp.role}</h3>
                <p className="experience-company">
                  {exp.company} | {exp.period}
                </p>
                <p className="experience-description">{exp.description}</p>
                <ul className="experience-list">
                  {exp.achievements.map((achievement) => (
                    <li key={achievement} className="experience-list-item">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
