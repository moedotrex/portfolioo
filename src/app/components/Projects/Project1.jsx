import React from 'react';
import Image from 'next/image';

const Project1 = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-4">Plantscape</h1>
      <div className="mb-8 flex flex-col md:flex-row items-start">
        <div className="md:w-1/2">
          <div className="mb-4">
            <Image src="/images/TITLEPlantscpe.png" alt="Plantscape" width={610} height={400} />
          </div>
          <p className="text-md text-gray-500">
            Game developed for the Laboratory of Experimentation and Innovation with Video Games and Interactive Art (LEIVA), at the Mexican National Arts Center.
          </p>
          <div className="text-lg text-gray-400 mb-4">
            <p className="text-xl font-bold mb-3 mt-5">Design Objectives</p>
            Our primary aim is to foster an appreciation for the environment and cultivate empathy towards pets. We approach this with a lighthearted and enjoyable strategy, ensuring effective player engagement without inducing feelings of overwhelm or guilt. Rather than delivering the message overtly, it is subtly conveyed through the necessity of forming cooperative bonds with the plants in the environment and making ethically charged decisions that allow players to express empathy towards the beings they encounter.
          </div>
          <div className="w-full mb-2 mt-10">
            <img src="/images/CinematicaPlantscape.gif" alt="Visuals" className="w-full mb-2 mt-4" />
            <p className="text-md text-gray-500">Cinematic</p>
          </div>
          <div>
          <p className="text-lg text-gray-400">
            The game was developed using Unity as the primary engine. Using GitHub for source control, and assets crafted using a blend of Procreate and Blender.
          </p>
          </div>
          <div className="mt-6">
            <p className="text-lg text-gray-400">
              <span className="font-bold text-xl">Credits</span>
              <ul className='mt-3'>
              <div className="mb-4">
                <li><span className="font-bold">Game Design and Concept Art:</span></li>
                <li>● María Monserrat (Moe) Aguilar Sánchez</li>
                <li>● Esmeralda Osejo Brito</li>
                <li>● Julio César Ortiz Acosta</li>
                <li>● Carlos Uriel García Leonardo</li>
              </div>
              <div className="mb-4">
                <li><span className="font-bold mb-4">Script and Narrative:</span></li>
                <li>● Esmeralda Osejo Brito</li>
              </div>
              <div className="mb-4">
                <li><span className="font-bold">Programming:</span></li>
                <li>● María Monserrat (Moe) Aguilar Sánchez</li>
                <li>● Julio César Ortiz Acosta</li>
              </div>
              <div className="mb-4">
                <li><span className="font-bold">2D Art:</span></li>
                <li>● Carlos Uriel García Leonardo</li>
              </div>
              <div className="mb-4">
                <li><span className="font-bold">3D Modeling:</span></li>
                <li>● Julio César Ortiz Acosta</li>
              </div>
              <div className="mb-4">
                <li><span className="font-bold">Music:</span></li>
                <li>● Jocelyn Montserrat Lagunas Sanabria</li>
              </div>
              </ul>
            </p>
          </div>
          <div className="mt-14">
              <p className="text-xl text-gray-400 font-bold">Download</p>
              <p className="text-lg text-gray-400 mt-2">
                Link to download the game <a href="https://moerex.itch.io/plantscape" target="_blank" rel="noopener noreferrer"><strong>here</strong></a>
              </p>
          </div>
        </div>

        <div className="md:w-1/2 md:ml-8">
          <p className="text-xl text-gray-400 font-bold mb-2">High Concept</p>
          <p className="text-lg text-gray-400">
            Plantscape is an isometric exploration and resource management game set in a mesmerizing world adorned with eco-cyberpunk aesthetics. Encounter extraordinary plants endowed with special powers as you navigate through this captivating realm.
          </p>
          <p className="text-xl text-gray-400 font-bold mb-2 mt-3">Summary</p>
          <p className="text-lg text-gray-400 mb-5">
            In the aftermath of a catastrophic tragedy, you become ensnared on the uppermost level of an underground structure. To secure your survival and ascend to the surface, unravel the intricate map of floors and regions, each possessing peculiar attributes. Harness the distinct abilities of plants strategically, and embark on a mission to rescue your trapped pet, hidden somewhere within the intricacies of the map.
          </p>
          <div className="w-full mb-4">
            <img src="/images/plantscapegifclip.gif" alt="Visuals" className="w-full mb-4" />
            <div className="text-lg text-gray-400 ml-auto">
            <p className="text-xl font-bold mb-4 mt-7">Engagement</p>
            The video game offers a multifaceted engagement experience. It elicits emotional connection through the player&apos;s bond with the robot and its kitten, tactical involvement through the mechanics of plant gathering and growth that demand strategic thinking, and a sense of reward derived from unlocking new areas and discovering regenerated ecosystems as a result of the player&apos;s actions.
          </div>
          </div>
          <div className="w-full mb-4 flex">
             <div className="w-1/2 pr-2">
              <img src="/images/XZhd.gif" alt="Visuals" className="w-full mb-2 h-auto" style={{ maxHeight: 400, width: 'auto' }} />
              <p className="text-md text-gray-500">Walking Animation</p>
             </div>
            <div className="w-1/2 pl-2">
              <img src="/images/ixzdlehd.gif" alt="Visuals" className="w-full mb-2 h-auto" style={{ maxHeight: 400, width: 'auto' }} />
              <p className="text-md text-gray-500">Idle Animation</p>
            </div>
          </div>
          <div className="w-full mb-4">
            <img src="/images/xz_revivehd.gif" alt="Visuals" className="w-full mb-2 h-auto" style={{ maxHeight: 300, width: 'auto' }} />
            <p className="text-md text-gray-500">Revive Animation</p>
          </div>
          <div className="w-full mb-4">
            <img src="/images/finish animhd.gif" alt="Visuals" className="w-full mb-2 h-auto" style={{ maxHeight: 300, width: 'auto' }} />
            <p className="text-md text-gray-500">Death Animation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;
