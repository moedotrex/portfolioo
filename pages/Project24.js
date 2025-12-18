import React from 'react';
import Project24 from '@/app/components/Projects/Project24';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const Project24Page = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <Project24 />
      <Footer />
    </div>
  );
};

export default Project24Page;