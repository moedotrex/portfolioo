import React from 'react';
import Project27 from '@/app/components/Projects/Project27';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const Project27Page = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <Project27 />
      <Footer />
    </div>
  );
};

export default Project27Page;