"use client"
import React from 'react';
import dynamic from 'next/dynamic';
const Image = dynamic(() => import('next/image'), { ssr: false });

const Project8 = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-4">Morning Star</h1>
      <div className="mb-8 flex flex-col md:flex-row items-start">
        <div className="md:w-1/2">
        <div className="mb-3">
            <video width="100%" height="auto" controls>
              <source src="/images/morningstar.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
        </div>
        <p className="text-md text-gray-500 mb-4">Final Teaser</p>
          <p className="text-md text-gray-500 mb-4">
            Game demo for my Visual Development Specialization semester in university. I had the role of Director and Lead Programmer in a group of 5 students.
          </p>
          <div className="mb-4">
          <p className="text-xl text-gray-400 font-bold mb-4">Concept Art</p>
          <Image src="/images/msp.gif" alt="mss2" width={600} height={400} />
          </div>
          <div className="mb-4">
          <Image src="/images/msc1.png" alt="msc1" width={600} height={400} />
          </div>
          <Image src="/images/msc2.png" alt="msc2" width={600} height={400} />
          <div className="mb-4 mt-4">
          <Image src="/images/msc3.png" alt="msc3" width={600} height={400} />
          </div>
          <div>
          <p className="text-xl text-gray-400 font-bold mb-4 mt-4">Characters</p>
          <p className="text-lg text-gray-400 mb-3">
          A-27: Devoting his life to science, A-27, the alien scientist, may appear whimsical at first glance, but beneath the surface lies a keen intellect and rational mind. Despite his kindness and passion for his work, these traits occasionally lead to precarious situations, prompting B-34 to play the role of protector and rescuer.
          </p>
          <p className="text-lg text-gray-400 mb-4">
          B-34: In contrast to A-27, B-34 is a robust and vigilant soldier on a mission to investigate and colonize Earth. With a rugged appearance and heightened situational awareness, he epitomizes loyalty and hard work. Despite projecting a cold and distant demeanor, B-34 is driven by an unwavering commitment to safeguard his partner and friend at any cost, relying on his formidable strength and durability as a soldier.
          </p>
          </div>
          <div>
          
          
          </div>
          <div className="mb-4">
          <p className="text-xl text-gray-400 font-bold mb-4 mt-4">Game Demo</p>
          <p className="text-lg text-gray-400 mb-4">
            The demo was developed in Unity, with models and textures made in Blender.
          </p>
          <div className="mb-4"style={{ display: 'flex', gap: '5px' }}>
            <Image src="/images/msu2.png" alt="msu2" width={300} height={200} />
            <Image src="/images/msu1.png" alt="msu1" width={300} height={200} />
          </div>
          <div className="mb-4">
          <Image src="/images/b34.gif" alt="b34" width={600} height={400} />
          <p className="text-md text-gray-500 mb-4">Toon Shader and 3D model by me</p>
          </div>
          <Image src="/images/mslevel.png" alt="mslevel" width={600} height={400} />
          <p className="text-md text-gray-500 mb-4">Level Design</p>
          </div>
        </div>
        <div className="md:w-1/2 md:ml-8">
          <p className="text-xl text-gray-400 font-bold mb-4">Story</p>
          <p className="text-lg text-gray-400 mb-4">
          A27, an impassioned scientist, and B34, a devoted soldier, find themselves on a crucial mission to Earth. Their task is to unravel the enigmatic reasons behind human extinction and the planet&apos;s ongoing decay. The urgency lies in their race&apos;s quest to colonize Earth before a rival empire claims it, all while racing against the Earth&apos;s impending self-destruction.
          Throughout their expedition, the duo encounters a series of challenges that not only require their collaborative efforts but also forge a deeper connection between them. As they navigate the complexities of their mission, A27 and B34 undergo personal growth, fostering a strengthened bond that becomes essential to the success of their interstellar endeavor.
          </p>
          <div className="mb-4">
          <p className="text-xl text-gray-400 font-bold mb-4">Storyboard</p>
          <Image src="/images/mss1.png" alt="mss1" width={600} height={400} />
          </div>
          <div className="mb-3">
          <Image src="/images/mss2.png" alt="mss2" width={600} height={400} />
          </div>
          <div className="mb-4">
          <Image src="/images/mss3.png" alt="mss3" width={600} height={400} />
          </div>
          <div className="mb-4">
          <p className="text-xl text-gray-400 font-bold mb-4 mt-4">Final Character Models</p>
          <Image src="/images/mschar1.png" alt="mschar1" width={600} height={400} />
          </div>
          <Image src="/images/mschar2.png" alt="mschar2" width={600} height={400} />
          <div>
          <p className="text-xl text-gray-400 font-bold mb-4 mt-4">Objective</p>
          <p className="text-lg text-gray-400 mb-4">
          Through our project, we aim to provoke contemplation on current human actions and the potential consequences if we persist on a destructive trajectory, impacting both society and the environment. Our project serves as a poignant mirror reflecting Earth in a degenerative state, a consequence of relentless exploitation.
          This theme is underscored by our alternative endings: In the &apos;good&apos; conclusion, Earth is salvaged, offering a glimpse of hope; contrastingly, the &apos;bad&apos; ending depicts aliens mirroring humanity&apos;s destructive path, resulting in their eventual downfall. These divergent outcomes serve as narrative devices, prompting viewers to reflect on the consequences of our actions and consider alternative paths forward.
          </p>
          </div>
          <p className="text-xl text-gray-400 font-bold mb-4 mt-4">Earlier Concept Art</p>
          <p className="text-lg text-gray-400 mb-4">
            The original concepts of our alien characters were more humanoid, but we later switched the design to fit a cuter vibe.
          </p>
          <div className="mb-2"style={{ display: 'flex', gap: '5px' }}>
            <Image src="/images/mse4.png" alt="mse4" width={300} height={200} />
            <Image src="/images/ms3.png" alt="ms3" width={300} height={200} />
          </div>
          <div className="mb-2"style={{ display: 'flex', gap: '5px' }}>
            <Image src="/images/mse2.png" alt="mse2" width={300} height={200} />
            <Image src="/images/mse1.png" alt="mse1" width={300} height={200} />
          </div>
          <div className="mb-2"style={{ display: 'flex', gap: '5px' }}>
            <Image src="/images/mse6.png" alt="mse6" width={300} height={200} />
            <Image src="/images/mse5.png" alt="mse5" width={300} height={200} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project8;
