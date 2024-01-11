import React from 'react';
import Project18 from '@/app/components/Projects/Project18';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const Project18Page = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <Project18 />
      <Footer />
    </div>
  );
};

export default Project18Page;