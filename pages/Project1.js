import React from 'react';
import Project1 from '@/app/components/Projects/Project1';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const Project1Page = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <Project1 />
      <Footer />
    </div>
  );
};

export default Project1Page;
