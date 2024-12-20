import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    id: 1,
    type: "web-design",
    name: "Foundations of User Experience ...",
    sourse: "Google",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/cer.jpeg",
    link: "#",
  },
  {
    id: 2,
    type: "mobile-app",
    name: "Start the UX Design Process: Emp..",
    sourse: "Google",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/cer2.jpeg",
    link: "#",
  },
  {
    id: 3,
    type: "mobile-app",
    name: "Start the UX Design Process: Emp..",
    sourse: "Udemy",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/cer3.png",
    link: "#",
  },
];
const Achievements = () => {
  const [activeSection, setActiveSection] = useState("all");
  const [projects, setProjects] = useState(projectData);

  const handleLinkClick = (section) => {
    // filter projects based on section
    if (section === "all") {
      setProjects(projectData);
      setActiveSection(section);
      return;
    }
    const filteredProjects = projectData.filter(
      (project) => project.type === section
    );
    setActiveSection(section);
    setProjects(filteredProjects);
  };

  return (
    <div>
      <h1 className="text-white md:text-[58px] text-[24px] text-center font-extrabold leading-[1.005] opacity-30 tracking-[1.16px] backdrop-blur-[50px]">
        Projects
      </h1>
      <div className="flex flex-wrap gap-2 justify-center lg:justify-center lg:mx-auto  my-10 px-4">
        <button
          className={`rounded-md border border-white/10 bg-gradient-to-br from-white/5 to-white/0 shadow-[0_4px_20px_0_rgba(47,24,108,0.1),0_4px_20px_-1px_rgba(0,0,0,0.25)] backdrop-blur-lg md:px-5 px-3 md:py-2.5 py-1.5 md:text-lg text-sm md:font-samibold font-normal font-geist hover:bg-slate-100 hover:text-slate-900 transition-all duration-500 ${
            activeSection === "all"
              ? "bg-slate-100 text-slate-900"
              : "text-white"
          }`}
          onClick={() => handleLinkClick("all")}
        >
          View All
        </button>
        <button
          className={`rounded-md border border-white/10 bg-gradient-to-br from-white/5 to-white/0 shadow-[0_4px_20px_0_rgba(47,24,108,0.1),0_4px_20px_-1px_rgba(0,0,0,0.25)] backdrop-blur-lg md:px-5 px-3 md:py-2.5 py-1.5 md:text-lg text-sm md:font-samibold font-normal font-geist hover:bg-slate-100 hover:text-slate-900 transition-all duration-500 ${
            activeSection === "web-design"
              ? "bg-slate-100 text-slate-900"
              : "text-white"
          }`}
          onClick={() => handleLinkClick("web-design")}
        >
          Web Design
        </button>
        <button
          className={`rounded-md border border-white/10 bg-gradient-to-br from-white/5 to-white/0 shadow-[0_4px_20px_0_rgba(47,24,108,0.1),0_4px_20px_-1px_rgba(0,0,0,0.25)] backdrop-blur-lg md:px-5 px-3 md:py-2.5 py-1.5 md:text-lg text-sm md:font-samibold font-normal font-geist hover:bg-slate-100 hover:text-slate-900 transition-all duration-500 ${
            activeSection === "mobile-app"
              ? "bg-slate-100 text-slate-900"
              : "text-white"
          }`}
          onClick={() => handleLinkClick("mobile-app")}
        >
          Mobile App
        </button>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              activeSection={activeSection}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
