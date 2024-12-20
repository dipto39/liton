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
import Navbar from "./components/Navbar";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Workdynamic from "./components/test";
import { motion } from "framer-motion";
const Header = () => {
  const ContentDiv = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = "+8801403224486"; // Replace with your WhatsApp phone number
  const message = "Hello, I have a question!"; // Default message
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  useEffect(() => {
    // Show the component after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Cleanup the timeout if the component is unmounted before 5 seconds
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="bg-[url('/bg.png')] bg-no-repeat bg-[length:100%_100%] flex h-screen">
      <Sidebar />

      <div
        className="w-full text-white text-center  overflow-scroll scrollbar-hide relative"
        ref={ContentDiv}
        id="content"
      >
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: [1, 0.9, 1], y: [0, -10, 0] }} // Scaling + Vertical movement
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 0.3,
          }}
          className="md:fixed md:block hidden bottom-10 right-3 z-50" // Add the fixed positioning here
        >
          <Link href={url} target="_blank" className="cursor-pointer">
            <div
              className="flex gap-3 justify-center items-center bg-[#252529] p-2 md:px-4 rounded-full border border-[#383844] 
                      transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#383844] hover:border-[#252529] 
                      hover:text-white"
            >
              <img src="/wp.png" className="w-[34px] h-[34px]" alt="WhatsApp" />
              <h1 className="text-lg md:block hidden font-medium font-geist">
                Let’s Discuss
              </h1>
            </div>
          </Link>
        </motion.div>
        <section className="p-7 justify-between items-center gap-x-3 border-b-2 border-[#383844] flex lg:hidden">
          <div className="flex gap-3 items-center">
            <div className="bg-[url('/profilebg.png')] bg-cover bg-center h-[54px] w-[54px] flex justify-center items-center">
              <img
                src="/liton.jpeg"
                className="rounded-lg h-[40px] w-[40px]"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-lg font-medium">Liton Nandi</h1>
              <p className="text-xs font-medium">UI/UX Designer</p>
            </div>
          </div>
          <div>
              <Link href={url} target="_blank" className="cursor-pointer">
                <div
                  className="flex gap-3 justify-center items-center bg-[#252529] p-2 md:px-4 rounded-full border border-[#383844] 
                      transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#383844] hover:border-[#252529] 
                      hover:text-white"
                >
                  <img
                    src="/wp.png"
                    className="w-[34px] h-[34px]"
                    alt="WhatsApp"
                  />
                  <h1 className="text-lg md:block hidden font-medium font-geist">
                    Let’s Discuss
                  </h1>
                </div>
              </Link>
          </div>
        </section>
        <section className="fixed bottom-5 lg:left-[50%] lg:right-[50%] z-50 w-full md:px-0 px-6">
          <Navbar />
        </section>
        <section id="home" className="lg:my-28 my-5 md:mx-20 mx-5">
          <Home />
        </section>
        <section id="education" className="mt-14 mb-28 md:mx-20 mx-5">
          <Education />
        </section>
        <section id="experience" className="mt-14 mb-28 md:mx-20 mx-5">
          <Expert />
        </section>
        <section id="projects" className="my-28 md:mx-20 mx-5 ">
          <Achievements />
        </section>
        <section id="workflow" className="mt-14 mb-28 md:mx-20 mx-5">
          <WorkFlow />
        </section>
        <section className="">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Header;
