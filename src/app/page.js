"use client";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import EmailSection from './components/EmailSection';
import Project1 from './components/Projects/Project1';
import Project2 from './components/Projects/Project2';
import Project3 from './components/Projects/Project3';
import Project4 from './components/Projects/Project4';
import Project5 from './components/Projects/Project5';
import Project6 from './components/Projects/Project6';
import Project7 from './components/Projects/Project7';
import Project8 from './components/Projects/Project8';
import Project9 from './components/Projects/Project9';
import Project10 from './components/Projects/Project10';
import Project11 from './components/Projects/Project11';
import Project12 from './components/Projects/Project12';
import Project13 from './components/Projects/Project13';
import Project14 from './components/Projects/Project14';
import Project15 from './components/Projects/Project15';
import Project16 from './components/Projects/Project16';
import Project17 from './components/Projects/Project17';
import Project18 from './components/Projects/Project18';

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
