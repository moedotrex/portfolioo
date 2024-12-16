import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import HeroSection from '../src/app/components/HeroSection';
import Navbar from '../src/app/components/Navbar';
import AboutSection from '../src/app/components/AboutSection';
import ProjectsSection from '../src/app/components/ProjectsSection';
import Footer from '../src/app/components/Footer';
import EmailSection from '../src/app/components/EmailSection';
import Project1 from '../src/app/components/Projects/Project1';
import Project2 from '../src/app/components/Projects/Project2';
import Project19 from '../src/app/components/Projects/Project19';
import Project19Page from './Project19';
// ... (import other projects)

var stripe_load = () => {
  if (process.browser) {
      var aScript = document.createElement('script');
      aScript.type = 'text/javascript';
      aScript.src = " https://js.stripe.com/v3/";

      document.head.appendChild(aScript);
      aScript.onload = () => {

      };
  }
};

stripe_load();

const Home = () => {
  return (
    <div className="container mt-24 mx-auto px-12 py-4">
      <HeroSection />
      <ProjectsSection />
    </div>
  );
};

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    // Your code for any additional setup or side effects
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      {router.pathname === '/' && <Home />}
      {router.pathname === '/AboutSection' && <AboutSection />}
      {router.pathname === '/ProjectsSection' && <ProjectsSection />}
      {router.pathname === '/Contact' && <EmailSection />}
      <Footer />
    </div>
  );
};

export default Page;
