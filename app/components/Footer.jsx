import React from "react";
import { FaDownload } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="">
      <div className="w-full flex md:flex-row flex-col items-center justify-between p-5">
        <div className="text-start">
          <h1 className="text-[#C6FCA6] font-geist text-base ">
            Get In Touch
          </h1>
          <p className="text-white font-geist md:text-[24px] text-2xl mb-2 ">
            Send an email or DM and i will get back to you asap.
          </p>
        </div>

        <div>
          <a
            href="./resources/cv.pdf"
            download
            className="bg-[#4f4f55] text-center py-4 text-[#FFF] w-[280px] text-lg flex items-center justify-center gap-2 rounded font-medium font-geist download-button"
          >
            <FaDownload /> <span>Download CV</span>
          </a>
        </div>
      </div>
      <hr className="bg-[#4f4f55] border-none h-[1px]"></hr>

      <div className="w-fullp-5">
        <h1 className="text-[#4f4f55] text-center lg:text-[228px] md:text[148px] text-[80px] my-5 font-bold ">Thank You</h1>
        </div>
        <hr className="bg-[#4f4f55] border-none h-[1px]"></hr>

      <h1 className="text-white font-geist md:text-[16px] text-xs py-5">
        Copyright © 2023 Liton Nandi. All rights reserved.
      </h1>
    </div>
  );
};
