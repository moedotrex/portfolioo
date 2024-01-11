import React from 'react';
import Project12 from '@/app/components/Projects/Project12';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const Project12Page = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <Project12 />
      <Footer />
    </div>
  );
};

export default Project12Page;