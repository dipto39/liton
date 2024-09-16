import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const navData = [
  {
    id: 1,
    image: "/nav1.svg",
    title: "Home",
    link: "home",
  },
  {
    id: 2,
    image: "/nav2.svg",
    title: "Education",
    link: "education",
  },
  {
    id: 3,
    image: "/nav3.svg",
    title: "Experience",
    link: "experience",
  },
  {
    id: 4,
    image: "/nav4.svg",
    title: "Projects",
    link: "projects",
  },
  {
    id: 5,
    image: "/nav3.svg",
    title: "Workflow",
    link: "workflow",
  },
];
const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const handleLinkClick = (section) => {
    setActiveSection(section);
    scrollToSection(section);
  };
  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex items-center py-4 justify-evenly h-full lg:w-[560px] md:w-[360px] w-full rounded-md bg-[rgba(21,21,21,0.7)] backdrop-blur-[15px]  duration-300 ease-in-out lg:mx-0 mx-auto transition-all">
      {navData.map((item) => (
        <div
          onClick={() => handleLinkClick(item?.link)}
          key={item.id}
          className={`relative p-[2px] rounded-lg hover:bg-gradient-to-r hover:from-[#d59f3a] hover:to-[#fff6a7] cursor-pointer transition-background duration-300 ease-in-out transition-background ${
            activeSection === item?.link
              ? "bg-gradient-to-r from-[#d59f3a] to-[#fff6a7]"
              : ""
          }`}
        >
          <div
            className={`w-[36px] h-[36px] rounded-full flex justify-center items-center bg-[#22212F] shadow-[1px_8px_20px_1px_rgba(255,243,13,0.2)]`}
          >
            <Image
              width={100}
              height={100}
              src={item.image}
              className="object-fill h-6 w-6"
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
