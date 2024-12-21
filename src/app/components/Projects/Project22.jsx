"use client"
import React from 'react';
import dynamic from 'next/dynamic';
const Image = dynamic(() => import('next/image'), { ssr: false });

const Project22 = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-4">Interstellar Countdown</h1>
      <div className="mb-8 flex flex-col md:flex-row items-start">
        <div className="md:w-1/2">
          <div className="mb-4">
          <video width="100%" height="auto" controls>
              <source src="/images/Intercgameplay.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-md text-gray-500 mb-4">
            Promotional video
          </p>
          <p className="text-xl text-gray-400 font-bold mb-2">Controls</p>
          <p className="text-lg text-gray-400 mb-4">
          We designed a custom phidget controller housed in a 3D printed box, incorporating different types of phidgets that makes for a unique game play experience. The use of physical dials, buttons and sliders is the most interactive and engulfing way to engage participants in the control &apos;panel&apos; of an alien spacecraft.
          </p>
          <div className="mb-4">
        <Image src="/images/intercconsole.gif" alt="intercconsole" width={700} height={500} />
        </div>
        <p className="text-md text-gray-500 mt-2 mb-5">Hologram Shader</p>
        <div className="mb-4">
        <Image src="/images/intercholograph.png" alt="intercholograph" width={700} height={500} />
        </div>
        <div className="mb-4">
        <Image src="/images/intercsinegraph.png" alt="intercsinegraph" width={700} height={500} />
        </div>
        <div className="mb-4">
        <Image src="/images/intercswirlgraph.png" alt="intercswirlgraph" width={700} height={500} />
        </div>
        <p className="text-md text-gray-500 mt-2 mb-5">Shader graphs made in Unity</p>
        <video width="100%" height="auto" controls>
              <source src="/images/intercountdowncontrols.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-md text-gray-500 mt-2">More about our controls</p>
        </div>
        <div className="md:w-1/2 md:ml-8">
          <p className="text-xl text-gray-400 font-bold mb-2">About</p>
          <p className="text-lg text-gray-400 mb-4">
          In this engaging experience, a pair of players collaborate to manage an alien device as stowaways on an alien vessel. One player interacts with a console screen that presents information and tasks, while their partner, guided by their teammate&apos;s instructions, manipulates a physical box equipped with various Phidget devices—such as sliders, sound sensors, and dials—to complete the tasks. This unique setup immerses participants in an interstellar countdown, heightening the tension as they work together to escape the void of space. The combination of tactile interaction and strategic teamwork creates a thrilling sensory encounter that intensifies the urgency of their quest for survival in the cosmos.
          </p>
        <div className="mb-4">
        <Image src="/images/intercbox.gif" alt="intercbox" width={700} height={500} />
        </div>
        <p className="text-xl text-gray-400 font-bold mb-2 mt-2">Art</p>
          <p className="text-lg text-gray-400 mb-4">
          In this project, I took on the role of an artist, contributing to the concept and design of the user interface. I also created custom shaders for the hologram console and its various elements, enhancing the visual appeal and functionality of the interface.
          </p>
          <div className="mb-4">
        <Image src="/images/intercshaders.gif" alt="intercshaders" width={700} height={500} />
        </div>
        <p className="text-md text-gray-500 mt-2 mb-5">Swirl and sine wave shaders</p>
        <div className="mb-2"style={{ display: 'flex', gap: '5px' }}>
            <Image src="/images/intercsketch3.jpg" alt="intercsketch3" width={330} height="auto" />
            <Image src="/images/intercsketch4.jpg" alt="intercsketch4" width={330} height="auto" />
        </div>
        <div className="mb-2"style={{ display: 'flex', gap: '5px' }}>
            <Image src="/images/intercsketch1.PNG" alt="intercsketch1" width={330} height="auto" />
            <Image src="/images/intercsketch2.PNG" alt="intercsketch2" width={330} height="auto" />
        </div>
        <p className="text-md text-gray-500 mt-2">Concept sketches</p>
          <p className="text-xl text-gray-400 font-bold mb-2 mt-2">The Team</p>
          <p className="text-lg text-gray-400 mb-4">
          This project was created for Round 4 of the Building Virtual Worlds class in Carnegie Mellon&apos;s Master of Entertainment Technology program. It was developed in two weeks by a team of five.
          </p>
          <div className="text-lg text-gray-400 mb-4">
                <li>Art by Moe Aguilar and Yufei Chen</li>
                <li>Programming by Derek Wong and Benjamin Walker</li>
                <li>Sound design by Azu De</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project22;
