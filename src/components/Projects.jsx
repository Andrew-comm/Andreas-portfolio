import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Projects.css';

const allProjects = [
  
  {
    id: 1,
    title: 'SwiftSale POS System',
    category: 'Point of Sale',
    image: '/images/SwiftSale.png',
    description: 'POS system for inventory and sales management.',
    technologies: ['Django', 'PostgreSQL'],
    github: 'https://github.com/Andrew-comm/SwiftSale',
    live: 'https://swiftsale.onrender.com/',
  },

  {
    id: 2,
    title: 'Cherono J. & Company Advocates',
    category: 'Law Firm Website',
    image: '/images/Cherono.png',
    description:
      'Corporate law firm website highlighting legal expertise, branding, and professional digital presence.',
    technologies: ['React.js', 'Netlify'],
    github: 'https://github.com/Andrew-comm/Cherono-J.-Company-Advocates',
    live: 'https://cherono-advocates.netlify.app/',
  },
  {
    id: 3,
    title: 'MarketHub E-Commerce',
    category: 'E-Commerce',
    image: '/images/MarketHub.png',
    description:
      'Full-stack e-commerce platform with authentication, cart system, and REST APIs.',
    technologies: ['Django', 'React.js', 'PostgreSQL'],
    github: 'https://github.com/Andrew-comm/MarketHub',
    live: 'https://markethub-347n.onrender.com/',
  },
  {
    id: 4,
    title: 'Nyalil Tree Nursery',
    category: 'Client Project',
    image: '/images/Nyalil.png',
    description:
      'Environmental conservation platform promoting reforestation initiatives in Kenya.',
    technologies: ['React.js', 'CSS'],
    github: 'https://github.com/Andrew-comm/Nyalil-Tree-Nursery',
    live: 'https://nyalil-tree-nursery.netlify.app/',
  },

  /* --- HIDDEN BY DEFAULT --- */
  {
    id: 5,
    title: 'Property Incider',
    category: 'Property Management',
    image: '/images/property.png',
    description: 'Property management platform built with Next.js and Tailwind CSS.',
    technologies: ['Next.js', 'Tailwind CSS'],
    github: 'https://github.com/Andrew-comm/property-incider',
    live: 'https://property-incider.vercel.app/',
  },
  {
    id: 6,
    title: 'Agency Website',
    category: 'Web Development',
    image: '/images/Bodhi.png',
    description: 'Modern agency website built with React and TypeScript.',
    technologies: ['React.js', 'TypeScript'],
    github: 'https://github.com/Andrew-comm/Bodhi-Global-Analysis-main',
    live: 'https://bodhi-prototype.vercel.app/',
  },
  {
    id: 7,
    title: 'Red Store E-Commerce',
    category: 'E-Commerce',
    image: '/images/Red.png',
    description: 'Modern e-commerce UI with responsive design.',
    technologies: ['React.js', 'CSS'],
    github: 'https://github.com/Andrew-comm/RedStore-Ecommerce',
    live: 'https://simple-ecommerce-flame.vercel.app/',
  },
  {
    id: 8,
    title: 'Siren K.A Andrew Engineering',
    category: 'Civil Engineering Website',
    image: '/images/Siren.png',
    description:
      'Professional civil engineering and infrastructure supervision website showcasing structural execution and project workflows.',
    technologies: ['React.js', 'Netlify'],
    github: 'https://github.com/Andrew-comm/siren-andrew-engineering',
    live: 'https://siren-andrew-engineering.netlify.app/',
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
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="view-btn">
            Live Demo
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-btn">
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
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 4);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="projects-header"
        >
          <h2 className="projects-title">My Projects</h2>
          <p className="projects-description">
            A selection of real-world applications, ERP systems, and client projects
            showcasing full-stack and backend engineering expertise.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="projects-grid">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* MORE BUTTON */}
        <div className="projects-more">
          <button
            className="more-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less Projects' : 'View More Projects'}
          </button>
        </div>

      </div>
    </section>
  );
};

export default Projects;