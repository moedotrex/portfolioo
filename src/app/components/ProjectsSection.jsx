// ProjectsSection.jsx
"use client"
import React, { useState, useRef } from "react";
import dynamic from 'next/dynamic'; 
import Link from 'next/link';
const ProjectCard = dynamic(() => import('./ProjectCard'), { ssr: false });
const ProjectTag = dynamic(() => import('./ProjectTag'), { ssr: false });
import { motion, useInView } from "framer-motion";
const ProjectLink = dynamic(() => import('./ProjectLink'), { ssr: false });
const Project1 = dynamic(() => import('./Projects/Project1'), { ssr: false });
const Project2 = dynamic(() => import('./Projects/Project2'), { ssr: false });
const Project3 = dynamic(() => import('./Projects/Project3'), { ssr: false });
const Project4 = dynamic(() => import('./Projects/Project4'), { ssr: false });
const Project5 = dynamic(() => import('./Projects/Project5'), { ssr: false });
const Project6 = dynamic(() => import('./Projects/Project6'), { ssr: false });
const Project7 = dynamic(() => import('./Projects/Project7'), { ssr: false });
const Project8 = dynamic(() => import('./Projects/Project8'), { ssr: false });
const Project9 = dynamic(() => import('./Projects/Project9'), { ssr: false });
const Project10 = dynamic(() => import('./Projects/Project10'), { ssr: false });
const Project11 = dynamic(() => import('./Projects/Project11'), { ssr: false });
const Project12 = dynamic(() => import('./Projects/Project12'), { ssr: false });
const Project13 = dynamic(() => import('./Projects/Project13'), { ssr: false });
const Project14 = dynamic(() => import('./Projects/Project14'), { ssr: false });
const Project15 = dynamic(() => import('./Projects/Project15'), { ssr: false });
const Project16 = dynamic(() => import('./Projects/Project16'), { ssr: false });
const Project17 = dynamic(() => import('./Projects/Project17'), { ssr: false });
const Project18 = dynamic(() => import('./Projects/Project18'), { ssr: false });
const Project19 = dynamic(() => import('./Projects/Project19'), { ssr: false });
const Project20 = dynamic(() => import('./Projects/Project20'), { ssr: false });
const Project21 = dynamic(() => import('./Projects/Project21'), { ssr: false });
const Project22 = dynamic(() => import('./Projects/Project22'), { ssr: false });
const Project23 = dynamic(() => import('./Projects/Project23'), { ssr: false });

const projectsData = [
  {
    id: 22,
    title: "Interstellar Countdown",
    description: "Cooperative game where players work together to control an alien device, using a physical box with Phidgets that represents an alien energy core.",
    image: "/images/projects/22.gif",
    tag: ["All", "Games"],
    previewUrl: "/Project22",
  },
  {
    id: 21,
    title: "Sakana Smash",
    description: "Multiplayer party game where players punch each other as fish in a fun, sushi-themed arena.",
    image: "/images/projects/21.gif",
    tag: ["All", "Games"],
    previewUrl: "/Project21",
  },
  {
    id: 20,
    title: "Monkeying Around",
    description: "A VR adventure game where players embody a monkey toy navigating a toy store's basement, using intuitive climbing mechanics.",
    image: "/images/projects/20.gif",
    tag: ["All", "Games", "AR/VR"],
    previewUrl: "/Project20",
  },
  {
    id: 19,
    title: "Hottie's Cream",
    description: "An ice cream scooping simulator designed with Xbox Adaptive Controllers.",
    image: "/images/icecreamgameplay.gif",
    tag: ["All", "Games"],
    previewUrl: "/Project19",
  },
  {
    id: 1,
    title: "Plantscape",
    description: "An isometric exploration and resource management game with eco-cyberpunk aesthetics.",
    image: "/images/projects/1.gif",
    tag: ["All", "Games"],
    previewUrl: "/Project1",
  },
    {
      id: 2,
      title: "Twitch Overlays",
      description: "Overlays made for my Twitch Channel.",
      image: "/images/projects/2.gif",
      tag: ["All", "Art"],
      previewUrl: "/Project2",
    },
    {
      id: 3,
      title: "Personal Illustrations",
      description: "Art I make in my free time.",
      image: "/images/projects/3.gif",
      tag: ["All", "Art"],
      previewUrl: "/Project3",
    },
    {
      id: 4,
      title: "Tleli and the Deep",
      description: "A 3D-adventure metroidvania videogame, set in The Deep, the mysterious place where people go after they die.",
      image: "/images/projects/4.gif",
      tag: ["All", "Games"],
      previewUrl: "/Project4",
    },
    {
      id: 5,
      title: "Chapaleto's Adventures Undersea",
      description: "Follow the adventures of our friendly protagonist, Chapaleto! A scuba kitten who has the task of recovering lost objects in the depths of the sea. Will he be able to find them all?",
      image: "/images/projects/5.gif",
      tag: ["All", "Games"],
      previewUrl: "/Project5",
    },
    {
      id: 6,
      title: "HoloLens 2 Applications",
      description: "3D multi-user experiences for the HoloLens 2, seamlessly synchronized via Spatial Anchors.",
      image: "/images/projects/6.gif",
      tag: ["All", "AR/VR"],
      previewUrl: "/Project6",
    },
    {
      id: 7,
      title: "So that's what that dream was about",
      description: "A short 3D walking simulator where you interact with objects in your room that remind you of something you dreamed about.",
      image: "/images/projects/7.gif",
      tag: ["All", "Games"],
      previewUrl: "/Project7",
    },
    {
      id: 8,
      title: "Morning Star",
      description: "Interstellar odyssey where two aliens unravel the mysteries of Earth's demise, racing against time and a rival empire.",
      image: "/images/projects/8.gif",
      tag: ["All", "Games"],
      previewUrl: "/Project8",
    },
    {
      id: 9,
      title: "Brujeria (Animatic)",
      description: "Two witch trainees reading tarot cards after work hours.",
      image: "/images/projects/9.gif",
      tag: ["All", "Art"],
      previewUrl: "/Project9",
    },
    {
      id: 10,
      title: "Little Orange's Remote School",
      description: "A bite-sized wholesome game about a teacher connecting with their students. The game will consist of third-person narration and dialogue between the characters, with point-and-click elements.",
      image: "/images/projects/10.gif",
      tag: ["All", "Games"],
      previewUrl: "/Project10",
    },
    {
      id: 11,
      title: "Cholula (Animatic)",
      description: "An unexpected night out with friends: where love, laughter, and unforeseen connections take center stage.",
      image: "/images/projects/11.gif",
      tag: ["All", "Art"],
      previewUrl: "/Project11",
    },
    {
      id: 12,
      title: "AKUYAKU AR Filter",
      description: "AR Instagram filters featuring the characters of the book AKUYAKU.",
      image: "/images/projects/12.gif",
      tag: ["All", "AR/VR"],
      previewUrl: "/Project12",
    },
    {
      id: 13,
      title: "Tleli and the Bow",
      description: "Bow and arrow VR expansion for Tleli and the Deep",
      image: "/images/projects/13.gif",
      tag: ["All", "AR/VR"],
      previewUrl: "/Project13",
    },
    {
      id: 14,
      title: "Piel Canela (Animation)",
      description: "Animated song project.",
      image: "/images/projects/14.gif",
      tag: ["All", "Art"],
      previewUrl: "/Project14",
    },
    {
      id: 15,
      title: "Victorian Character Design",
      description: "3 of the 7 deadly sins (Anger, Sloth and Pride) as characters in the Victorian Era.",
      image: "/images/projects/15.png",
      tag: ["All", "Art"],
      previewUrl: "/Project15",
    },
    {
      id: 16,
      title: "Los Vigilantes del Agua",
      description: "Educational game that seeks to teach users about the water footprint and virtual water. This learning is obtained through a memory game and three-in-a-row.",
      image: "/images/projects/16.gif",
      tag: ["All", "Games"],
      previewUrl: "/Project16",
    },
    {
      id: 17,
      title: "Alien Animation",
      description: "Short animation of an original character.",
      image: "/images/projects/17.GIF",
      tag: ["All", "Art"],
      previewUrl: "/Project17",
    },
    {
      id: 18,
      title: "Outer Friends (Pitch Bible)",
      description: "A group of alien friends going through adventures and facing the difficulties of entering adolescence living in an highly advanced galactic empire.",
      image: "/images/projects/18.PNG",
      tag: ["All", "Art"],
      previewUrl: "/Project18",
    },
    {
      id: 23,
      title: "Whispers of the Bloom",
      description: "Tea Party with sentient flowers.",
      image: "/images/projects/23.gif",
      tag: ["All", "Games"],
      previewUrl: "/Project23",
    },
  ];

  const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
      };

    const filteredProjects = projectsData.filter((project) =>
      project.tag.includes(tag)
    );

    const cardVariants = {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    };

  return (
    <div className="mx-0 md:mx-8">
    <section id="projects" style={{ marginTop: "6rem" }}>
    <h2 className="text-center text-4xl font-bold text-white mt-2 mb-1 md:mb-1">
        My Projects
    </h2>
    <div className="text-white flex flex-row justify-center items-center gap-2 py-6 mb-2">
    <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Games"
          isSelected={tag === "Games"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Art"
          isSelected={tag === "Art"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AR/VR"
          isSelected={tag === "AR/VR"}
        />
    </div>
    <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
          key={index}
          variants={cardVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 0.3, delay: index * 0.4 }}
        >
        <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              previewUrl={project.previewUrl}
        />
        </motion.li>
        ))}
    </ul>
    </section>
    </div>
  )
}

export default ProjectsSection;