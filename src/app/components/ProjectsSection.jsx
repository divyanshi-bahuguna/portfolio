"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Personal portfolio built with modern UI and animations.",
    image: "/images/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    tech: "Next.js • Tailwind • Framer Motion",
    features: [
      "Responsive design",
      "Animated sections",
      "Projects showcase"
    ]
  },
  {
    id: 2,
    title: "Astrology Application",
    description: "AI enabled astrology web application with predictions.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/divyaanshi83/astro-pandit-nexus",
    previewUrl: "https://www.astroashupandit.com",
    tech: "React • Node.js • AI APIs",
    features: [
      "Personalized predictions",
      "User-friendly UI",
      "Real-time responses"
    ]
  },
  {
    id: 3,
    title: "FindIt",
    description: "Helps students find lost items in campus.",
    image: "/images/evently.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/divyanshi-bahuguna/FindIt",
    previewUrl: "https://findit-lostnfound.netlify.app/",
    tech: "React • Firebase",
    features: [
      "Item reporting",
      "Search system",
      "User authentication"
    ]
  },
  {
    id: 4,
    title: "E-commerce Application",
    description: "Basic e-commerce website.",
    image: "/images/ecomzy.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://ecom-ezy.netlify.app/",
    tech: "React • Tailwind",
    features: [
      "Product listing",
      "Cart system",
      "Responsive layout"
    ]
  }
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
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "All"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        /> */}
        
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
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
