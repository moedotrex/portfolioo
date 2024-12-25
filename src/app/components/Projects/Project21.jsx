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
          <div className="mb-4">
        <Image src="/images/fishswoosh.png" alt="fishswoosh" width={700} height={500} />
        </div>
        <div className="mb-4">
        <Image src="/images/fishsplashgraph.png" alt="fishsplashgraph" width={700} height={500} />
        </div>
        <div className="mb-4">
        <Image src="/images/fishtexts.png" alt="fishtexts" width={700} height={500} />
        </div>
        <p className="text-md text-gray-500 mt-2">Shaders graphs made in Unity with custom Textures made in Procreate</p>
        <p className="text-xl text-gray-400 font-bold mb-2 mt-2">The Team</p>
          <p className="text-lg text-gray-400 mb-4">
          This project was created for Round 3 of the Building Virtual Worlds class in Carnegie Mellon&apos;s Master of Entertainment Technology program. It was developed in one week by a team of five.
          </p>
          <div className="text-lg text-gray-400 mb-4">
                <li>Programming by Moe Aguilar and Jerry Zheng</li>
                <li>Art by Eliana Huang and Victor Jhou</li>
                <li>Sound design by Jialan Dong</li>
          </div>
        </div>
        <div className="md:w-1/2 md:ml-8">
          <p className="text-xl text-gray-400 font-bold mb-2">About</p>
          <p className="text-lg text-gray-400 mb-4">
          Sakana Smash is a vibrant, sushi-themed arena where players take on the roles of quirky, animated fish. Set within a lively sushi restaurant, the experience combines playful art with intense, physics-driven gameplay. As players navigate the conveyor belt and grill hazards, they must push and dodge each other to avoid becoming the next sushi roll! The fast-paced, chaotic environment offers quick rounds filled with humor, strategy, and surprise, creating an unforgettable, “bite-sized” experience for players and viewers alike.
          </p>
          <div className="mb-2"style={{ display: 'flex', gap: '5px' }}>
            <Image src="/images/fishpunch.gif" alt="fishpunch" className="w-full mb-2 h-auto" style={{ maxWidth: 330, height: 'auto' }} />
            <Image src="/images/fishsplash.gif" alt="fishsplash" className="w-full mb-2 h-auto" style={{ maxWidth: 330, height: 'auto' }} />
        </div>
        <div className="mb-2"style={{ display: 'flex', gap: '5px' }}>
            <Image src="/images/fishcloud.gif" alt="fishcloud" className="w-full mb-2 h-auto" style={{ maxWidth: 330, height: 'auto' }} />
            <Image src="/images/fishsakura.gif" alt="fishsakura" className="w-full mb-2 h-auto" style={{ maxWidth: 330, height: 'auto' }} />
        </div>
        <p className="text-xl text-gray-400 font-bold mb-2 mt-2">VFX</p>
          <p className="text-lg text-gray-400 mb-4">
          In this project, I took on the role of a programmer, helping out with the initial game scripts and managing some gameplay mechanics. However, I really focused on being a technical artist and spent a lot of my time creating cool visual effects (VFX) to amp up the visuals. I used Unity's Shader Graph and particle system, along with some custom textures, to add eye-catching visual feedback for the key player actions, making the gameplay experience even more engaging.
          </p>
          <div className="mb-4">
        <Image src="/images/fishassets.png" alt="fishassets" width={700} height={500} />
        </div>
        <p className="text-md text-gray-500 mt-2">Close up of the 3D assets made by Eliana and Victor</p>
        </div>
      </div>
    </div>
  );
};

export default Project21;
