"use client";
import React from 'react';
import dynamic from 'next/dynamic';
const Image = dynamic(() => import('next/image'), { ssr: false });
const AboutSection = dynamic(() => import('./AboutSection'), { ssr: false });
const Link = dynamic(() => import('react-router-dom').then((mod) => mod.Link), { ssr: false });
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
  <section className="pb-2">
    <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I&apos;m {" "}
                </span>
                <br></br>
                <TypeAnimation
                sequence={[
                    'Moe',
                    1000,
                    'a Game Developer',
                    1000,
                    'an Artist',
                    1000,
                    'an AR Developer',
                    1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                />
            </h1>
            <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lf:text-xl'>
            An adept software developer and technical artist deeply enthusiastic about telling stories and the world of video games. Eagerly pursuing a compelling position in an ever-evolving gaming landscape, where I can apply my expertise to craft immersive and inventive gaming experiences for users.
            </p>
            <div>
            <Link to="/AboutSection">
                <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>
                    Learn More
                </button>
            </Link>
            <a
            href='public/MoeAguilar-CV2023.pdf'
            download={'MoeAguilar-CV2023.pdf'}
            >
                <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'>
                    <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                </button>
            </a>
            </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
            <div className='rounded-full bg-[#181818] w-[345px] h-[345px] lg:w-[445px] lg:h-[445px] relative'>
                <Image 
                src="/images/moeim.PNG"
                alt="moe image"
                className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                width={350}
                height={350}
                />
            </div>
        </div>
    </div>
  </section>
  );
};

export default HeroSection;