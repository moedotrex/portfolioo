"use client"
import React from 'react';
import dynamic from 'next/dynamic';
const Image = dynamic(() => import('next/image'), { ssr: false });

const Project25 = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-4">Scotty 3D</h1>
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
          <p className="text-xl text-gray-400 font-bold mb-2">Features Implemented</p>
          <p className="text-lg text-gray-400 mb-4">
              <li>Interactive Mesh Processing</li>
              Implemented mesh editing tools including triangulation, Loop subdivision, and isotropic remeshing, enabling real-time geometric modeling and smoothing.
              <li>Dynamic Animation System</li>
              Built forward and inverse kinematics, FK/IK, solvers with linear blend skinning for character animation. Integrated spline-based interpolation for smooth motion curves.
              <li>Path Tracing Renderer</li>
              Developed a physically-based path tracer with support for global illumination, realistic materials, and depth-of-field effects.
              <li>Physics-Based Simulation</li>
              Added simulation of dynamic systems to support physically plausible motion and deformation.
          </p>
          <div className="mb-4">
        <Image src="/images/wotbsketches.PNG" alt="wotbsketches" width={700} height={500} />
        </div>
        <p className="text-md text-gray-500 mt-2 mb-3">Early concept sketches</p>
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
          Scotty3D is a 3D graphics software package built during Carnegie Mellon's 15-462 Computer Graphics course. It includes components for software rastization, interactive mesh editing, realistic path tracing, and dynamic animation. Implementing functionality in each of these areas constitutes the majority of the coursework for the class.
          </p>
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
          <div className="mb-4">
        <Image src="/images/wotb6lives.GIF" alt="wotb6lives" width={700} height={500} />
        </div>
        <p className="text-md text-gray-500 mt-2">Animated logo I made for our team</p>
        </div>
      </div>
    </div>
  );
};

export default Project25;
