import React from 'react';
import Project2 from '@/app/components/Projects/Project2';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const Project2Page = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <Project2 />
      <Footer />
    </div>
  );
};

export default Project2Page;
