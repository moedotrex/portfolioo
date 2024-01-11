import React from 'react';
import Project9 from '@/app/components/Projects/Project9';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const Project9Page = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <Project9 />
      <Footer />
    </div>
  );
};

export default Project9Page;