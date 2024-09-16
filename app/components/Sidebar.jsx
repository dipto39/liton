import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaDownload, FaRegFilePdf } from "react-icons/fa";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    window.location.hash = activeSection;
  }, [activeSection]);
  return (
    <div className="border-r-[1px] border-gray-600 w-[500px] h-screen p-10 relative  flex-col items-center overflow-auto scrollbar-hide hidden lg:flex">
      <div className="flex flex-col items-center">
        <div className="bg-[url('/profilebg.png')] bg-cover bg-center h-[180px] w-[180px] flex justify-center items-center">
          <img
            src="/liton.jpeg"
            className="rounded-lg h-[120px] w-[120px]"
            alt=""
          />
        </div>
        <div className="text-center w-[154px] h-[39px] flex justify-between items-center border-2 border-gray-500 px-2 py-1 rounded-md">
          <span className="w-2 h-2 rounded-full bg-[#18852a] border-2 border-green-500 animate-pulse"></span>
          <h1 className="text-sm leading-[127%] font-medium text-[rgba(245,245,245,0.8)]">
            Available for work
          </h1>
        </div>
        <div className=" text-white my-5 text-center">
          <h1 className="font-semibold text-[18px]">Hire Me On</h1>
        </div>
      </div>
      <div className="mb-5">
        <div className="flex gap-2">
          <div className="bg-[url('/social-bg.png')] h-[50px] w-[50px] bg-cover bg-center flex justify-center items-center transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-opacity-80 hover:shadow-md">
            <Link href="" className="flex justify-center items-center">
              <img
                src="./upwork.png"
                className="h-[24px] w-[24px] transition-transform duration-300 ease-in-out hover:scale-110"
                alt="Upwork"
              />
            </Link>
          </div>

          <div className="bg-[url('/social-bg.png')] h-[50px] w-[50px] bg-cover bg-center flex justify-center items-center transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-opacity-80 hover:shadow-md">
            <Link href="" className="flex justify-center items-center">
              <img
                src="./freelancer.png"
                className="h-[24px] w-[24px] transition-transform duration-300 ease-in-out hover:scale-110"
                alt=""
              />
            </Link>
          </div>
          <div className="bg-[url('/social-bg.png')] h-[50px] w-[50px] bg-cover bg-center flex justify-center items-center transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-opacity-80 hover:shadow-md">
            <Link href="" className="flex justify-center items-center">
              <img
                src="./dd.png"
                className="h-[24px] w-[24px] transition-transform duration-300 ease-in-out hover:scale-110"
                alt=""
              />
            </Link>
          </div>
          <div className="bg-[url('/social-bg.png')] h-[50px] w-[50px] bg-cover bg-center flex justify-center items-center transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-opacity-80 hover:shadow-md">
            <Link href="" className="flex justify-center items-center">
              <img
                src="./bh.png"
                className="h-[24px] w-[24px] transition-transform duration-300 ease-in-out hover:scale-110"
                alt=""
              />
            </Link>
          </div>
          <div className="bg-[url('/social-bg.png')] h-[50px] w-[50px] bg-cover bg-center flex justify-center items-center transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-opacity-80 hover:shadow-md">
            <Link href="" className="flex justify-center items-center">
              <img
                src="./insta.png"
                className="h-[24px] w-[24px transition-transform duration-300 ease-in-out hover:scale-110]"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="space-y-3 my-3">
        <div className="bg-[rgba(21,21,21,0.4)] flex items-center gap-5 w-full p-5 transition-transform duration-300 ease-in-out hover:bg-[rgba(21,21,21,0.6)] hover:scale-105 hover:shadow-lg">
          <div className="h-[50px] w-[50px] flex-shrink-0">
            <img className="w-full h-full" src="/phone.png" />
          </div>
          <div className="text-[16px] font-geist font-semibold">
            <h1 className="text-[#999]">Phone</h1>
            <a href="tel:+8801403224486">
              <h2 className="text-white">+880 1403224486</h2>
            </a>
          </div>
        </div>

        <div className="bg-[rgba(21,21,21,0.4)] flex items-center gap-5 w-full p-5 transition-transform duration-300 ease-in-out hover:bg-[rgba(21,21,21,0.6)] hover:scale-105 hover:shadow-lg">
          <div className="h-[50px] w-[50px] flex-shrink-0">
            <img className="w-full h-full" src="/mail.png"></img>
          </div>
          <div className="text-[16px] font-geist font-semibold">
            <h1 className="text-[#999] ">Email</h1>
            <a href="mailto:litonnandi51@gmail">
            <h2 className="text-white">litonnandi51@gmail.com</h2>
            </a>
          </div>
        </div>
        <div className="bg-[rgba(21,21,21,0.4)] flex items-center gap-5 w-full p-5 transition-transform duration-300 ease-in-out hover:bg-[rgba(21,21,21,0.6)] hover:scale-105 hover:shadow-lg">
          <div className="h-[50px] w-[50px] flex-shrink-0">
            <img
              className="w-full h-full object-cover"
              src="/location.png"
              alt="location"
            />
          </div>
          <div className="text-[16px] font-geist font-semibold">
            <h1 className="text-[#999]">location</h1>
            <h2 className="text-white">
              50, KDA Outer Bypass Rd, Khulna 9100, Bangladesh
            </h2>
          </div>
        </div>
      </div>
      <div className="mt-28 flex flex-col items-center">
        <a
          href="/cer.jpeg"
          download
          className="bg-[#F6F5F2] font-bold text-center py-3 text-[#1A3636] w-[280px] text-lg flex items-center justify-center gap-2 rounded font-geist download-button"
        >
          <FaRegFilePdf className="font-bold text-2xl" />
          <span className="">Download CV</span>
        </a>

        <h1 className="text-white font-geist text-[14px] mt-2">
          Copyright © 2023 Liton Nandi. All rights reserved.
        </h1>
      </div>
    </div>
  );
};

export default Sidebar;
