"use client"
import React from 'react';
import dynamic from 'next/dynamic';
const Image = dynamic(() => import('next/image'), { ssr: false });

const Project20 = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-4">Monkeying Around</h1>
      <div className="mb-8 flex flex-col md:flex-row items-start">
        <div className="md:w-1/2">
          <div className="mb-4">
            <Image src="/images/mamain1.png" alt="mamain" width={610} height={410} />
          </div>
          <p className="text-md text-gray-500 mb-4">
            VR Game
          </p>
          <p className="text-xl text-gray-400 font-bold mb-2">3D Models</p>
          <p className="text-lg text-gray-400 mb-4">
          test text
          </p>
          <div className="mb-4 mt-5"style={{ display: 'flex', gap: '10px' }}>
            <Image src="/images/maa1.png" alt="maa1" width={600} height={400} />
          </div>
          <div className="mb-4 mt-5"style={{ display: 'flex', gap: '10px' }}>
          <Image src="/images/maa3.png" alt="maa3" width={600} height={400} />
          </div>
          <p className="text-xl text-gray-400 font-bold mb-2">Texturing</p>
          <p className="text-lg text-gray-400 mb-4">
          test text
          </p>
        </div>
        <div>
            <video width="100%" height="auto" controls>
              <source src="/images/maCutscene.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-md text-gray-500 mt-2">Final Animatic</p>
        </div>
        <div className="md:w-1/2 md:ml-8">
          <p className="text-xl text-gray-400 font-bold mb-2">Rigging and Animations</p>
          <p className="text-lg text-gray-400 mb-4">
          test text
          </p>
        <div className="mb-4">
        <Image src="/images/maa2.png" alt="maa2" width={600} height={400} />
        </div>
        <p className="text-xl text-gray-400 font-bold mb-2 mt-2">Game Design</p>
          <p className="text-lg text-gray-400 mb-4">
          test text
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project20;
