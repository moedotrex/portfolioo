"use client"
import React from 'react';
import dynamic from 'next/dynamic';
const Image = dynamic(() => import('next/image'), { ssr: false });

const Project2 = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-4">Twitch Overlays</h1>
      <div className="mb-8 flex flex-col md:flex-row items-start">
        <div className="md:w-1/2">
          <div className="mb-4">
            <Image src="/images/TwitchO1.png" alt="TwitchO1" width={600} height={400} />
          </div>
          <div className="mb-4">
            <Image src="/images/TwitchO2.png" alt="TwitchO2" width={600} height={400} />
          </div>
          <Image src="/images/twitchclip.gif" alt="TwitchClip" width={600} height={400} />
        </div>
        <div className="md:w-1/2 md:ml-8">
          <p className="text-xl text-gray-400 font-bold mb-4">Starting Soon & Be Right Back Screens</p>
          <p className="text-lg text-gray-400 mb-4">
            Illustrations created for my personal use, driven by the initiative to enhance my Twitch channel after starting in 2022. Leveraging my artistic skills, I designed custom overlays to personalize and elevate my streaming content.
          </p>
          <p className="text-xl text-gray-400 font-bold mb-4">Gameplay Screen</p>
          <p className="text-lg text-gray-400 mb-7">
          I used Procreate for the illustrations and the layout, then integrated everything with OBS.
          </p>
          <p className="text-xl text-gray-400 font-bold mb-6">
            Process Clips
          </p>
          <div className="mb-4"style={{ display: 'flex', gap: '5px' }}>
            <Image src="/images/TwitchP1.gif" alt="TwitchP1" width={300} height={400} />
            <Image src="/images/TwitchP2.gif" alt="TwitchP2" width={300} height={400} />
          </div>
          <Image src="/images/TwitchP3.gif" alt="TwitchP3" width={300} height={200} />
        </div>
      </div>
    </div>
  );
};

export default Project2;
