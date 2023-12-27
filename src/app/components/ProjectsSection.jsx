// ProjectsSection.jsx
import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import ProjectLink from "./ProjectLink";
import Project1 from "./Projects/Project1";
import Project2 from "./Projects/Project2";
import Project3 from "./Projects/Project3";
import Project4 from "./Projects/Project4";
import Project5 from "./Projects/Project5";

import Project6 from "./Projects/Project6";
import Project7 from "./Projects/Project7";
import Project8 from "./Projects/Project8";
import Project9 from "./Projects/Project9";
import Project10 from "./Projects/Project10";
import Project11 from "./Projects/Project11";
import Project12 from "./Projects/Project12";
import Project13 from "./Projects/Project13";
import Project14 from "./Projects/Project14";
import Project15 from "./Projects/Project15";
import Project16 from "./Projects/Project16";
import Project17 from "./Projects/Project17";
import Project18 from "./Projects/Project18";

const projectsData = [
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
      image: "/images/projects/17.gif",
      tag: ["All", "Art"],
      previewUrl: "/Project17",
    },
    {
      id: 18,
      title: "Outer Friends (Pitch Bible)",
      description: "A group of alien friends going through adventures and facing the difficulties of entering adolescence living in an highly advanced galactic empire.",
      image: "/images/projects/18.png",
      tag: ["All", "Art"],
      previewUrl: "/Project18",
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