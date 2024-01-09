"use client"
import React from 'react';
import dynamic from 'next/dynamic';
const Image = dynamic(() => import('next/image'), { ssr: false });

const Project12 = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-4">AKUYAKU AR Filter</h1>
      <div className="mb-8 flex flex-col md:flex-row items-start">
        <div className="md:w-1/2">
        <div className="mb-3">
        <Image src="/images/akuyaku.gif" alt="ARpreview" width={600} height={400} />
            <p className="text-md text-gray-500 mt-2">Preview</p>
        </div>
        <div className='mb-4'>
        <Image src="/images/armetas.png" alt="ARmeta" width={600} height={400} />
        <p className="text-md text-gray-500 mt-2">I used Meta Spark Studio to create the filter.</p>
        </div>
        </div>
        <div className="md:w-1/2 md:ml-8">
          <p className="text-xl text-gray-400 font-bold mb-2">About</p>
          <p className="text-lg text-gray-400 mb-4">
          I created an augmented reality (AR) Instagram filter showcasing the characters from Claivett&apos;s book, &apos;AKUYAKU&apos;. This personalized gift serves as a promotional tool for my friend, the author, to generate buzz and engage their audience on social media in celebration of the book&apos;s release.
          </p>
        <div className="mb-4">
        <p className="text-xl text-gray-400 font-bold mb-2">Try it out</p>
        <p className="text-lg text-gray-400 mb-4">
          Scan the code below with the Instagram app camera to try it out.
          </p>
        <Image src="/images/akuyaku1.png" alt="ARcode" width={400} height={200} />
        </div>

        </div>
      </div>
    </div>
  );
};

export default Project12;
