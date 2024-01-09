"use client"
import React from 'react';
import dynamic from 'next/dynamic';
const Image = dynamic(() => import('next/image'), { ssr: false });

const Project7 = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-4">So that&apos;s what that dream was about</h1>
      <div className="mb-8 flex flex-col md:flex-row items-start">
        <div className="md:w-1/2">
          <div className="mb-4">
            <Image src="/images/dream.png" alt="Dream2" width={600} height={400} />
          </div>
          <div className="mb-4">
            <Image src="/images/stwtdwagifclip.gif" alt="Dream1" width={600} height={400} />
          </div>
        </div>
        <div className="md:w-1/2 md:ml-8">
          <p className="text-xl text-gray-400 font-bold mb-2">About</p>
          <p className="text-lg text-gray-400 mb-4">
          Embark on a brief yet immersive journey through a 3D walking simulator that invites you to engage with objects in your room, each holding a connection to the ethereal realm of your dreams. Developed with Unity, the game integrates assets sculpted in Blender and designed in Procreate. This experience was conceived as a submission for the Relaxed Gaming Jam hosted by Spacemen Dev Squad on itch.io. Centered around the theme of dreams, the game serves as a testament to the fusion of creativity and technical expertise, offering players a unique and contemplative exploration of the intersection between reality and the subconscious.
          </p>
        <div className="mb-4">
        <p className="text-xl text-gray-400 font-bold mb-2">Credits</p>
                <li className='text-gray-400'>Programming by MoeRex</li>
                <li className='text-gray-400'>Game Design by Xerosolar</li>
                <li className='text-gray-400'>Writing by Kiralina</li>
        </div>
        <div className="mb-4">
              <p className="text-xl text-gray-400 font-bold">Download</p>
              <p className="text-lg text-gray-400 mt-2">
                Link to download the game <a href="https://xerosolar.itch.io/so-thats-what-that-dream-was-about" target="_blank" rel="noopener noreferrer"><strong>here</strong></a>
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project7;
