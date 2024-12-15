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
            <Image src="/images/icecreamgameplay.gif" alt="icmain" width={700} height={500} />
          </div>
          <p className="text-md text-gray-500 mb-4">
           Gameplay
          </p>
          <p className="text-xl text-gray-400 font-bold mb-2">The Controls</p>
          <p className="text-lg text-gray-400 mb-4">
          Hottie&apos;s Cream stands out as an innovative experience by integrating a custom Xbox Adaptive Controller interface that redefines the typical gaming experience through tactile interaction. Unlike traditional games that rely solely on buttons and joysticks, this simulation allows players to engage in realistic ice cream scooping motions, providing a genuinely immersive experience. The unique control scheme caters to various accessibility needs, making it possible for a wider audience to enjoy gameplay that emphasizes natural movements and interaction. Additionally, the requirement for varying levels of eye contact to please characters introduces a distinctive social dynamic that could not be replicated with conventional controls, ensuring that players develop a deeper emotional connection with both the gameplay and the characters they serve.
          </p>
          <div className="mb-4 mt-5"style={{ display: 'flex', gap: '10px' }}>
          <Image src="/images/icecreammodels.png" alt="icm" width={700} height={500} />
          </div>
          <p className="text-xl text-gray-400 font-bold mb-2">Art</p>
          <p className="text-lg text-gray-400 mb-4">
          In this project, I served as an artist, contributing to the concept art for characters and the user interface. I created 3D models with custom textures using Substance Painter, and developed toon and glass shaders to elevate the visuals of the scene. Once the models were completed, I integrated everything into Unity. Additionally, I assisted with the background line art and contributed to the coloring and shading of several characters, helping to bring the vibrant world of Hottie&apos;s Cream to life.
          </p>
          <div className="mb-4 mt-5"style={{ display: 'flex', gap: '10px' }}>
          <Image src="/images/icecreambg.jpg" alt="icbg" width={700} height={500} />
          </div>
          <p className="text-md text-gray-500 mt-2 mb-4">Game Background</p>
          <div className="mb-4 mt-5"style={{ display: 'flex', gap: '10px' }}>
          <Image src="/images/icecreammenu.PNG" alt="icmenu" width={700} height={500} />
          </div>
          <p className="text-md text-gray-500 mt-2 mb-4">Game Menu</p>
          <div className="mb-4 mt-5"style={{ display: 'flex', gap: '10px' }}>
          <Image src="/images/icecreamsketches1.PNG" alt="icsketch1" width={700} height={500} />
          </div>
          <div className="mb-4 mt-5"style={{ display: 'flex', gap: '10px' }}>
          <Image src="/images/icecreamsketches2.PNG" alt="icsketch2" width={700} height={500} />
          </div>
          <p className="text-md text-gray-500 mt-2 mb-4">Concept Sketches</p>
          <div className="mb-4 mt-5"style={{ display: 'flex', gap: '10px' }}>
          <Image src="/images/icecreamtoongraph.png" alt="ictoon" width={700} height={500} />
          </div>
          <p className="text-md text-gray-500 mt-2 mb-4">Toon Shader Graph</p>
        </div>
        <div className="md:w-1/2 md:ml-8">
          <p className="text-xl text-gray-400 font-bold mb-2">About</p>
          <p className="text-lg text-gray-400 mb-4">
          Hottie&apos;s Cream is an immersive ice cream shop simulation game designed with a custom Xbox Adaptive Controller interface. Players can experience the delightful motions of scooping ice cream through a natural and intuitive physical setup. Interact with a diverse cast of characters from various fictional cities, each with their own unique needs for eye contact to ensure their satisfaction as customers. Strive to become employee of the month while navigating the challenges of keeping the company&apos;s reputation intact.
          </p>
        <div className="mb-4">
        <Image src="/images/icecreamcontrols.gif" alt="iccontrols" width={700} height={500} />
        </div>
        <p className="text-md text-gray-500 mb-4">Physical Interface</p>
        <div className="mb-4">
        <Image src="/images/icecreamstrawberry.png" alt="iccontrols" width={700} height={500} />
        </div>
        <div className="w-full mb-4 mt-4 flex">
             <div className="w-1/2 pr-2">
              <img src="/images/icecreamvanilla.png" alt="icvanilla" className="w-full mb-2 h-auto" style={{ maxHeight: 300, width: 'auto' }} />
              <p className="text-md text-gray-500 mt-2 mb-4">Textures made in Substance Painter</p>
             </div>
            <div className="w-1/2 pl-2">
              <img src="/images/icecreamchocolate.png" alt="icchoco" className="w-full mb-2 h-auto" style={{ maxHeight: 300, width: 'auto' }} />
            </div>
          </div>
          <div className="mb-4 mt-5"style={{ display: 'flex', gap: '10px' }}>
              <Image src="/images/icecreamjar.gif" alt="icjar" width={700} height={500} />
            </div>
            <div className="mb-4 mt-5"style={{ display: 'flex', gap: '10px' }}>
              <Image src="/images/icecreamjargraph.png" alt="icjargraph" width={700} height={500} />
            </div>
            <p className="text-md text-gray-500 mt-2 mb-4">Glass Shader</p>
        <p className="text-xl text-gray-400 font-bold mb-2 mt-2">The Team</p>
          <p className="text-lg text-gray-400 mb-4">
          This project was created for Round 1 of the Building Virtual Worlds class in Carnegie Mellon&apos;s Master of Entertainment Technology program. It was developed in two weeks by a team of four.
          </p>
          <div className="text-lg text-gray-400 mb-4">
                <li>Art by Moe Aguilar and Skye Gao</li>
                <li>Sound design by Yuhuai Huang</li>
                <li>Programming by Yifan Jiang</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project19;
