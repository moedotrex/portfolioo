import React from 'react';
import VFXReel from '@/app/components/VFXReel';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const VFXReelPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="mt-40">
        <VFXReel />
      </div>
      <Footer />
    </div>
  );
};

export default VFXReelPage;