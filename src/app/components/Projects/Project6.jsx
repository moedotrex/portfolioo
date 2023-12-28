import React from 'react';
import dynamic from 'next/dynamic';
const Image = dynamic(() => import('next/image'), { ssr: false });

const Project6 = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-4">HoloLens 2 Applications</h1>
      <div className="mb-8 flex flex-col md:flex-row items-start">
        <div className="md:w-1/2">
        <div className="mb-3">
            <video width="100%" height="auto" controls>
              <source src="/images/hololens.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-md text-gray-500 mt-2">Ambulence demo for COMSA</p>
        </div>
        <div className="mb-4">
          <p className="text-xl text-gray-400 font-bold mb-2">Enhancing the Real Estate Showroom Sales Experience</p>
          <p className="text-lg text-gray-400 mb-4">
          The Proof of Concept (POC) made for Bosque Real elevates the presentation of urban elements, occupancy indicators, and sales and profitability details for apartments, land, and buildings. Through a realistic and interactive model, it enriches the mixed reality experience, providing a dynamic showcase of key information for a more engaging and immersive sales encounter.
          </p>
        </div>
        <div className="mb-4">
        <Image src="/images/holo2.gif" alt="holo2" width={600} height={400} />
        <p className="text-md text-gray-500 mt-2">AR solution for interior design and event layout</p>
        </div>
        </div>
        <div className="md:w-1/2 md:ml-8">
          <p className="text-xl text-gray-400 font-bold mb-2">About</p>
          <p className="text-lg text-gray-400 mb-4">
          I crafted a series of 3D multi-user experiences for the HoloLens 2, seamlessly synchronized using Azure Spatial Anchors. Leveraging Unity and Microsoft&apos;s Mixed Reality Toolkit SDK, I developed a user-friendly menu allowing you to select and deploy various holograms into your space. Notable apps in the lineup include an ambulance customization tool, streamlining remote ambulance orders, a showroom app for previewing furniture in new apartments, a smart buildings app for detailed land and apartment building information, and an event layout app for previewing interior designs before ordering items like chairs, tables, etc.
          </p>
          <div className="mb-4">
          <video width="100%" height="auto" controls>
              <source src="/images/hololens2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-md text-gray-500 mt-2">Showroom demo for Bosque Real</p>
          </div>
        <div className="mb-4">
        <Image src="/images/holo1.gif" alt="holo1" width={600} height={400} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Project6;