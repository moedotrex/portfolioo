import React from 'react';
import Project22 from '@/app/components/Projects/Project22';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const Project22Page = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <Project22 />
      <Footer />
    </div>
  );
};

export default Project22Page;