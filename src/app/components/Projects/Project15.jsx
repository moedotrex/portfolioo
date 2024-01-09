"use client"
import React from 'react';
import dynamic from 'next/dynamic';
const Image = dynamic(() => import('next/image'), { ssr: false });

const Project15 = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-4">Victorian Character Design</h1>
      <div className="mb-8 flex flex-col md:flex-row items-start">
        <div className="md:w-1/2">
          <div className="mb-4">
            <Image src="/images/sins.png" alt="sins" width={600} height={400} />
          </div>
          <div className="mb-4">
          <Image src="/images/sini.png" alt="sinsI" width={600} height={400} />
          </div>
        </div>
        <div className="md:w-1/2 md:ml-8">
          <p className="text-xl text-gray-400 font-bold mb-2">About</p>
          <p className="text-lg text-gray-400 mb-4">
          In a Character Design class at university, I crafted compelling designs for three of the seven deadly sins—Anger, Sloth, and Pride—depicting them as siblings in the Victorian Era. Despite the tight deadline of just four days, I successfully completed both the character designs and a scene illustrating their interactions.
          </p>
          <div>
          <p className="text-xl text-gray-400 font-bold mb-4">Sketches</p>
          </div>
          <div className="mb-2"style={{ display: 'flex', gap: '5px' }}>
            <Image src="/images/sin1.png" alt="sin1" width={300} height={200} />
            <Image src="/images/sin2.png" alt="sin2" width={300} height={200} />
          </div>
          <div className="mb-2"style={{ display: 'flex', gap: '5px' }}>
            <Image src="/images/sin3.png" alt="sin3" width={300} height={200} />
            <Image src="/images/sin4.png" alt="sin4" width={300} height={200} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project15;
