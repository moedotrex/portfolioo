import React from 'react';
import Project5 from '@/app/components/Projects/Project5';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const Project5Page = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <Project5 />
      <Footer />
    </div>
  );
};

export default Project5Page;