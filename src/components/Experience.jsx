import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Experience.css';

const experiences = [
  {
    id: 1,
    role: "Independent Software Engineer / ERP Developer",
    company: "Freelance / Remote",
    period: "2024 - Present",
    description:
      "Full-stack development, ERP systems, backend engineering, and infrastructure deployment for client solutions.",
    achievements: [
      "Developed ERPNext (Frappe) solutions for finance, HR & inventory workflows",
      "Built and deployed full-stack web applications using Django, React & Next.js",
      "Designed REST APIs and integrated third-party services",
      "Managed PostgreSQL, MySQL & MariaDB databases (design, optimization, backups)",
      "Deployed Linux servers with Nginx/Apache and CI/CD pipelines",
      "Automated workflows using Python scripts for reporting & data processing",
    ],
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "VortexCraft Software Ltd",
    period: "May 2023 - Aug 2023",
    description:
      "Backend and frontend development with focus on performance optimization and system integration.",
    achievements: [
      "Built Django + React full-stack applications",
      "Developed and integrated REST APIs",
      "Optimized database queries and system performance",
      "Performed testing, debugging and code reviews",
      "Collaborated in Agile development workflows",
    ],
  },
  {
    id: 3,
    role: "Web Development Intern",
    company: "UpTechWorld",
    period: "May 2022 - Aug 2022",
    description:
      "Frontend development and API integration for responsive web applications.",
    achievements: [
      "Built responsive UI components using JavaScript frameworks",
      "Integrated backend services into frontend applications",
      "Improved website performance and load speed",
      "Assisted in testing, debugging and feature implementation",
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
