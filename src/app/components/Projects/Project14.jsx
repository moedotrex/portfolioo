import React from 'react';
import Image from 'next/image';

const Project14 = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-4">Piel Canela (Animation)</h1>
      <div className="mb-8 flex flex-col md:flex-row items-start">
        <div className="md:w-1/2">
        <div className="mb-3">
            <video width="100%" height="auto" controls>
              <source src="/images/pielcanela.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        </div>
        <p className="text-md text-gray-500 mb-4"></p>
        Song by Mi Sobrino Memo.
          <p className="text-md text-gray-500 mb-4">
          
          </p>
          <div className="mb-6">
          </div>
        </div>
        <div className="md:w-1/2 md:ml-8">
          <p className="text-xl text-gray-400 font-bold mb-4">About</p>
          <p className="text-lg text-gray-400 mb-4">
            Crafted as a heartfelt personal project for a cherished individual, this animation came to life through the artistic medium of Procreate for the drawings and After Effects for the seamless animation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project14;
