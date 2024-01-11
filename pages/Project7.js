import React from 'react';
import Project7 from '@/app/components/Projects/Project7';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const Project7Page = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <Project7 />
      <Footer />
    </div>
  );
};

export default Project7Page;