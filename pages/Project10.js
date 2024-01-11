import React from 'react';
import Project10 from '@/app/components/Projects/Project10';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const Project10Page = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <Project10 />
      <Footer />
    </div>
  );
};

export default Project10Page;