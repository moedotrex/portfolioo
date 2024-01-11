import React from 'react';
import Project14 from '@/app/components/Projects/Project14';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const Project14Page = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <Project14 />
      <Footer />
    </div>
  );
};

export default Project14Page;