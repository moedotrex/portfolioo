"use client";
import React, { useTransition, useState } from "react";
import dynamic from 'next/dynamic';
const Image = dynamic(() => import('next/image'), { ssr: false });
const TabButton = dynamic(() => import('./TabButton'), { ssr: false });


const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Game Development: Unity, Unreal Engine 5</li>
        <li>Programming Languages: C#, C++, Python, Java, JavaScript</li>
        <li>2D Art: Illustration, Storyboarding, Character Design</li>
        <li>Augmented Reality</li>
        <li>Virtual Reality</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>B.A. in Animation and Digital Arts from Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM)</li>
        <li>Focus in Game Development and Interactive Experiences.</li>
      </ul>
    ),
  },
  {
    title: "Software",
    id: "software",
    content: (
      <ul className="list-disc pl-2">
        <li>Procreate</li>
        <li>Blender</li>
        <li>Photoshop</li>
        <li>After Effects</li>
        <li>Substance 3D</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16" style={{ marginTop: "5rem" }}>
      <div className="md:ml-auto mr-40"> {/* Adjust margin as needed */}
          <Image src="/images/aboutmoe1.PNG" width={500} height={500} />
        </div>
        <div className="mt-6 md:mt-00 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-5">About Me</h2>
          <p className="mr-6 text-base lg:text-lg">
                Hiya! My name is Moe, I am a digital artist and game developer, I&apos;m interested in storytelling, storyboarding, character design and programming.
                </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("software")}
              active={tab === "software"}
            >
              {" "}
              Software{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;