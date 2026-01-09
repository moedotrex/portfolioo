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
          <video width="100%" height="auto" controls>
              <source src="/images/Expressionfinalvideo.mp4" type="video/mp4" /> 
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-md text-gray-500 mb-4">
          Promotional video
          </p>
          <p className="text-xl text-gray-400 font-bold mb-2">Narrative</p>
          <p className="text-lg text-gray-400 mb-4">
          My main contribution for the project was as the Narrative Designer. I was in charge of creating a compelling story that would help teach about Freedom of Speech to University students.

          </p>
        <p className="text-xl text-gray-400 font-bold mb-2">Other Contributions</p>
          <p className="text-lg text-gray-400 mb-4">
          I also made some of the 2D backgrounds, as well as concept sketches and storyboards for some of the game&apos;s cutscenes.
          </p>
        <div className="mb-4">
        <Image src="/images/wotbrig.png" alt="wotbrig" width={700} height={500} />
        </div>
        <p className="text-md text-gray-500 mt-2">Flower rig made in Blender</p>
        </div>
        <div className="md:w-1/2 md:ml-8">
          <p className="text-xl text-gray-400 font-bold mb-2">About</p>
          <p className="text-lg text-gray-400 mb-4">
          Speak You Heart is a transformational game that explores freedom of speech and academic freedom within a campus environment. Topics such as the definition of hate speech, the importance of context in expression, the influence of social norms on speech, and the necessity of controversial discussions for academic growth will be introduced and examined. 
          Through interactive storytelling and choice-driven gameplay, players navigate conflicts between student groups engaging in conversations with representations of “law”, “school policy”, and “social norms”, each offering different perspectives and solutions. By blending a transformational framework with engaging gameplay, the experience raises awareness of how words have consequences in academic and societal settings. 
          </p>
          <div className="mb-4">
        <Image src="/images/MenuSYH.png" alt="menuSYH" width={700} height={500} />
        </div>
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
          This was a team project made for Carnegie Mellon University&apos;s Entertainment Technology Center. We were a team of 6 working on this for a semester.
          </p>
          <div className="text-lg text-gray-400 mb-4">
                <li>Narrative by Moe Aguilar and Kailun Deng</li>
                <li>Art by Moe Aguilar, Enn Ruan and Lutong He</li>
                <li>UI/UX by Jiwon Park</li>
                <li>Music by Kailun Deng</li>
                <li>Programming by Jack Chou</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project24;
