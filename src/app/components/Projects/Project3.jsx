"use client"
import React from 'react';
import dynamic from 'next/dynamic';
const Image = dynamic(() => import('next/image'), { ssr: false });

const Project3 = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-4">Personal Illustrations</h1>
      <div className="mb-8 flex flex-col md:flex-row items-start">
        <div className="md:w-1/2">
          <div className="mb-6">
            <Image src="/images/PI1.png" alt="PI1" width={600} height={400} />
          </div>
          <div className="mb-6">
            <Image src="/images/PI2.PNG" alt="PI2" width={600} height={400} />
          </div>
          <Image src="/images/PI4.PNG" alt="PI4" width={600} height={400} />
        </div>
        <div className="md:w-1/2 md:ml-8">
          <p className="text-xl text-gray-400 font-bold mb-4">About</p>
          <p className="text-lg text-gray-400 mb-4">
            Illustrations and comics I make for friends and loved ones. Although my primary professional focus currently revolves around programming, I deliberately reserve space in my life for the joy of artistic expression. This creative outlet not only serves as a beloved hobby but also allows me to connect with others on a personal level. I firmly hold the belief that art is most powerful when it emanates from the heart, and this guiding principle continues to inspire and shape my creative endeavors.
          </p>
          <p className="text-xl text-gray-400 font-bold mb-4">Tools</p>
          <p className="text-lg text-gray-400 mb-6">
          I use Procreate for all my illustrations.
          </p>
          <Image src="/images/PI3.png" alt="PI3" width={600} height={400} />
          <p className="text-xl text-gray-400 font-bold mb-5 mt-6">
            Process Clips
          </p>
          <div className="mb-6"style={{ display: 'flex', gap: '5px' }}>
            <Image src="/images/PIC2.gif" alt="PIC2" width={200} height={400} />
            <Image src="/images/PIC3.gif" alt="PIC3" width={200} height={400} />
            <Image src="/images/PIC4.gif" alt="PIC4" width={200} height={400} />
          </div>
          <Image src="/images/PIC1.gif" alt="PIC1" width={600} height={400} />
        </div>
      </div>
    </div>
  );
};

export default Project3;
