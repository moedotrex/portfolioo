"use client";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import dynamic from 'next/dynamic';

// Import components dynamically with ssr: false
const HeroSection = dynamic(() => import('./components/HeroSection'), { ssr: false });
const Navbar = dynamic(() => import('./components/Navbar'), { ssr: false });
const AboutSection = dynamic(() => import('./components/AboutSection'), { ssr: false });
const ProjectsSection = dynamic(() => import('./components/ProjectsSection'), { ssr: false });
const Footer = dynamic(() => import('./components/Footer'), { ssr: false });
const EmailSection = dynamic(() => import('./components/EmailSection'), { ssr: false });
const Project1 = dynamic(() => import('./components/Projects/Project1'), { ssr: false });
const Project2 = dynamic(() => import('./components/Projects/Project2'), { ssr: false });
const Project3 = dynamic(() => import('./components/Projects/Project3'), { ssr: false });
const Project4 = dynamic(() => import('./components/Projects/Project4'), { ssr: false });
const Project5 = dynamic(() => import('./components/Projects/Project5'), { ssr: false });
const Project6 = dynamic(() => import('./components/Projects/Project6'), { ssr: false });
const Project7 = dynamic(() => import('./components/Projects/Project7'), { ssr: false });
const Project8 = dynamic(() => import('./components/Projects/Project8'), { ssr: false });
const Project9 = dynamic(() => import('./components/Projects/Project9'), { ssr: false });
const Project10 = dynamic(() => import('./components/Projects/Project10'), { ssr: false });
const Project11 = dynamic(() => import('./components/Projects/Project11'), { ssr: false });
const Project12 = dynamic(() => import('./components/Projects/Project12'), { ssr: false });
const Project13 = dynamic(() => import('./components/Projects/Project13'), { ssr: false });
const Project14 = dynamic(() => import('./components/Projects/Project14'), { ssr: false });
const Project15 = dynamic(() => import('./components/Projects/Project15'), { ssr: false });
const Project16 = dynamic(() => import('./components/Projects/Project16'), { ssr: false });
const Project17 = dynamic(() => import('./components/Projects/Project17'), { ssr: false });
const Project18 = dynamic(() => import('./components/Projects/Project18'), { ssr: false });

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
  return (
    <Router>
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutSection" element={<AboutSection />} />
          <Route path="/ProjectsSection" element={<ProjectsSection />} />
          <Route path="/Contact" element={<EmailSection />} />
          <Route path="/Project1" element={<Project1 />} />
          <Route path="/Project2" element={<Project2 />} />
          <Route path="/Project3" element={<Project3 />} />
          <Route path="/Project4" element={<Project4 />} />
          <Route path="/Project5" element={<Project5 />} />
          <Route path="/Project6" element={<Project6 />} />
          <Route path="/Project7" element={<Project7 />} />
          <Route path="/Project8" element={<Project8 />} />
          <Route path="/Project9" element={<Project9 />} />
          <Route path="/Project10" element={<Project10 />} />
          <Route path="/Project11" element={<Project11 />} />
          <Route path="/Project12" element={<Project12 />} />
          <Route path="/Project13" element={<Project13 />} />
          <Route path="/Project14" element={<Project14 />} />
          <Route path="/Project15" element={<Project15 />} />
          <Route path="/Project16" element={<Project16 />} />
          <Route path="/Project17" element={<Project17 />} />
          <Route path="/Project18" element={<Project18 />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
};

export default Page;
