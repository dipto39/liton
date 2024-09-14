import React, { useState } from "react";

const Manu = () => {
  const [activeSection, setActiveSection] = useState("/");
  const handleLinkClick = (section) => {
    setActiveSection(section);
    scrollToSection(section);
  };
  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <h1 className="heading-text mb-6"> My Resume</h1>
      <div className="text-[#FFF] text-lg font-geist font-semibold space-x-4">
        <button onClick={() => handleLinkClick("education")} className="py-3 px-4 rounded-[4px] border border-[rgba(255,255,255,0.1)] bg-gradient-to-br from-[rgba(217,217,217,0.04)] to-[rgba(255,255,255,0.01)] shadow-[0_4px_20px_0_rgba(47,24,108,0.1),0_4px_20px_-1px_rgba(0,0,0,0.25)] backdrop-blur-[20px] transition-all duration-300 ease-in-out hover:bg-[#F6F5F2] hover:text-[#1A3636] hover:shadow-[0_6px_30px_0_rgba(47,24,108,0.2),0_6px_30px_-1px_rgba(0,0,0,0.3)]">
          Education
        </button>
        <button onClick={() => handleLinkClick("exprerience")} className="py-3 px-4 rounded-[4px] border border-[rgba(255,255,255,0.1)] bg-gradient-to-br from-[rgba(217,217,217,0.04)] to-[rgba(255,255,255,0.01)] shadow-[0_4px_20px_0_rgba(47,24,108,0.1),0_4px_20px_-1px_rgba(0,0,0,0.25)] backdrop-blur-[20px] transition-all duration-300 ease-in-out hover:bg-[#F6F5F2] hover:text-[#1A3636] hover:shadow-[0_6px_30px_0_rgba(47,24,108,0.2),0_6px_30px_-1px_rgba(0,0,0,0.3)] ">
          Experience
        </button>
        <button onClick={() => handleLinkClick("projects")} className="py-3 px-4 rounded-[4px] border border-[rgba(255,255,255,0.1)] bg-gradient-to-br from-[rgba(217,217,217,0.04)] to-[rgba(255,255,255,0.01)] shadow-[0_4px_20px_0_rgba(47,24,108,0.1),0_4px_20px_-1px_rgba(0,0,0,0.25)] backdrop-blur-[20px] transition-all duration-300 ease-in-out hover:bg-[#F6F5F2] hover:text-[#1A3636] hover:shadow-[0_6px_30px_0_rgba(47,24,108,0.2),0_6px_30px_-1px_rgba(0,0,0,0.3)] ">
          Projects
        </button>
        <button onClick={() => handleLinkClick("workflow")} className="py-3 px-4 rounded-[4px] border border-[rgba(255,255,255,0.1)] bg-gradient-to-br from-[rgba(217,217,217,0.04)] to-[rgba(255,255,255,0.01)] shadow-[0_4px_20px_0_rgba(47,24,108,0.1),0_4px_20px_-1px_rgba(0,0,0,0.25)] backdrop-blur-[20px] transition-all duration-300 ease-in-out hover:bg-[#F6F5F2] hover:text-[#1A3636] hover:shadow-[0_6px_30px_0_rgba(47,24,108,0.2),0_6px_30px_-1px_rgba(0,0,0,0.3)]">
          Workflow
        </button>
      </div>
    </div>
  );
};

export default Manu;
