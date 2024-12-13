"use client"
import React from 'react';
import dynamic from 'next/dynamic';
const Image = dynamic(() => import('next/image'), { ssr: false });

const Project19 = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-4">Hottie&apos;s Cream</h1>
      <div className="mb-8 flex flex-col md:flex-row items-start">
        <div className="md:w-1/2">
          <div className="mb-4">
            <Image src="/images/projects/19.gif" alt="icmain" width={610} height={410} />
          </div>
          <p className="text-md text-gray-500 mb-4">
            Video game created in 2 weeks for the Building Virtual Worlds class in CMU.
          </p>
          <p className="text-xl text-gray-400 font-bold mb-2">The Controls</p>
          <p className="text-lg text-gray-400 mb-4">
          We created a physical interface for this game using Xbox Adaptive Controllers. We wanted to simulate a real life scooping ice cream experience.
          </p>
          <div className="mb-4 mt-5"style={{ display: 'flex', gap: '10px' }}>
          <Image src="/images/icecreammodels.png" alt="icm" width={600} height={400} />
          </div>
          <p className="text-xl text-gray-400 font-bold mb-2">Art</p>
          <p className="text-lg text-gray-400 mb-4">
          test text
          </p>
        </div>
        <div className="md:w-1/2 md:ml-8">
          <p className="text-xl text-gray-400 font-bold mb-2">About</p>
          <p className="text-lg text-gray-400 mb-4">
          test text
          </p>
        <div className="mb-4">
        <Image src="/images/icecreamjarmodel.png" alt="icjm" width={600} height={400} />
        <Image src="/images/icecreamjargraph.png" alt="icjg" width={600} height={400} />
        <Image src="/images/icecreamtoongraph.png" alt="ictg" width={600} height={400} />
        </div>
        <p className="text-xl text-gray-400 font-bold mb-2 mt-2">3D Models</p>
          <p className="text-lg text-gray-400 mb-4">
          test text
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project19;
