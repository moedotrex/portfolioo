"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import dynamic from 'next/dynamic';
const NavLink = dynamic(() => import('./NavLink'), { ssr: false });
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
const MenuOverlay = dynamic(() => import('./MenuOverlay'), { ssr: false });
const AboutSection = dynamic(() => import('./AboutSection'), { ssr: false });

const navLinks = [
  {
    title: "About",
    path: "/AboutSection",
  },
  {
    title: "Projects",
    path: "/ProjectsSection",
  },
  {
    title: "Contact",
    path: "/Contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        {/* Include the favicon directly */}
        <div className="flex items-center">
          <Image src="/favicon.png" alt="Favicon" width={70} height={70} />
        <Link
          href={"https://moerex.com/"}
          className="ml-3 text-2xl md:text-5xl text-white font-semibold"
        >
            moerex
            </Link>
            </div>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;