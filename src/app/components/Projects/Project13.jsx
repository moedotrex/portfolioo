import React from 'react';
import dynamic from 'next/dynamic';
const Image = dynamic(() => import('next/image'), { ssr: false });

const Project13 = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-4">Tleli and the Bow</h1>
      <div className="mb-8 flex flex-col md:flex-row items-start">
        <div className="md:w-1/2">
        <div className="mb-3">
            <video width="100%" height="auto" controls>
              <source src="/images/tlelibow.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-md text-gray-500 mt-2">VR expansion of Tleli and the Deep. I had the role of Game Designer and Background Artist.</p>
            <div className="mb-4 mt-4">
            <p className="text-xl text-gray-400 font-bold mb-2">Scope</p>
            <p className="text-lg text-gray-400 mb-4">
              The expansion delivers a complete and captivating virtual reality experience, achieving initial goals such as the archery system, rail-based level navigation, and interactive targets. Additionally, unforeseen but essential elements, including start and end menus, a points system, arrow refill mechanics, and mood-setting music, have been seamlessly integrated to enhance the overall gaming experience.
            </p>
            </div>
            <div className="mb-3">
            <Image src="/images/tlelibowprot.gif" alt="tlelibowprot" width={600} height={400} />
            <p className="text-md text-gray-500 mt-2">First Prototype</p>
            </div>
        </div>
        </div>
        <div className="md:w-1/2 md:ml-8">
          <p className="text-xl text-gray-400 font-bold mb-2">Narrative</p>
          <p className="text-lg text-gray-400 mb-4">
          Set months after the game&apos;s main storyline, the expansion unfolds as Tleli stumbles upon a town immersed in the use of long-range weapons. Here, she undertakes rigorous training to liberate the town from a mysterious curse haunting its nights. Our virtual reality experience immerses players solely in Tleli&apos;s training, portrayed through assets like a staged environment featuring painted enemies on wooden targets.
          </p>
        <div className="mb-4">
        <p className="text-xl text-gray-400 font-bold mb-2">Concept Art</p>
        <Image src="/images/tlelibowc1.png" alt="tlelibowc1" width={600} height={400} />
        <p className="text-md text-gray-500 mt-2">Camera View</p>
        </div>
        <div className="mb-4">
        <Image src="/images/tlelibowc2.png" alt="tlelibowc2" width={600} height={400} />
        <p className="text-md text-gray-500 mt-2">External View</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Project13;
