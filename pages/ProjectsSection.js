import React from 'react';
import ProjectsSection from '../src/app/components/ProjectsSection';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const ProjectsSectionPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default ProjectsSectionPage;
