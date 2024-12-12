import React from 'react';
import Project23 from '@/app/components/Projects/Project23';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const Project23Page = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <Project23 />
      <Footer />
    </div>
  );
};

export default Project23Page;