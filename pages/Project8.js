import React from 'react';
import Project8 from '@/app/components/Projects/Project8';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const Project8Page = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <Project8 />
      <Footer />
    </div>
  );
};

export default Project8Page;