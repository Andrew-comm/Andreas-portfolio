import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Projects.css';

const projects = [
  {
    id: 1,
    title: 'Property Incider',
    category: 'Property Management',
    image: '/images/property.png',
    description: 'A property management platform built with Next.js and Tailwind CSS.',
    technologies: ['Next.js', 'Tailwind CSS'],
    github: 'https://github.com/Andrew-comm/property-incider',
    live: 'https://property-incider.vercel.app/',
  },
  {
    id: 2,
    title: 'Agency Website',
    category: 'Web Development',
    image: '/images/Bodhi.png',
    description: 'A modern agency website built with React and TypeScript.',
    technologies: ['React.js', 'TypeScript'],
    github: 'https://github.com/Andrew-comm/Bodhi-Global-Analysis-main',
    live: 'https://bodhi-prototype.vercel.app/',
  },
  {
    id: 3,
    title: 'Red Store E-Commerce',
    category: 'E-Commerce',
    image: '/images/Red.png',
    description: 'A fully functional e-commerce website built with modern UI/UX.',
    technologies: ['React.js', 'CSS'],
    github: 'https://github.com/Andrew-comm/RedStore-Ecommerce',
    live: 'https://simple-ecommerce-flame.vercel.app/',
  },
  {
    id: 4,
    title: 'Nyalil Tree Nursery',
    category: 'Client Project',
    image: '/images/Nyalil.png',
    description: 'A website for a tree nursery project in Kenya, built with React.',
    technologies: ['React.js', 'CSS'],
    github: 'https://github.com/Andrew-comm/Nyalil-Tree-Nursery',
    live: 'https://nyalil-tree-nursery.netlify.app/',
  },
  {
    id: 5,
    title: 'MarketHub E-Commerce',
    category: 'E-Commerce',
    image: '/images/MarketHub.png',
    description: 'A complete e-commerce solution with Django and React.',
    technologies: ['Django', 'React.js', 'PostgreSQL'],
    github: 'https://github.com/Andrew-comm/MarketHub',
    live: 'https://markethub-347n.onrender.com/',
  },
  {
    id: 6,
    title: 'SwiftSale POS System',
    category: 'Point of Sale',
    image: '/images/SwiftSale.png',
    description: 'A point-of-sale system for businesses, developed using Django.',
    technologies: ['Django', 'PostgreSQL'],
    github: 'https://github.com/Andrew-comm/SwiftSale',
    live: 'https://swiftsale.onrender.com/',
  },
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="project-card"
    >
      <div className="project-image-container">
        <img src={project.image} alt={project.title} className="project-image" />
        <div className="overlay">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="view-btn"
          >
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-technologies">
          {project.technologies.map((tech) => (
            <span key={tech} className="technology-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="projects-header"
        >
          <h2 className="projects-title">My Projects</h2>
          <p className="projects-description">
            Here are some of my recent projects showcasing my skills in web development and software engineering.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
