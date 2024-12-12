import React from 'react';
import Project21 from '@/app/components/Projects/Project21';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const Project21Page = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <Project21 />
      <Footer />
    </div>
  );
};

export default Project21Page;