"use client"
import React from 'react';
import dynamic from 'next/dynamic';
const Image = dynamic(() => import('next/image'), { ssr: false });

const Project17 = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-4">Alien Animation</h1>
      <div className="mb-8 flex flex-col md:flex-row items-start">
        <div className="md:w-1/2">
          <div className="mb-4">
            <Image src="/images/alien.gif" alt="alien" width={610} height={410} />
            <p className="text-md text-gray-400 mt-4">
            Fun fact: these characters later evolved to become the protagonists of my game Morning Star.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 md:ml-8">
          <p className="text-xl text-gray-400 font-bold mb-2">About</p>
          <p className="text-lg text-gray-400 mb-4">
            Project for my university Acting for Animation class. I designed the characters, acted out the scene and animated everything.
          </p>
          <div className="w-full mb-4 flex">
             <div className="w-1/2 pr-2">
              <img src="/images/alienc.PNG" alt="Visuals" className="w-full mb-2 h-auto" style={{ maxHeight: 300, width: 'auto' }} />
              <p className="text-md text-gray-500">Character Designs</p>
             </div>
            <div className="w-1/2 pl-2">
              <img src="/images/animact.gif" alt="Visuals" className="w-full mb-2 h-auto" style={{ maxHeight: 300, width: 'auto' }} />
              <p className="text-md text-gray-500">Acting Reference</p>
            </div>
          </div>
          <div>
          <Image src="/images/alienproc.GIF" alt="alienP" width={300} height={200} />
          <p className="text-md text-gray-500 mt-2">Rough Animation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project17;
