import React from 'react';
import Project19 from '@/app/components/Projects/Project19';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const Project19Page = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <Project19 />
      <Footer />
    </div>
  );
};

export default Project19Page;