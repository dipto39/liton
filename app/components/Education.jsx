import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Education = () => {
  const [activeSection, setActiveSection] = useState("education");

  const projects = [
    {
      id: 1,
      type: "web-design",
      name: "E-Commarce Landing Page",
      sourse: "dribbel",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/cer.jpeg",
      link: "#",
    },
    {
      id: 2,
      type: "mobile-app",
      name: "E-Commarce Landing Page",
      sourse: "dribbel",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/cer.jpeg",
      link: "#",
    },
    {
      id: 3,
      type: "codecayeon",
      name: "E-Commarce Landing Page",
      sourse: "dribbel",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/cer.jpeg",
      link: "#",
    },
  ];
  // const handleLinkClick = (section) => {
  //   setActiveSection(section);
  //   scrollToSection(section);
  // };
  // const scrollToSection = (section) => {
  //   const element = document.getElementById(section);
  //   element.scrollIntoView({ behavior: "smooth" });
  // };
  return (
    <>
      <div>
        <h1 className="text-white md:text-[58px] text-[24px] text-center font-extrabold leading-[1.005] opacity-30 tracking-[1.16px] backdrop-blur-[50px] mb-6"> My Resume</h1>
        <div className="text-[#FFF] md:text-lg text-sm font-geist font-semibold space-x-4 mb-8">
          <button
            onClick={() => setActiveSection("education")}
            className={`md:py-3 py-2 md:px-4 px-3 rounded-[4px] border border-[rgba(255,255,255,0.1)] bg-gradient-to-br from-[rgba(217,217,217,0.04)] to-[rgba(255,255,255,0.01)] shadow-[0_4px_20px_0_rgba(47,24,108,0.1),0_4px_20px_-1px_rgba(0,0,0,0.25)] backdrop-blur-[20px] transition-all duration-300 ease-in-out hover:bg-[#F6F5F2] hover:text-[#1A3636] hover:shadow-[0_6px_30px_0_rgba(47,24,108,0.2),0_6px_30px_-1px_rgba(0,0,0,0.3)] ${
              activeSection === "education"
                ? "bg-[#F6F5F2] text-[#1A3636] shadow-[0_6px_30px_0_rgba(47,24,108,0.2),0_6px_30px_-1px_rgba(0,0,0,0.3)]"
                : ""
            }`}
          >
            Education
          </button>
          <button
            onClick={() => setActiveSection("exprerience")}
            className={`md:py-3 py-2 md:px-4 px-3 rounded-[4px] border border-[rgba(255,255,255,0.1)] bg-gradient-to-br from-[rgba(217,217,217,0.04)] to-[rgba(255,255,255,0.01)] shadow-[0_4px_20px_0_rgba(47,24,108,0.1),0_4px_20px_-1px_rgba(0,0,0,0.25)] backdrop-blur-[20px] transition-all duration-300 ease-in-out hover:bg-[#F6F5F2] hover:text-[#1A3636] hover:shadow-[0_6px_30px_0_rgba(47,24,108,0.2),0_6px_30px_-1px_rgba(0,0,0,0.3)] ${
              activeSection === "exprerience"
                ? "bg-[#F6F5F2] text-[#1A3636] shadow-[0_6px_30px_0_rgba(47,24,108,0.2),0_6px_30px_-1px_rgba(0,0,0,0.3)]"
                : ""
            }`}
          >
            Experience
          </button>
          <button
            onClick={() => setActiveSection("achievements")}
            className={`md:py-3 py-2 md:px-4 px-3 rounded-[4px] border border-[rgba(255,255,255,0.1)] bg-gradient-to-br from-[rgba(217,217,217,0.04)] to-[rgba(255,255,255,0.01)] shadow-[0_4px_20px_0_rgba(47,24,108,0.1),0_4px_20px_-1px_rgba(0,0,0,0.25)] backdrop-blur-[20px] transition-all duration-300 ease-in-out hover:bg-[#F6F5F2] hover:text-[#1A3636] hover:shadow-[0_6px_30px_0_rgba(47,24,108,0.2),0_6px_30px_-1px_rgba(0,0,0,0.3)] ${
              activeSection === "achievements"
                ? "bg-[#F6F5F2] text-[#1A3636] shadow-[0_6px_30px_0_rgba(47,24,108,0.2),0_6px_30px_-1px_rgba(0,0,0,0.3)]"
                : ""
            }`}
          >
            Achievements
          </button>
        </div>
      </div>
      <div>
        {/* Education */}
        {activeSection === "education" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="border max-w-[1200px] mx-auto"
              style={{
                borderImage:
                  "radial-gradient(circle at 0% 50%, #081219, #081219, white) 1",
                animation: "borderImageAnimation 5s infinite",
              }}
            >
              <div className="flex md:flex-row flex-col justify-center items-center inset-0 rounded-md bg-[rgba(21,21,21,0.4)] backdrop-blur-[15px]">
                <div className="md:h-auto md:w-auto h-[200px] w-[200px]">
                  <img src="/edu.png"></img>
                </div>
                <div className="mx-[60px] my-[40px]">
                  <h1 className="text-white md:text-[42px] text-start text-2xl font-bold lg:mb-16 mb-5">
                    My Education
                  </h1>
                  <div className="flex gap-4">
                    <div className="border-dashed border-r-[1px] opacity-50 my-3"></div>
                    <div className="font-geist text-start space-y-6">
                      <div className="relative">
                        <span className="w-4 h-4 rounded-full bg-[#FFF] absolute -left-[24px] top-1"></span>
                        <h1 className="lg:text-[24px] text-lg font-semibold leading-[120%] tracking-[0.48px] text-[#e7e5e5]">
                          Govt Bangabandhu College, Khulna
                        </h1>
                        <h3 className="md:text-[18px] text-sm mt-2 mb-1 font-semibold leading-[120%] tracking-[0.48px] text-white text-opacity-[0.8]">
                          BBA in Marketing
                        </h3>
                        <p className="md:text-[16px] text-xs font-normal leading-[150%] tracking-[0.32px] text-white text-opacity-[0.8]">
                          2017-2021
                        </p>
                      </div>
                      <div className="relative">
                        <span className="w-4 h-4 rounded-full bg-[#FFF] absolute -left-[24px] top-1"></span>
                        <h1 className="lg:text-[24px] text-lg font-semibold leading-[120%] tracking-[0.48px] text-[#e7e5e5]">
                          Govt Bangabandhu College, Khulna
                        </h1>
                        <h3 className="md:text-[18px] text-sm mt-2 mb-1 font-semibold leading-[120%] tracking-[0.48px] text-white text-opacity-[0.8]">
                          BBA in Marketing
                        </h3>
                        <p className="md:text-[16px] text-xs font-normal leading-[150%] tracking-[0.32px] text-white text-opacity-[0.8]">
                          2017-2021
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* experience */}
        {activeSection === "exprerience" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="border"
              style={{
                borderImage:
                  "radial-gradient(circle at 0% 50%, #081219, #081219, white) 1",
                animation: "borderImageAnimation 5s infinite",
              }}
            >
              <div className="flex md:flex-row flex-col justify-center items-center inset-0 rounded-md bg-[rgba(21,21,21,0.4)] backdrop-blur-[15px]">
                <div className="flex-1 flex justify-center items-center md:h-auto md:w-auto h-[200px] w-[200px]">
                  <img src="/accivement.svg" className="md:-mt-20"></img>
                </div>
                <div className="mx-[60px] my-[40px] flex-1 text-start">
                  <h1 className="text-white md:text-[42px] text-2xl font-bold mb-6">
                    My Experience
                  </h1>
                  <div className="flex gap-4">
                    <div className="border-dashed border-r-[1px] opacity-50 my-3"></div>
                    <div className="font-geist text-start space-y-6">
                      <div className="relative">
                        <span className="w-4 h-4 rounded-full bg-[#FFF] absolute -left-[24px] top-1"></span>
                        <h1 className="lg:text-[24px] text-lg font-semibold leading-[120%] tracking-[0.48px] text-[#FFF]">
                          Product Designer | Emarge AI
                        </h1>
                        <h3 className="md:text-[18px] text-sm mt-2 mb-1 font-semibold leading-[120%] tracking-[0.48px] text-white text-opacity-[0.8]">
                          2024-Present
                        </h3>
                        <p className="text-[16px] font-normal leading-[150%] tracking-[0.32px] text-white text-opacity-[0.8]">
                          Welcome to Emerge AI, the forefront of AI-driven
                          wellness solutions. Headquartered in Beijing. At
                          Emerge AI, our mission is clear: to achieve AI-driven
                          wellness for all.
                        </p>
                      </div>
                      <div className="relative">
                        <span className="w-4 h-4 rounded-full bg-[#FFF] absolute -left-[24px] top-1"></span>
                        <h1 className="lg:text-[24px] text-lg font-semibold leading-[120%] tracking-[0.48px] text-[#FFF]">
                          Product Designer | Emarge AI
                        </h1>
                        <h3 className="md:text-[18px] text-sm mb-1 mt-2 font-semibold leading-[120%] tracking-[0.48px] text-white text-opacity-[0.8]">
                          2024-Present
                        </h3>
                        <p className="md:text-[16px] text-xs font-normal leading-[150%] tracking-[0.32px] text-white text-opacity-[0.8]">
                          Welcome to Emerge AI, the forefront of AI-driven
                          wellness solutions. Headquartered in Beijing. At
                          Emerge AI, our mission is clear: to achieve AI-driven
                          wellness for all.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* achievements */}
        {activeSection === "achievements" && (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                activeSection={activeSection}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Education;
