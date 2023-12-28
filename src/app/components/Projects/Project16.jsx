import React from 'react';
import dynamic from 'next/dynamic';
const Image = dynamic(() => import('next/image'), { ssr: false });

const Project16 = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-4">Los Vigilantes del Agua</h1>
      <div className="mb-8 flex flex-col md:flex-row items-start">
        <div className="md:w-1/2">
          <div className="mb-4">
            <Image src="/images/lvda.gif" alt="lvda" width={600} height={400} />
          </div>
        </div>
        <div className="md:w-1/2 md:ml-8">
          <p className="text-xl text-gray-400 font-bold mb-2">About</p>
          <p className="text-lg text-gray-400 mb-4">
          Embark on an educational gaming experience that seamlessly blends entertainment and learning, aiming to enlighten users about the concepts of water footprint and virtual water. Immerse yourself in engaging activities such as a memory game and three-in-a-row, designed to make the process of acquiring this knowledge both enjoyable and impactful.
          </p>
        <div className="mb-4">
        </div>
        <div className="mb-4">
              <p className="text-xl text-gray-400 font-bold">Download</p>
              <p className="text-lg text-gray-400 mt-2">
                Link to download the game <a href="https://play.google.com/store/apps/details?id=com.CORE.VigilantesDelAgua&hl=es_MX&gl=US" target="_blank" rel="noopener noreferrer"><strong>here</strong></a>
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project16;
