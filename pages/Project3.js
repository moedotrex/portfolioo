import React from 'react';
import Project3 from '@/app/components/Projects/Project3';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const Project3Page = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <Project3 />
      <Footer />
    </div>
  );
};

export default Project3Page;