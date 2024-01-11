import React from 'react';
import Project15 from '@/app/components/Projects/Project15';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const Project15Page = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <Project15 />
      <Footer />
    </div>
  );
};

export default Project15Page;