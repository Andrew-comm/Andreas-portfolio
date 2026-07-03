import React from "react";
import { motion } from "framer-motion";
import "../styles/Skills.css";

const skills = [
  {
    category: "Programming Languages",
    technologies: [
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 92 },
      { name: "PHP", level: 85 },
    ],
  },
  {
    category: "Frontend Development",
    technologies: [
      { name: "React.js", level: 92 },
      { name: "Next.js", level: 88 },
      { name: "Angular", level: 80 },
      { name: "Vue.js", level: 78 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    category: "Backend Development",
    technologies: [
      { name: "Django", level: 92 },
      { name: "Laravel", level: 85 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    category: "Databases (DBMS)",
    technologies: [
      { name: "PostgreSQL", level: 92 },
      { name: "MySQL", level: 90 },
      { name: "MariaDB", level: 85 },
      { name: "SQL Server", level: 80 },
    ],
  },
  {
    category: "ERP & Enterprise Systems",
    technologies: [
      { name: "ERPNext", level: 90 },
      { name: "Frappe Framework", level: 88 },
    ],
  },
 
];

const SkillBar = ({ name, level, index }) => {
  return (
    <div className="skill">
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-percentage">{level}%</span>
      </div>

      <div className="skill-bar">
        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: index * 0.08 }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="container">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2>Skills & Expertise</h2>
          <p>
            Full Stack Software Engineer specializing in ERP systems,
            backend architecture, and scalable web applications
          </p>
        </motion.div>

        {/* GRID */}
        <div className="skills-grid">
          {skills.map((skillGroup) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="skill-category"
            >
              <h3>{skillGroup.category}</h3>

              {skillGroup.technologies.map((tech, index) => (
                <SkillBar
                  key={tech.name}
                  name={tech.name}
                  level={tech.level}
                  index={index}
                />
              ))}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;