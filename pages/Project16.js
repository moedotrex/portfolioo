import React from 'react';
import Project16 from '@/app/components/Projects/Project16';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const Project16Page = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <Project16 />
      <Footer />
    </div>
  );
};

export default Project16Page;