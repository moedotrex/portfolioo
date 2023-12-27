// ProjectLink.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectLink = ({ to, children }) => {
  return (
    <Link to={to} className="project-link">
      {children}
    </Link>
  );
};

export default ProjectLink;
