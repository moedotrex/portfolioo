"use client"
import React from 'react';
import dynamic from 'next/dynamic';
const Image = dynamic(() => import('next/image'), { ssr: false });

const Project27 = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-4">The Billy Joe Jive Experience</h1>
      <div className="mb-8 flex flex-col md:flex-row items-start">
        <div className="md:w-1/2">
          <div className="mb-4">
          <video width="100%" height="auto" controls>
              <source src="/images/Finalbjjvideo.mp4" type="video/mp4" /> 
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-md text-gray-500 mb-4">
          Promotional video
          </p>
          <p className="text-xl text-gray-400 font-bold mb-2">Narrative</p>
          <p className="text-lg text-gray-400 mb-4">
          I was responsible for the entire story, characters, and dialogue. My goal was to build a "cold case" mystery for kids that used 1980s graffiti culture as a rich, educational backdrop.
          <li><strong>Story & Worldbuilding:</strong> Created the central premise where modern-day kid detectives Billy Jo Jive and Smart Susie Sunset investigate the decades-old disappearance of a graffiti artist's spray cans. This structure let us explore history while keeping the story active and relatable.</li>
          <li><strong>Character Creation:</strong> Designed the full cast of original characters, including the legendary artist Queen G and the members of two rival graffiti crews. Each character had a distinct personality, artistic style, and potential motive for players to investigate.</li>
          <li><strong>Dialogue Script:</strong> Wrote all in-game audio (approx. 70 clips), giving each character a unique voice with period-appropriate slang. I also crafted all the supportive guidance from Billy and Susie to mentor players without giving away solutions.</li>
          <li><strong>Narrative-Driven Design:</strong> Made sure every puzzle served the story. For example, I designed the key "Graffiti Code" puzzle where solving a scattered mural reveals a hidden character message, teaching visual literacy and art history as detective skills.</li>
          </p>
          <p className="text-lg text-gray-400 mb-4">
          Link to read some of the narrative I wrote <a href="https://docs.google.com/document/d/1LSOkdZ3wWPEHJaE4JHX1BXUZHVPuMtrSNQlur2qLU20/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><strong>here</strong></a>
          </p>
          <div className="mb-4">
        <Image src="/images/wotbsketches.PNG" alt="wotbsketches" width={700} height={500} />
        </div>
        <p className="text-md text-gray-500 mt-2 mb-3">Early concept sketches</p>
        <p className="text-xl text-gray-400 font-bold mb-2">Other Contributions</p>
          <p className="text-lg text-gray-400 mb-4">
            Besides Narrative, I also helped with some Art tasks.
                <li><strong>Animatics:</strong> Created the 2D animated videos that introduced the story and concluded the experience.</li>
                <li><strong>Game Design:</strong> Helped structure the three-phase investigation flow and clue distribution system.</li>
                <li><strong>2D Art:</strong> Produced several of the graffiti art pieces used as physical clues, each styled for a specific character.</li>
                <li><strong>VFX/Shaders:</strong> Developed glow/highlight effects in Unity for the AR viewer to guide player attention to clues.</li>
          </p>
        <div className="mb-4">
        <Image src="/images/wotbrig.png" alt="wotbrig" width={700} height={500} />
        </div>
        <p className="text-md text-gray-500 mt-2">Flower rig made in Blender</p>
        </div>
        <div className="md:w-1/2 md:ml-8">
          <p className="text-xl text-gray-400 font-bold mb-2">About</p>
          <p className="text-lg text-gray-400 mb-2">
          The Billy Jo Jive Experience was a semester long project to revive the 1970s Sesame Street characters, Billy Jo Jive and Smart Susie Sunset, for a modern audience. Our challenge was to create an interactive experience that preserved the IP's core values literacy, positive representation, and community problem solving while engaging today's 10 to 12 year olds. </p>
          <p className="text-lg text-gray-400 mb-4">
          We designed and built a 30 minute, narrative driven location based mystery (akin to a wholesome escape room). Participants were recruited into Jive and Sunset's "Crime Lab" to solve a decades old cold case: the theft of legendary graffiti artist Queen G's iconic spray cans. The experience uniquely blended physical props (a rotary phone, UV flashlight, case files) with digital tools (a Tilt5 AR viewer for virtual location scouting) to create a fun, investigative adventure.</p>
          <div className="mb-2"style={{ display: 'flex', gap: '5px' }}>
            <Image src="/images/wotbhappyyes.gif" alt="wotbhappyyes" className="w-full mb-2 h-auto" style={{ maxWidth: 330, height: 'auto' }} />
            <Image src="/images/wotbsadyes.gif" alt="wotbsadyes" className="w-full mb-2 h-auto" style={{ maxWidth: 330, height: 'auto' }} />
        </div>
        <div className="mb-2"style={{ display: 'flex', gap: '5px' }}>
            <Image src="/images/wotbno.gif" alt="wotbno" className="w-full mb-2 h-auto" style={{ maxWidth: 330, height: 'auto' }} />
            <Image src="/images/wotbsadno.gif" alt="wotbsadno" className="w-full mb-2 h-auto" style={{ maxWidth: 330, height: 'auto' }} />
        </div>
        <p className="text-md text-gray-500 mt-2 mb-3">Flower Animations</p>
        <div className="mb-2"style={{ display: 'flex', gap: '5px' }}>
            <Image src="/images/wotbsparkles.gif" alt="wotbsparkles" className="w-full mb-2 h-auto" style={{ maxWidth: 330, height: 'auto' }} />
            <Image src="/images/wotbquestion.gif" alt="wotbquestion" className="w-full mb-2 h-auto" style={{ maxWidth: 330, height: 'auto' }} />
        </div>
        <p className="text-md text-gray-500 mt-2">Flower VFX</p>

        <p className="text-xl text-gray-400 font-bold mb-2 mt-2">Physical Setting</p>
          <p className="text-lg text-gray-400 mb-4">
          To fully engage the guest&apos;s senses, we provided tea and snacks, corresponding to each flower&apos;s story. The table for the tea party was decorated to feel magical and floral.
          </p>
          <div className="mb-4">
        <Image src="/images/wotbtable.jpg" alt="wotbtable" width={700} height={500} />
        </div>
        <p className="text-xl text-gray-400 font-bold mb-2 mt-2">The Team</p>
          <p className="text-lg text-gray-400 mb-4">
          This project was created for the Visual Story class in Carnegie Mellon&apos;s Master of Entertainment Technology program. It was developed in approximately two months by a team of six.
          </p>
          <div className="text-lg text-gray-400 mb-4">
                <li>Art by Moe Aguilar, Harley Xu and Eunyoung Park</li>
                <li>Programming by Ethan Zhu and Vector Liu</li>
                <li>Story by Moe Aguilar and Joshua Kaplan</li>
                <li>Props by Moe Aguilar and Joshua Kaplan</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project27;
