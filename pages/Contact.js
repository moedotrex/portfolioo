import React from 'react';
import EmailSection from '@/app/components/EmailSection';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const EmailSectionPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <EmailSection />
      <Footer />
    </div>
  );
};

export default EmailSectionPage;
