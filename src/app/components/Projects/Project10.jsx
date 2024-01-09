"use client"
import React from 'react';
import dynamic from 'next/dynamic';
const Image = dynamic(() => import('next/image'), { ssr: false });

const Project10 = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-4">Little Orange&apos;s Remote School</h1>
      <div className="mb-8 flex flex-col md:flex-row items-start">
        <div className="md:w-1/2">
          <div className="mb-4">
            <Image src="/images/lors.png" alt="lors" width={600} height={400} />
          </div>
          <p className="text-md text-gray-500 mb-4">
            Game developed for the Women Game Jam 2020. I had the role of Background Artist, Concept Artist and Game Designer.
          </p>
          <p className="text-xl text-gray-400 font-bold mb-4">Game Overview</p>
          <p className="text-lg text-gray-400 mb-7">
          In this game, the player plays as a Teacher in a remote school (because of the pandemic), teaching students of different worlds through a Zuum/Doom class. Because it&apos;s online classes, you have noticed that some students have been really distracted, and haven&apos;t done that great in past exams.
          Your goal is to help all of your students pass this week&apos;s exam, but to achieve it you need to investigate which students aren&apos;t paying attention in class, and ask them to attend a pre-exam study class. Using visual cues and 1 on 1 video chats, the player will decide which students should take the extra class. You can only do one 1 on 1 video chat per day, so you need to be careful with which student you choose each day.
          </p>
          <div className="mb-4">
            <Image src="/images/lorstris.png" alt="lorstris" width={600} height={400} />
            <p className="text-md text-gray-500 mt-2 mb-15">Character Concepts</p>
          </div>
          <div className="mb-4 mt-6">
              <p className="text-xl text-gray-400 font-bold">Download</p>
              <p className="text-lg text-gray-400 mt-2 mb-4">
                Link to download the game <a href="https://valeriavalle.itch.io/lors" target="_blank" rel="noopener noreferrer"><strong>here</strong></a>
              </p>
          </div>
        </div>
        <div className="md:w-1/2 md:ml-8">
          <p className="text-xl text-gray-400 font-bold mb-4">Story</p>
          <p className="text-lg text-gray-400 mb-4">
          When a deadly virus strikes the galaxy, Little Orange is forced to go remote! As a new teacher to the school, you want to help your students pass their big upcoming exam, but you aren&apos;t very sure where to start. By investigating and communicating with your students, you hope to find out which ones are struggling the most; that way you can better prepare them before sending them to academic battle!
          </p>
          <p className="text-xl text-gray-400 font-bold mb-6">
            Background Art
          </p>
          <div className="mb-4">
            <Image src="/images/lors1.png" alt="lors1" width={600} height={400} />
          </div>
          <Image src="/images/lors2.png" alt="lors2" width={600} height={400} />
          <div className="mb-4 mt-4">
            <Image src="/images/lors3.png" alt="lors3" width={600} height={400} />
          </div>
          <Image src="/images/lors4.png" alt="lors4" width={600} height={400} />
        </div>
      </div>
    </div>
  );
};

export default Project10;
