import React from 'react';
import Image from 'next/image';

const Project9 = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-4">Brujeria (Animatic)</h1>
      <div className="mb-8 flex flex-col md:flex-row items-start">
        <div className="md:w-1/2">
        <div className="mb-3">
            <video width="100%" height="auto" controls>
              <source src="/images/brujeria.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-md text-gray-500 mt-2">Final Video</p>
        </div>
        <div className='mb-4'>
        <p className="text-lg text-gray-400 mb-4">
          This project was for a university class on Visual Narrative, I created the characters and the story, wrote the script and directed the voice actors.
          </p>
        </div>
        <div>
        <p className="text-xl text-gray-400 font-bold mb-2">Characters</p>
        <p className="text-lg text-gray-400 mb-4">
          Kai & Eli.
          </p>
        </div>
        <div className="mb-4">
        <Image src="/images/bruj1.png" alt="bruj1" width={600} height={400} />
        </div>
        </div>
        <div className="md:w-1/2 md:ml-8">
          <p className="text-xl text-gray-400 font-bold mb-2">About</p>
          <p className="text-lg text-gray-400 mb-4">
          In this whimsical animatic, two witch trainees wrap up their day at a magical shop in a universe where witches are commonplace. The newest hire, Kai, intrigued by divination, persuades Eli to read him some tarot cards to practice her skills. Although Eli hesitates, wary of Kai's history of readings going awry, his kindness prevails, and he reluctantly agrees. Little do they both know, Kai's persistent curiosity leads to yet another comical disaster during the reading.
          </p>
        <div className="mb-4">
        <Image src="/images/bruj2.png" alt="bruj2" width={600} height={400} />
        </div>
        <div className="mb-4">
        <Image src="/images/bruj3.png" alt="bruj3" width={600} height={400} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Project9;