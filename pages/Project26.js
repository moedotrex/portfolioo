import React from 'react';
import Project26 from '@/app/components/Projects/Project26';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const Project26Page = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <Project26 />
      <Footer />
    </div>
  );
};

export default Project26Page;