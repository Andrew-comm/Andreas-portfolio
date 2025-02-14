import React from "react";
import { motion } from "framer-motion";
import "../styles/Skills.css"; // Import updated CSS

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 88 },
    ],
  },
  {
    category: "Backend",
    technologies: [
      { name: "Django", level: 87 },
      { name: "Node.js", level: 85 },
      { name: "Laravel", level: 80 },
    ],
  },
  {
    category: "Blockchain",
    technologies: [{ name: "Solidity", level: 75 }, { name: "Ethereum", level: 70 }],
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
          transition={{ duration: 1, delay: index * 0.1 }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2>Skills & Expertise</h2>
          <p>Full Stack Developer & Blockchain Enthusiast</p>
        </motion.div>

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
                <SkillBar key={tech.name} name={tech.name} level={tech.level} index={index} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
