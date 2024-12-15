"use client"
import React from 'react';
import dynamic from 'next/dynamic';
const Image = dynamic(() => import('next/image'), { ssr: false });

const Project20 = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-4">Monkeying Around</h1>
      <div className="mb-8 flex flex-col md:flex-row items-start">
        <div className="md:w-1/2">
          <div className="mb-4">
          <video width="100%" height="auto" controls>
              <source src="/images/maCutscene.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-md text-gray-500 mb-4">
            Gameplay video
          </p>
          <p className="text-xl text-gray-400 font-bold mb-2">Art</p>
          <p className="text-lg text-gray-400 mb-4">
          As an artist on this project, I focused on creating the monkey&apos;s 3D model, developing concept sketches, rigging, and designing custom painterly textures. I also created a mouse plushie model with the same painterly textures and created additional 3D assets to enhance the scene. Furthermore, I worked on an animated cutscene to provide players with essential backstory and context.
          </p>
          <div className="mb-4 mt-5"style={{ display: 'flex', gap: '10px' }}>
            <Image src="/images/maa1.png" alt="maa1" width={600} height={400} />
          </div>
          <div className="mb-4 mt-5"style={{ display: 'flex', gap: '10px' }}>
          <Image src="/images/maa3.png" alt="maa3" width={600} height={400} />
          </div>
          <p className="text-xl text-gray-400 font-bold mb-2">Rigging and Animations</p>
          <p className="text-lg text-gray-400 mb-4">
          I rigged the monkey model in Blender, and then animated it within Unity, alongside other 3D assets, to develop an emotionally impactful cutscene that enriches the player&apos;s experience.
          </p>
          <video width="100%" height="auto" controls>
              <source src="/images/maCutscene.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-md text-gray-500 mt-2">Final Cutscene</p>
        </div>
        <div>
        </div>
        <div className="md:w-1/2 md:ml-8">
          <p className="text-xl text-gray-400 font-bold mb-2">About</p>
          <p className="text-lg text-gray-400 mb-4">
          Monkeying Around is a VR game that puts players in the shoes of a monkey toy, separated from its mother in the basement of a toy store. Players must navigate their way back to her by climbing between shelf levels, utilizing vertical movement to overcome various obstacles. The primary mechanic revolves around the rhythmic movement of the player&apos;s hands, which guides them through the environment. An emotional narrative unfolds through an animated cutscene, allowing players to develop a deeper emotional connection with the character.
          </p>
        <div className="mb-4">
        <Image src="/images/maa2.png" alt="maa2" width={600} height={400} />
        </div>
        <p className="text-xl text-gray-400 font-bold mb-2 mt-2">About the normal maps</p>
          <p className="text-lg text-gray-400 mb-4">
          After modeling in Blender, I generated the object&apos;s normal map and used Procreate to manually color match and paint textures directly onto it. This texture was then imported back into Blender to create a tangent normal map for integration into Unity.
        </p>
        <div className="mb-4"style={{ display: 'flex', gap: '5px' }}>
            <Image src="/images/mass1.png" alt="mass1" width={300} height={400} />
            <Image src="/images/mass2.png" alt="mass2" width={300} height={400} />
        </div>
        <div className="mb-4"style={{ display: 'flex', gap: '5px' }}>
            <Image src="/images/mass4.png" alt="mass4" width={300} height={400} />
            <Image src="/images/mass5.png" alt="mass5" width={300} height={400} />
        </div>
        <div className="mb-4"style={{ display: 'flex', gap: '5px' }}>
            <Image src="/images/mamonkeyturnaround.gif" alt="mamonkeyta" width={300} height={400} />
            <Image src="/images/mamouseturnaround.gif" alt="mamouseta" width={300} height={400} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Project20;
