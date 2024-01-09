// ProjectLink.jsx
"use client"
import React from 'react';
import dynamic from 'next/dynamic';
const Link = dynamic(() => import('react-router-dom').then((mod) => mod.Link), { ssr: false });

const ProjectLink = ({ to, children }) => {
  return (
    <Link to={to} className="project-link">
      {children}
    </Link>
  );
};

export default ProjectLink;
