import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: 'Clevermode Website',
      description: 'Registration and order website we prepared for our customer who sells Testing and Tagging equipment..',
      link: 'http://www.clevermode.com.au/',
    },
    {
      title: 'Gossip Girl API',
      description: 'Gossip Girl API.',
      link: 'https://github.com/wild-butterfly/gossipgirlAPI',
    },
    {
        title: 'Cocktail Finder API',
        description: 'Cocktail Finder API.',
        link: 'https://github.com/wild-butterfly/cocktailfinder',
    },
    {
      title: 'Exercise Finder API',
      description: 'Exercise Finder API.',
      link: 'https://github.com/wild-butterfly/exercisefinder',
    },
  ];

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.link} className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
