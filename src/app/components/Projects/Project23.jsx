"use client"
import React from 'react';
import dynamic from 'next/dynamic';
const Image = dynamic(() => import('next/image'), { ssr: false });

const Project23 = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-4">Whispers of the Bloom</h1>
      <div className="mb-8 flex flex-col md:flex-row items-start">
        <div className="md:w-1/2">
          <div className="mb-4">
          <video width="100%" height="auto" controls>
              <source src="/images/Whispersofthebloomvideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-md text-gray-500 mb-4">
          Promotional video
          </p>
          <p className="text-xl text-gray-400 font-bold mb-2">Story</p>
          <p className="text-lg text-gray-400 mb-4">
          The story centers around five flowers, each representing a stage of grief. They are hosting a poignant goodbye tea party for one flower symbolizing Acceptance, which is now extinct in the wild and must relocate to a distant botanical garden, far from her native habitat. Alongside the grief narrative, each flower also embodies a corresponding stage of endangerment: Acceptance represents Rare, Anger stands for Vulnerable, Bargaining captures Threatened, Depression embodies Endangered, and Acceptance signifies Extirpated (extinct in the wild).
          Guests have the opportunity to engage with the flowers, discussing these elements of the table setting. The flowers include the Leatherflower (Clematis viorna) for Depression, the Southern Small Yellow Lady's-slipper (Cypripedium parviflorum var. parviflorum) for Anger, and the White Trout Lily (Erythronium albidum) for Denial. Together, they create an atmosphere rich with emotion, inviting reflection on the themes of loss and the importance of connection in the face of extinction.

          </p>

          <p className="text-xl text-gray-400 font-bold mb-2">Contributions</p>
          <p className="text-lg text-gray-400 mb-4">
          I was responsible for crafting the story, which draws inspiration from a short story I wrote a few years ago about flowers having feelings. In addition to the narrative, I created props for the physical tea party table setting and contributed to the art for the game&apos;s virtual elements. I also made a rig for the main flower and developed its animations to express its emotions.
          </p>
        </div>
        <div className="md:w-1/2 md:ml-8">
          <p className="text-xl text-gray-400 font-bold mb-2">About</p>
          <p className="text-lg text-gray-400 mb-4">
          The user is invited to a whimsical tea party where the other guests are charming talking flowers. As the guest of honor, they engage in delightful conversations, asking questions and interacting with each flower to uncover the mystery behind their invitation and the purpose of the gathering. In this enchanting world, they navigate through delightful dialogues, unraveling the hidden secrets that lie beneath the surface of this unique celebration.
          </p>
          <div className="mb-2"style={{ display: 'flex', gap: '5px' }}>
            <Image src="/images/wotbhappyyes.gif" alt="wotbhappyyes" width={350} height={450} />
            <Image src="/images/wotbsadyes.gif" alt="wotbsadyes" width={350} height={450} />
        </div>
        <div className="mb-2"style={{ display: 'flex', gap: '5px' }}>
            <Image src="/images/wotbno.gif" alt="wotbno" width={350} height={450} />
            <Image src="/images/wotbsadno.gif" alt="wotbsadno" width={350} height={450} />
        </div>
        <p className="text-xl text-gray-400 font-bold mb-2 mt-2">Physical Setting</p>
          <p className="text-lg text-gray-400 mb-4">
          To fully engage the guest&apos;s senses, we provided tea and snacks, corresponding to each flower&apos;s story. The table for the tea party was decorated to feel magical and floral.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project23;
