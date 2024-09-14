import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { CgArrowTopRight } from "react-icons/cg";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  > 
<div className="relative col-span-1 w-fit h-[378px]">
  <Link href={`${project?.link}`} className="absolute bottom-0 right-0 lg:w-[50px] w-[48px] lg:h-[50px] h-[48px] flex justify-center items-center rounded-full bg-[rgba(130,129,146,0.2)] transition-all duration-300 ease-in-out hover:bg-[rgba(130,129,146,0.4)] hover:shadow-lg hover:scale-110">
    <CgArrowTopRight className="text-[24px] text-white" />
  </Link>
  <div className="p-[16px] w-full custom-shape2 bg-[rgba(130,129,146,0.2)] text-start">
    <Image
      src={`${project?.image}`} alt="certificate"
      width={424}
      height={464}
      className="h-[286px] w-auto object-fill"
    />
    <p className="font-semibold text-base font-[geist] line-height-[19.2px] text-white mt-[18px]">
      {project?.name}
    </p>
    <p className="font-normal text-sm font-[geist] line-height-[19.2px] text-white mt-[6px]">
      {project?.sourse}
    </p>
  </div>
</div>
</motion.div>

  );
};

export default ProjectCard;
