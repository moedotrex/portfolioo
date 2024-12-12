"use client"
import React from 'react';
import dynamic from 'next/dynamic';
const Image = dynamic(() => import('next/image'), { ssr: false });

const Project20 = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-4">Hottie's Cream</h1>
      <div className="mb-8 flex flex-col md:flex-row items-start">
        <div className="md:w-1/2">
          <div className="mb-4">
            <Image src="/images/ofr.png" alt="ofr" width={610} height={410} />
          </div>
          <p className="text-md text-gray-500 mb-4">
            Pitch Bible created for Cartoon Network&apos;s Girl Power: Pitch me the Future contest in 2019.
          </p>
          <p className="text-xl text-gray-400 font-bold mb-2">The Characters</p>
          <p className="text-lg text-gray-400 mb-4">
          Aola is unwavering in her quest to ensure her friends&apos; happiness and shield them from harm. Yia and Xochi often find themselves entangled in various predicaments due to this protective nature, whereas Zam, committed to following the rules and doing what&apos;s right, tends to set aside her emotions.
          Yia and Aola form a mischievous duo, frequently finding themselves in challenging situations, while Zam remains the vigilant caretaker, always looking out for them. Xochi, a free spirit, takes charge whenever her friends are harmed or when a serious problem arises.
          Yia admires Xochi&apos;s laid-back attitude, urging Zam to loosen up a bit. In contrast, Zam views Xochi as an ideal, occasionally yearning for a more relaxed approach in her own life.
          </p>
          <div className="mb-4 mt-5"style={{ display: 'flex', gap: '10px' }}>
            <Image src="/images/outer2.PNG" alt="o2" width={300} height={200} />
            <Image src="/images/outer1.PNG" alt="o1" width={300} height={200} />
          </div>
          <p className="text-xl text-gray-400 font-bold mb-2">Pilot Episode</p>
          <p className="text-lg text-gray-400 mb-4">
          Aola&apos;s ordinary morning takes an unexpected turn when her phone buzzes with perplexing messages. Arriving at school, she discovers everyone buzzing about the announcement of the &apos;Supernova&apos; music festival on the very same day. This cosmic event, held each time a star is set to become a supernova, features renowned groups and stands as one of the universe&apos;s grandest spectacles. Fortunately, Yia surprises Aola with a ticket.
          However, seeking her mother&apos;s permission becomes a challenge as she&apos;s tasked with caring for her younger brother in the afternoon. A collaborative effort ensues among Aola&apos;s friends, who efficiently handle all of Aola&apos;s mother&apos;s errands before the concert, spanning from the supermarket to zero-gravity yoga classes.
          Despite their resourcefulness, they miss the last ship to the concert at the galactic port. Thanks to Zam&apos;s connections, Yia&apos;s contacts, Xochi&apos;s abilities, and Aola&apos;s persuasive skills, the group orchestrates a solution. Pulling together, they secure passage on a private ship, ensuring they don&apos;t miss the chance to revel in the festivities of the Supernova music festival.
          </p>
        </div>
        <div className="md:w-1/2 md:ml-8">
          <p className="text-xl text-gray-400 font-bold mb-2">About</p>
          <p className="text-lg text-gray-400 mb-4">
          Aola, a young alien residing in a compact apartment with her mother and younger brother, forms an inseparable bond with her three best friends—Zam, Yia, and Xochi. Together, they navigate the challenges of adolescence in the galactic empire&apos;s capital, the city-planet Lunos, situated in the Plasma system.
          Embark on a journey alongside this group of friends as they navigate the intricacies of teenage life within a highly advanced civilization. In this vibrant world, diverse species coexist and thrive, and the girls encounter typical school and family issues, embark on exciting excursions, and dive into interstellar adventures. The narrative unfolds against the backdrop of a society equipped with interspatial technology, exploring the marvels and applications of advanced technology across varied species.
          </p>
        <div className="mb-4">
        <Image src="/images/outer0.PNG" alt="o0" width={600} height={400} />
        </div>
        <p className="text-xl text-gray-400 font-bold mb-2 mt-2">Background</p>
          <p className="text-lg text-gray-400 mb-4">
          Centuries in the past, a highly advanced and peaceful alien species stumbled upon a groundbreaking element known as Novoro, promising unprecedented technological capabilities—specifically, the power to manipulate atoms and matter at its core.
          Initially viewing knowledge as a universal right, the galactic empire&apos;s bureaucrats coveted this newfound technology, perceiving it as a means to assert their dominance as a superior civilization. When the alien species refused to exclusively surrender their research to the empire, what was recorded as a great war was, in truth, a genocide orchestrated by the galactic empire. The aim was to pilfer the Novoro research, a covert operation that succeeded in stealing fragments, yet the full investigation remains incomplete even after centuries.
          Despite ongoing efforts, the device capable of altering matter&apos;s composition remains non-functional, rendering the Novoro element unusable. The galactic empire persists in unraveling the mystery behind Novoro, while their adversaries, the Xuras, relentlessly attempt to pilfer the incomplete research. The Xuras&apos; existence remains shrouded in secrecy, shielded from the galactic empire&apos;s populace by an efficient defense system, making them an unknown threat kept under governmental wraps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project20;
