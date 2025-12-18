import React from 'react';
import Project25 from '@/app/components/Projects/Project25';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const Project25Page = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <Project25 />
      <Footer />
    </div>
  );
};

export default Project25Page;