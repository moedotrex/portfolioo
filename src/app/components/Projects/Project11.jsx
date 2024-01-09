"use client"
import React from 'react';
import dynamic from 'next/dynamic';
const Image = dynamic(() => import('next/image'), { ssr: false });

const Project11 = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-4">Cholula (Animatic)</h1>
      <div className="mb-8 flex flex-col md:flex-row items-start">
        <div className="md:w-1/2">
        <div className="mb-3">
            <video width="100%" height="auto" controls>
              <source src="/images/cholula.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-md text-gray-500 mt-2">Final Animatic</p>
        </div>
        <div className='mb-4'>
        <p className="text-lg text-gray-400 mb-4">
          This project was for a university class on Sound Design, I created the characters and the story, wrote the script and even hired professional voice actors to give my characters life.
          </p>
        </div>
        <div>
        <p className="text-xl text-gray-400 font-bold mb-2">Sketches</p>
        </div>
        <div className="mb-4">
        <Image src="/images/cholu2.png" alt="bruj1" width={600} height={400} />
        </div>
        </div>
        <div className="md:w-1/2 md:ml-8">
          <p className="text-xl text-gray-400 font-bold mb-2">About</p>
          <p className="text-lg text-gray-400 mb-4">
          A group of friends set out for a night of fun, only to encounter unexpected twists. Val and Frankie, a couple, rendezvous with their friend Wen outside a nightclub. Wen&apos;s support helps Frankie shed inhibitions, allowing her to dance freely with Val. As the night progresses, Wen finds a potential romantic interest, and his friends rally to offer support and guidance in this unforeseen turn of events.
          </p>
        <div className="mb-4">
        <p className="text-xl text-gray-400 font-bold mb-4">Characters</p>
        <Image src="/images/cholu1.png" alt="cholu1" width={600} height={400} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Project11;