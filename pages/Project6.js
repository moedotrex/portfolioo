import React from 'react';
import Project6 from '@/app/components/Projects/Project6';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const Project6Page = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <Project6 />
      <Footer />
    </div>
  );
};

export default Project6Page;