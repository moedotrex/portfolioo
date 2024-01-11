import React from 'react';
import Project17 from '@/app/components/Projects/Project17';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const Project17Page = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <Project17 />
      <Footer />
    </div>
  );
};

export default Project17Page;