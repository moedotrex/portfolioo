"use client"
import React from 'react';
import dynamic from 'next/dynamic';
const Image = dynamic(() => import('next/image'), { ssr: false });

const Project26 = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-4">Purrject Rebuild</h1>
      <div className="mb-8 flex flex-col md:flex-row items-start">
        <div className="md:w-1/2">
        <div className="mb-2">
          <video width="100%" height="auto" controls>
              <source src="/images/purrjectrebuildvideo.mp4" type="video/mp4" /> 
              Your browser does not support the video tag.
            </video>
          </div>
        <p className="text-md text-gray-500 mb-4">
          Gameplay Clips
          </p>
          <p className="text-xl text-gray-400 font-bold mb-2">Narrative</p>
          <p className="text-lg text-gray-400 mb-4">
          As the narrative lead, I worked closely with autism consultants to shape the story, characters, and lore of Purrject Rebuild. I built the core theme that a civilization succeeds when different minds work together and expressed it through three autistic characters: The Architect, who values precision and routine; The Curator, who is a pattern-seeker with sensory sensitivity; and The Explorer, who experiences time-blindness and hyperfocus. I wrote their dialogue, designed their personal journeys to feel authentic and avoid stereotypes, and developed the world's backstory from its creation myths to the reasons for its collapse. All of this was designed to teach empathy naturally through play, not through lectures.
          </p>
          <div className="mb-2">
        <Image src="/images/dialoguesgif.gif" alt="uefndialogue" width={700} height={500} />
        </div>
        <p className="text-md text-gray-500 mb-3">Dialogue System</p>
        <div className="mb-4">
        <Image src="/images/explosion1gif.gif" alt="explosion" width={700} height={500} />
        </div>
        <p className="text-md text-gray-500 mb-3">Explosion VFX and cutscene</p>

        <div className="mb-2"style={{ display: 'flex', gap: '10px' }}>
            <Image src="/images/explosiongif.gif" alt="explosion2" className="w-full mb-2 h-auto" style={{ maxWidth: 345, height: 'auto' }} />
            <Image src="/images/volcano.png" alt="volcano" className="w-full mb-2 h-auto" style={{ maxWidth: 345, height: 'auto' }} />
        </div>
        <p className="text-md text-gray-500">VFX made in Niagara and volcano model made with the LEGO Brick Editor</p>
        <div className="mt-2 mb-4">
        <Image src="/images/explosionassets.png" alt="explosionassets" width={700} height={500} />
        </div>
        <div className="mb-2">
        <Image src="/images/endinggif.gif" alt="ending" width={700} height={500} />
        </div>
        <p className="text-md text-gray-500 mt-2 mb-3">Ending credits cutscene</p>
        </div>
        <div className="md:w-1/2 md:ml-8">
          <p className="text-xl text-gray-400 font-bold mb-2">About</p>
          <p className="text-lg text-gray-400 mb-4">
            Purrject Rebuild is an exploration and building game designed in UEFN for both neurodivergent and neurotypical players. Set in a lost civilization that thrived through collaboration, players help a team of autistic archaeologists rebuild their world by completing sensory-friendly quests, accommodating unique needs, and uncovering a story centered on empathy and acceptance.
            </p>
        <div className="mb-4">
        <Image src="/images/landscape_comp.jpeg" alt="prbl" width={700} height={500} />
        </div>
        <p className="text-xl text-gray-400 font-bold mb-2 mt-2">Technical & Development Contributions</p>
          <p className="text-lg text-gray-400 mb-4">
            Using UEFN&apos;s Verse API and devices, I built the some gameplay systems including the quest tracking and management system that guides players through the island&apos;s three biomes. I programmed interactive NPC behaviors, such as the accommodation feature where players can give items like sunglasses to unlock new abilities and hints from characters. I also directed and put together the game&apos;s final cutscene, which features a custom LEGO volcano I built and animated with Niagara VFX for the eruption sequence. Additionally, I helped design the clean, low-stimulation user interface to ensure the game remained comfortable and accessible for all players.
          </p>
          <div className="mb-2">
        <Image src="/images/accommodationfortnitegif.gif" alt="accommodation" width={700} height={500} />
        </div>
          <div className="mb-1"style={{ display: 'flex', gap: '10px' }}>
            <Image src="/images/accommodationuefngif.gif" alt="accommodationgif2" className="w-full mb-2 h-auto" style={{ maxWidth: 345, height: 'auto' }} />
            <Image src="/images/accommodationassets.png" alt="accommodationassets" className="w-full mb-2 h-auto" style={{ maxWidth: 345, height: 'auto' }} />
        </div>
        <p className="text-md text-gray-500">UI made in UEFN</p>
        <p className="text-xl text-gray-400 font-bold mb-2 mt-2">The Team</p>
          <p className="text-lg text-gray-400 mb-4">
          This project was made in collaboration with Play Included, AT Autism and the ETC Outreach Team in Carnegie Mellon University.
          </p>
          <div className="text-lg text-gray-400 mb-4">
                <li>Narrative by Moe Aguilar</li>
                <li>Programming by Grace Rodriguez and Moe Aguilar</li>
                <li>Game Design by Jose Francisco Mireles</li>
                <li>Sound Design by Libby Egan</li>
          </div>
          <div className="mt-4">
              <p className="text-xl text-gray-400 font-bold">Play the game!</p>
              <p className="text-lg text-gray-400 mt-2">
                Link to play the game <a href="https://www.fortnite.com/creative/island-codes/6515-6041-6716?lang=en-US " target="_blank" rel="noopener noreferrer"><strong>here</strong></a>
              </p>
          </div>
          <div className="mt-4 mb-2">
        <Image src="/images/purrjectRebuildPoster.png" alt="prbposter" width={700} height={500} />
        </div>
        <p className="text-md text-gray-500 mt-2 mb-3">Project Poster</p>
        </div>
      </div>
    </div>
  );
};

export default Project26;
