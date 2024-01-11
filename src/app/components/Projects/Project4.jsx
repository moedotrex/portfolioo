"use client"
import React from 'react';
import dynamic from 'next/dynamic';
const Image = dynamic(() => import('next/image'), { ssr: false });

const Project4 = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-4">Tleli and the Deep</h1>
      <div className="mb-8 flex flex-col md:flex-row items-start">
        <div className="md:w-1/2">
          <div className="mb-4">
            <Image src="/images/TleliTitle.png" alt="Tleli" width={600} height={900} />
          </div>
          <p className="text-md text-gray-500">
            Game developed for my Game Specialization semester in university. I had the role of Lead Programmer in charge of 23 other students.
          </p>
          <div className="text-lg text-gray-400 mb-4">
            <p className="text-xl font-bold mb-3 mt-4">Gameplay</p>
            The game is mainly a platformer with combat elements, the movement of the main character is highlighted by the double jump and the Dash upgrade you obtain after finishing the tutorial. The hub presents a wide variety of giant mushroom platforms to jump to, with varied sizes, heights, and levels of difficulty, the player will be rewarded with collectables (required to complete a side-quest) for reaching the toughest places in the Hub, while also getting a feel for the movement and skills that the character posseses.
          </div>
          <div>
          <p className="text-lg text-gray-400">
          <Image src="/images/tleliattack.png" alt="TleliAttack" width={600} height={900} />
          </p>
          </div>
          <div className="mt-6">
              <p className="text-xl text-gray-400 font-bold">Download</p>
              <p className="text-lg text-gray-400 mt-2 mb-5">
                Link to download the game <a href="https://tleli-thegame.itch.io/tleli-and-the-deep-vs" target="_blank" rel="noopener noreferrer"><strong>here</strong></a>
              </p>
              <video width="100%" height="auto" controls>
              <source src="/images/tleligameplay.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
              <p className="text-md text-gray-500 mt-2">Final Gameplay (Spanish Voice-over)</p>
          </div>
          <div className="text-lg text-gray-400 mb-4">
          <p className="text-xl font-bold mb-3 mt-10">Other Contributions</p>
          While primarily in the role of a tech lead, I also contributed as a technical artist, overseeing the integration of animations, creating concept art, developing 3D assets, shaders, textures, and implementing various game mechanics.
          </div>
          <Image src="/images/tlelihub.png" alt="TleliHub" width={610} height={900} />
          <div className="w-full mb-4 mt-2 flex">
             <div className="w-1/2 pr-2">
              <img src="/images/shader1.png" alt="Visuals" className="w-full mb-2 h-auto" style={{ maxHeight: 400, width: 'auto' }} />
              <p className="text-md text-gray-500 mb-8">Mushroom Shaders</p>
             </div>
            <div className="w-1/2 pl-2">
              <img src="/images/shader2.png" alt="Visuals" className="w-full mb-2 h-auto" style={{ maxHeight: 400, width: 'auto' }} />
            </div>
          </div>
          <div className="mb-4 mt-4">
            <Image src="/images/chest.gif" alt="chestshader" width={600} height={900} />
            <p className="text-md text-gray-500 mt-2">Opening Chest Shader</p>
          </div>
        </div>

        <div className="md:w-1/2 md:ml-8 text-gray-400 mb-5">
          <p className="text-xl text-gray-400 font-bold mb-2">About</p>
          <p className="text-lg text-gray-400 mb-4">
          A 3D platform-action game made in Unity, in which our character finds herself in an underworld afterlife, a cave network with strange environments and particular inhabitants, and our character wants to find a way back to life. In a Metroidvania style, the player must find different upgrades that will let them go to new areas to look for the exit of this underworld, fighting monsters, bosses, and the corrupted gate guardian along the way.
          </p>
          <div className="mb-3">
            <video width="100%" height="auto" controls>
              <source src="/images/tleliteaser.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-md text-gray-500 mb-3 mt-2">Final Teaser</p>
            <p className="text-xl text-gray-400 font-bold mb-2 mt-3">Level Design</p>
          The map has a double C-shape, starting from the Hub, you head in to the central zone, where you find an upgrade that opens both lateral paths, the player chooses which path to take, both will take them back to the hub, with a few twists and turns to hopefully surprise disoriented players when they find themselves back where they begin, the backtrack to take the second path is not long and both lateral zones have a pleasant and different aesthetics from one another trying to lure the player into fully exploring them both.
          Once both lateral core zones are cleared, the player obtains the boss door keys and can return to where they began to the door leading to the boss, which can now be opened.
          <p className="text-lg text-gray-400 mb-5 mt-4">
          <Image src="/images/leveltleli.png" alt="TleliLevel" width={600} height={900} />
          </p>
        </div>
          <div className="w-full mb-4">
            <div className="text-lg text-gray-400 ml-auto">
            <p className="text-xl font-bold mb-4 mt-7">Technology Department</p>
            As the tech lead, I coordinated the programming for our game. Despite being primarily artists with minimal programming knowledge, we learned on the fly with help from other experienced team members, teachers, and online resources. Our workflow evolved, starting individually, experimenting with pair programming and unit-testing due to coding challenges, and eventually transitioning to GitHub for more efficient collaboration.
            The switch to GitHub, although initially challenging, proved essential for cloud storage and simultaneous remote collaboration. Despite setbacks, our collective efforts and the lessons learned not only resulted in a successful project but also marked significant growth in our game development skills.
          </div>
          </div>
          <div className="mb-4">
             <video width="100%" height="auto" controls>
              <source src="/images/tleliprototype.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
              <p className="text-md text-gray-500 mt-2 mb-15">First Prototype</p>
          </div>
          <div className='mt-10'>
          <Image src="/images/chest1.png" alt="TleliChest" width={600} height={900} />
          </div>
          <div className="w-full mb-8 mt-2 flex">
             <div className="w-1/2 pr-2">
              <img src="/images/chest2.png" alt="Visuals" className="w-full mb-2 h-auto" style={{ maxHeight: 400, width: 'auto' }} />
              <p className="text-md text-gray-500 mt-2">Chest Concept and 3D Model</p>
             </div>
            <div className="w-1/2 pl-2">
              <img src="/images/chest3.png" alt="Visuals" className="w-full mb-2 h-auto" style={{ maxHeight: 400, width: 'auto' }} />
            </div>
          </div>
          <div>
            <Image src="/images/animationtree.png" alt="TleliAnim" width={600} height={900} />
            <p className="text-md text-gray-500 mt-2 mb-8">Player Animation Tree</p>
          </div>
          <Image src="/images/deepsona1.PNG" alt="Deepsona" width={600} height={900} />
          <div className="w-full mb-4 mt-2 flex">
             <div className="w-1/2 pr-2">
              <img src="/images/deepsona2.PNG" alt="Visuals" className="w-full mb-2 h-auto" style={{ maxHeight: 400, width: 'auto' }} />
              <p className="text-md text-gray-500 mt-2">NPC Concept and 3D Model</p>
             </div>
            <div className="w-1/2 pl-2">
              <img src="/images/deepsona3.png" alt="Visuals" className="w-full mb-2 h-auto" style={{ maxHeight: 400, width: 'auto' }} />
            </div>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Project4;
