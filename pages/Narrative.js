import React from 'react';
import Narrative from '@/app/components/Narrative';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const NarrativePage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <Narrative />
      <Footer />
    </div>
  );
};

export default NarrativePage;
