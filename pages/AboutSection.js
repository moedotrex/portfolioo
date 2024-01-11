import React from 'react';
import AboutSection from '../src/app/components/AboutSection';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const AboutSectionPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default AboutSectionPage;
