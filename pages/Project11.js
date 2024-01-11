import React from 'react';
import Project11 from '@/app/components/Projects/Project11';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const Project11Page = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <Project11 />
      <Footer />
    </div>
  );
};

export default Project11Page;