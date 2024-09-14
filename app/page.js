"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Home from "./components/Home";
import Achievements from "./components/Achievements";
import Expert from "./components/Expert";
import Sidebar from "./components/Sidebar";
import Education from "./components/Education";
import Manu from "./components/Manu";
import WorkFlow from "./components/WorkFlow";
import { Footer } from "./components/Footer";

const Header = () => {
  const ContentDiv = useRef(null);
  
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = ContentDiv.current.scrollTop;

  //     const sections = document.querySelectorAll("section");

  //     sections.forEach((section) => {
  //       const sectionTop = section.offsetTop;
  //       const sectionHeight = section.offsetHeight;

  //       if (
  //         scrollPosition >= sectionTop - 50 && // Adjust the offset as needed
  //         scrollPosition < sectionTop + sectionHeight - 50 // Adjust the offset as needed
  //       ) {
  //         setActiveSection(section.id);
  //       }
  //     });
  //   };
  //   ContentDiv.current.addEventListener("scroll", handleScroll);
  //   return () => {
  //     ContentDiv.current.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   const handleUrlAnchorChange = () => {
  //     const sectionFromUrl = window.location.hash.substr(1);
  //     setActiveSection(sectionFromUrl);
  //   };

  //   window.addEventListener("hashchange", handleUrlAnchorChange);
  //   return () => {
  //     window.removeEventListener("hashchange", handleUrlAnchorChange);
  //   };
  // }, []);



  return (
    <div className="bg-[url('/bg.png')] bg-no-repeat bg-[length:100%_100%] flex h-screen">
     <Sidebar/>

      <div
        className="w-full text-white text-center mx-20 overflow-scroll scrollbar-hide"
        ref={ContentDiv}
        id="content"
      >
        <section className="my-28">     
          <Home />
        </section>
        <section  >
          <Manu />
        </section>
        <section id="education" className="mt-14 mb-28">
          <Education />
        </section>
        <section id="exprerience"  className="mt-14 mb-28">
          <Expert />
        </section>   
        <section id="projects" className="my-28" >
          <Achievements />
        </section>
        <section id="workflow" className="mt-14 mb-28">
          <WorkFlow />
        </section>    
        <section>
          <Footer />
        </section> 
      </div>
    </div>
  );
};

export default Header;
