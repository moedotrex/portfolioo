import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

const VFXReel = () => {
  return (
    <section className=" mt-10 mb-15">
        <div className='col-span-7 place-self-center text-center'>
          <h1 className="text-white mb-6 text-4xl sm:text-6xl lg:text-6xl font-bold">
            Technical Art (VFX) Reel
            <video width="70%" height="auto" controls>
              <source src="/images/moevfxreel.mp4" type="video/mp4" />
              Your browser does not support the video tag.
        </video>
          </h1>
        </div>
      <div className="justify-center items-center mt-4">

      </div>
    </section>
  );
};

export default VFXReel;
