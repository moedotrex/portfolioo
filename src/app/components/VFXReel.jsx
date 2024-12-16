import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

const VFXReel = () => {
  return (
    <section className=" mt-20 mb-15">
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center'>
          <h1 className="text-white mb-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            Technical Art (VFX) Reel
          </h1>
        </div>
      </div>
    </section>
  );
};

export default VFXReel;
