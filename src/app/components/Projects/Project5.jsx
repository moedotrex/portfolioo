"use client"
import React from 'react';
import dynamic from 'next/dynamic';
const Image = dynamic(() => import('next/image'), { ssr: false });

const Project5 = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-4">Chapaleto&apos;s Adventures Undersea</h1>
      <div className="mb-8 flex flex-col md:flex-row items-start">
        <div className="md:w-1/2">
        <div className="mb-4">
            <Image src="/images/chap.gif" alt="Chapaleto" width={610} height={400} />
          </div>
          <p className="text-md text-gray-500 mb-4">
            Game developed for the Global Game Jam 2021. I had the role of Art Director, Character Designer and Level Designer.
          </p>
          <div className="text-lg text-gray-400 mb-4">
            <p className="text-xl font-bold mb-3 mt-5">Level Design</p>
            Inspired by mazes, obstacles were placed so the player must move in various directions to go further down, and make them feel lost when they want to go up. It is seamlessly divided in 3 sections of depth, each one getting darker and wider than the previous one, also more dangerous creatures may be found below.
          </div>
          <Image src="/images/chapd1.PNG" alt="ChapDesign" width={6500} height={800} />
          <div className="w-full mb-4 mt-4 flex">
             <div className="w-1/2 pr-2">
              <img src="/images/chapdfinal.PNG" alt="Visuals" className="w-full mb-2 h-auto" style={{ maxHeight: 400, width: 'auto' }} />
              <p className="text-md text-gray-500 mb-4">Chapaleto Character Design Explorations</p>
             </div>
            <div className="w-1/2 pl-2">
              <img src="/images/chapd2.PNG" alt="Visuals" className="w-full mb-2 h-auto" style={{ maxHeight: 400, width: 'auto' }} />
            </div>
          </div>
          <div className="mb-4">
            <Image src="/images/chapcroc.PNG" alt="ChapCroc" width={610} height={400} />
            <p className="text-md text-gray-500 mt-2 mb-4">Crocodile Concepts</p>
          </div>
          <div className="mt-6">
              <p className="text-xl text-gray-400 font-bold">Download</p>
              <p className="text-lg text-gray-400 mt-2 mb-5">
                Link to download the game <a href="https://v3.globalgamejam.org/2021/games/chapaletos-adventures-undersea-4" target="_blank" rel="noopener noreferrer"><strong>here</strong></a>
              </p>
          </div>
        </div>
        <div className="md:w-1/2 md:ml-8">
          <p className="text-xl text-gray-400 font-bold mb-3">About</p>
          <p className="text-lg text-gray-400 mb-4">
          This small underwater 2D exploration game made in Unity puts you in the role of a diver cat which helps people who lost their stuff at the beach to recover it. You dive deep into the ocean with a radar looking for whatever people may have lost. The sea is dangerous though, and you’re equipped with a harpoon gun to fend off the threats of the deep unknown.
          </p>
          <div className="text-lg text-gray-400 mb-6">
            <p className="text-xl font-bold mb-3 mt-5">Gameplay</p>
            The goal of the game is to find 9 lost items in the ocean with your radar and deliver them back on the surface before the day ends, but you can only carry 3 items in your bag, so you have to make a few trips up and down. Delivering each item rewards you with points, which can be used to purchase upgrades that will help you explore and survive. These items are scattered through the level, including some trash, useless items which your radar will mistakenly identify as the required objects.
          </div>
          <div className="w-full mb-4 mt-4 flex">
             <div className="w-1/2 pr-2">
              <img src="/images/chapleveld.PNG" alt="Visuals" className="w-full mb-2 h-auto" style={{ maxHeight: 400, width: 'auto' }} />
              <p className="text-md text-gray-500 mt-2 mb-3">Level Design Concept</p>
             </div>
            <div className="w-1/2 pl-2">
              <img src="/images/chapleveld2.PNG" alt="Visuals" className="w-full mb-2 h-auto" style={{ maxHeight: 400, width: 'auto' }} />
            </div>
          </div>
          <div className="text-lg text-gray-400 mb-4">
            <p className="text-xl font-bold mb-3 mt-3">Character Design</p>
            Chapaleto draws inspiration from the Spanish term for swimming paddles, &apos;chapaletas&apos;, and our fondness for cats. Our aim was to bring to life charming and unforgettable characters that embody the whimsical idea of a scuba cat. To complement this playful concept, we introduced a beach-working crocodile boss and delightful fish residents dwelling at the ocean floor. While these underwater escapades unfold, beware of the less-than-adorable but certainly memorable sea monsters lurking nearby.
          </div>
          <div className="mb-4">
            <Image src="/images/chapfish.PNG" alt="ChapaletoFish" width={610} height={400} />
          </div>
          <div className="w-full mb-4 mt-4 flex">
             <div className="w-1/2 pr-2">
              <img src="/images/chapen.PNG" alt="Visuals" className="w-full mb-2 h-auto" style={{ maxHeight: 400, width: 'auto' }} />
              <p className="text-md text-gray-500 mt-2 mb-4">Character Concepts and Sprites</p>
             </div>
            <div className="w-1/2 pl-2">
              <img src="/images/chapspr.PNG" alt="Visuals" className="w-full mb-2 h-auto" style={{ maxHeight: 400, width: 'auto' }} />
            </div>
          </div>
            <div className="mb-3">
            <video width="100%" height="auto" controls>
              <source src="/images/chapaletogameplay.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-md text-gray-500 mt-2">Final Gameplay</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Project5;