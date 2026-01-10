import React from 'react';
import Project28 from '@/app/components/Projects/Project28';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const Project28Page = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <Project28 />
      <Footer />
    </div>
  );
};

export default Project28Page;