import React from 'react';
import Project13 from '@/app/components/Projects/Project13';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const Project13Page = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <Project13 />
      <Footer />
    </div>
  );
};

export default Project13Page;