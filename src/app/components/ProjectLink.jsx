import React from 'react';
import Link from 'next/link';  // Import Link from 'next/link' directly

const ProjectLink = ({ to, children }) => {
  return (
    <Link href={to}>
      {children}
    </Link>
  );
};

export default ProjectLink;
