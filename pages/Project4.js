import React from 'react';
import Project4 from '@/app/components/Projects/Project4';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const Project4Page = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <Project4 />
      <Footer />
    </div>
  );
};

export default Project4Page;