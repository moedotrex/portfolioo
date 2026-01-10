"use client"
import React from 'react';
import dynamic from 'next/dynamic';
const Image = dynamic(() => import('next/image'), { ssr: false });

const Project24 = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-4">Speak Your Heart</h1>
      <div className="mb-8 flex flex-col md:flex-row items-start">
        <div className="md:w-1/2">
          <div className="mb-4">
        <Image src="/images/MenuSYH.png" alt="menuSYH" width={700} height={500} />
        </div>
          <p className="text-xl text-gray-400 font-bold mb-2">Narrative</p>
          <p className="text-lg text-gray-400 mb-4">
          My main contribution for the project was as the Narrative Designer. I was in charge of creating a compelling story that would help teach about Freedom of Speech to University students.
          </p>
          <p className="text-lg text-gray-400 mb-4">
          Link to read some of the dialogues I wrote <a href="https://docs.google.com/document/d/1XTormJp-BY20dMEzXp19X4_HPhhDVVrwjitg1J3JH3s/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><strong>here</strong></a>
          </p>
        <p className="text-xl text-gray-400 font-bold mb-2">Other Contributions</p>
          <p className="text-lg text-gray-400 mb-4">
          I also made some of the 2D backgrounds, as well as concept sketches and storyboards for some of the game&apos;s cutscenes.
          </p>
          <div className="mb-6">
        <Image src="/images/cmubg1.PNG" alt="cmubg1" width={700} height={500} />
        </div>
        <div className="mb-2">
        <Image src="/images/cmubg2.PNG" alt="cmubg2" width={700} height={500} />
        </div>
        <p className="text-md text-gray-500 mt-2 mb-3">Backgrounds I made</p>
          <p className="text-xl text-gray-400 font-bold mb-2">Awards and Recognition</p>
          <p className="text-lg text-gray-400 mb-4">
          This project was awarded Best Student-Developed Game in the 2025 Serious Games Showcase & Challenge (SGS&C) at I/ITSEC (Interservice / Industry Training, Simulation, and Education Conference) in Orlando, Florida.
          It was also showcased in the Serious Play Conference 2025 in Rochester, New York.
          </p>
          <div className="mb-4">
        <Image src="/images/beststudentgame.jpg" alt="beststudentgame" width={700} height={500} />
        </div>
        </div>
        <div className="md:w-1/2 md:ml-8">
        <p className="text-xl text-gray-300 font-bold mb-4">
          All words have consequences. The context the words are spoken in determine those consequences. What is legal? What is offensive? What is hate speech? When do words cross a line?  
          </p>
          <p className="text-xl text-gray-400 font-bold mb-2">About</p>
          <p className="text-lg text-gray-400 mb-4">
          Speak You Heart is a transformational game that explores freedom of speech and academic freedom within a campus environment. Topics such as the definition of hate speech, the importance of context in expression, the influence of social norms on speech, and the necessity of controversial discussions for academic growth will be introduced and examined. 
          Through interactive storytelling and choice-driven gameplay, players navigate conflicts between student groups engaging in conversations with representations of “law”, “school policy”, and “social norms”, each offering different perspectives and solutions. By blending a transformational framework with engaging gameplay, the experience raises awareness of how words have consequences in academic and societal settings. 
          </p>
          <div className="mb-2">
          <video width="100%" height="auto" controls>
              <source src="/images/Expressionfinalvideo.mp4" type="video/mp4" /> 
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-md text-gray-500 mb-4">
          Promotional video
          </p>
          <div className="mb-4">
        <Image src="/images/narrativeoverviewgif.gif" alt="narrativeoverviewgif" width={700} height={500} />
        </div>
        <p className="text-md text-gray-500 mt-2 mb-3">Narrative dialogues in Miro for easier visualization of the narrative branches</p>
        <div className="mb-4">
        <Image src="/images/cmumenuspgif.gif" alt="menuSYHgif" width={700} height={500} />
        </div>
        <div className="mb-2"style={{ display: 'flex', gap: '10px' }}>
            <Image src="/images/cmubg1spgif.gif" alt="cmubg1spgif" className="w-full mb-2 h-auto" style={{ maxWidth: 345, height: 'auto' }} />
            <Image src="/images/cmubg2spgif.gif" alt="cmubg2gif" className="w-full mb-2 h-auto" style={{ maxWidth: 345, height: 'auto' }} />
        </div>
        <p className="text-md text-gray-500 mt-2 mb-3">Speedpaints made in Procreate</p>
        <p className="text-xl text-gray-400 font-bold mb-2 mt-2">The Team</p>
          <p className="text-lg text-gray-400 mb-4">
          This was a team project made for Carnegie Mellon University&apos;s Entertainment Technology Center. We were a team of 6 working on this for a semester.
          </p>
          <div className="text-lg text-gray-400 mb-4">
                <li>Narrative by Moe Aguilar and Kailun Deng</li>
                <li>Art by Moe Aguilar, Enn Ruan and Lutong He</li>
                <li>UI/UX by Jiwon Park</li>
                <li>Music by Kailun Deng</li>
                <li>Programming by Jack Chou</li>
          </div>
          <div className="mt-6">
              <p className="text-xl text-gray-400 font-bold">Download and more!</p>
              <p className="text-lg text-gray-400 mt-2">
                <li>Link to download the game <a href="https://jackzhou-0523.itch.io/speak-your-heart" target="_blank" rel="noopener noreferrer"><strong>here</strong></a></li>
              </p>
              <p className="text-lg text-gray-400 mt-2">
                <li>Official project website plus a devlog can be found <a href="https://projects.etc.cmu.edu/expression/"><strong>here</strong></a></li>
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project24;
