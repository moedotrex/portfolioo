import React from 'react';
import Project20 from '@/app/components/Projects/Project20';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const Project20Page = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <Project20 />
      <Footer />
    </div>
  );
};

export default Project20Page;