// NavLink.jsx
"use client"
import React from 'react';
import dynamic from 'next/dynamic';
const Link = dynamic(() => import('react-router-dom').then((mod) => mod.Link), { ssr: false });

const NavLink = ({ href, title }) => {
  return (
    <Link to={href} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>
      {title}
    </Link>
  );
};

export default NavLink;
