"use client"
import React from 'react';
import dynamic from 'next/dynamic';
const Image = dynamic(() => import('next/image'), { ssr: false });

const Project21 = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-4">Sakana Smash</h1>
      <div className="mb-8 flex flex-col md:flex-row items-start">
        <div className="md:w-1/2">
          <div className="mb-4">
          <video width="100%" height="auto" controls>
              <source src="/images/fishvideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-md text-gray-500 mb-4">
            Gameplay Video
          </p>
          <p className="text-xl text-gray-400 font-bold mb-2">Controls</p>
          <p className="text-lg text-gray-400 mb-4">
          This game was created for the Jam O Drum, a platform developed at Carnegie Mellon University that brings a unique social dimension to gaming. This innovative setup encourages players to collaborate and compete in a lively, interactive environment, enhancing the game&apos;s fun factor.

          </p>
          <div className="mb-4 mt-5"style={{ display: 'flex', gap: '10px' }}>
            <Image src="/images/outer2.PNG" alt="o2" width={300} height={200} />
            <Image src="/images/outer1.PNG" alt="o1" width={300} height={200} />
          </div>
        </div>
        <div className="md:w-1/2 md:ml-8">
          <p className="text-xl text-gray-400 font-bold mb-2">About</p>
          <p className="text-lg text-gray-400 mb-4">
          Sakana Smash is a vibrant, sushi-themed arena where players take on the roles of quirky, animated fish. Set within a lively sushi restaurant, the experience combines playful art with intense, physics-driven gameplay. As players navigate the conveyor belt and grill hazards, they must push and dodge each other to avoid becoming the next sushi roll! The fast-paced, chaotic environment offers quick rounds filled with humor, strategy, and surprise, creating an unforgettable, “bite-sized” experience for players and viewers alike.
          </p>
        <div className="mb-4">
        <Image src="/images/outer0.PNG" alt="o0" width={600} height={400} />
        </div>
        <p className="text-xl text-gray-400 font-bold mb-2 mt-2">VFX</p>
          <p className="text-lg text-gray-400 mb-4">
          In this project, I took on the role of a programmer, helping out with the initial game scripts and managing some gameplay mechanics. However, I really focused on being a technical artist and spent a lot of my time creating cool visual effects (VFX) to amp up the visuals. I used Unity's Shader Graph and particle system, along with some custom textures, to add eye-catching visual feedback for the key player actions, making the gameplay experience even more engaging.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project21;
