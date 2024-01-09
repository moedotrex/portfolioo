// ProjectCard.jsx
"use client"
import React from "react";
import dynamic from 'next/dynamic';
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline"; 
const Link = dynamic(() => import('react-router-dom').then((mod) => mod.Link), { ssr: false });

const ProjectCard = ({ imgUrl, title, description, previewUrl }) => {
  return (
    <div>
      <div
        className="h-0 relative group overflow-hidden rounded-t-xl"
        style={{
          paddingTop: "56.25%", // 16:9 aspect ratio (9 / 16 * 100%)
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover rounded-t-xl"
          style={{ backgroundImage: `url(${imgUrl})` }}
        >
          <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
            <Link
              to={previewUrl}
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
