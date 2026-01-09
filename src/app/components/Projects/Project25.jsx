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
          <div className="mb-2"style={{ display: 'flex', gap: '5px' }}>
            <Image src="/images/render-image.png" alt="finalrender" className="w-full mb-2 h-auto" style={{ maxWidth: 360, height: 'auto' }} />
            <Image src="/images/render.png" alt="render2" className="w-full mb-2 h-auto" style={{ maxWidth: 360, height: 'auto' }} />
        </div>
        <div className="mb-2"style={{ display: 'flex', gap: '5px' }}>
            <Image src="/images/model-image.png" alt="modelscotty" className="w-full mb-2 h-auto" style={{ maxWidth: 360, height: 'auto' }} />
            <Image src="/images/rasterize_image.png" alt="rasterizescotty" className="w-full mb-2 h-auto" style={{ maxWidth: 360, height: 'auto' }} />
        </div>
        <p className="text-md text-gray-500 mt-2 mb-3">The images above were created using my implementation of Scotty3D, showcasing its rendering and modeling capabilities.</p>
          <p className="text-xl text-gray-400 font-bold mb-2">About</p>
          <p className="text-lg text-gray-400 mb-4">
          Scotty3D is a 3D graphics software package built during Carnegie Mellon's 15-462 Computer Graphics course. It includes components for software rastization, interactive mesh editing, realistic path tracing, and dynamic animation. Implementing functionality in each of these areas constitutes the majority of the coursework for the class.
          </p>
        <p className="text-xl text-gray-400 font-bold mb-2">Reference</p>
          <p className="text-lg text-gray-400 mb-4">
          For reference: <a href="https://cmu-graphics.github.io/Scotty3D-docs/" target="_blank" rel="noopener noreferrer"><strong>CMU Scotty3D Documentation</strong></a>
          </p>
        </div>
        <div className="md:w-1/2 md:ml-8">
          <p className="text-xl text-gray-400 font-bold mb-2">Features Implemented</p>
          <p className="text-lg text-gray-400 mb-4">
              <li><strong>Interactive Mesh Processing</strong></li>
              Implemented mesh editing tools including triangulation, Loop subdivision, and isotropic remeshing, enabling real-time geometric modeling and smoothing.
              <li><strong>Dynamic Animation System</strong></li>
              Built forward and inverse kinematics (FK/IK) solvers with linear blend skinning for character animation. Integrated spline-based interpolation for smooth motion curves.
              <li><strong>Path Tracing Renderer</strong></li>
              Developed a physically-based path tracer with support for global illumination, realistic materials, and depth-of-field effects.
              <li><strong>Physics-Based Simulation</strong></li>
              Added simulation of dynamic systems to support physically plausible motion and deformation.
          </p>
          <div className="mb-4">
          <video width="100%" height="auto" controls>
              <source src="/images/animation.mp4" type="video/mp4" /> 
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-md text-gray-500 mb-4">
          Animation made with Scotty3D
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project25;
