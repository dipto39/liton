import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <div className="relative">
      <h1 className="text-[16px] md:text-[32px] font-geist font-bold tracking-wide duration-300 lg:h-[80px]">
        <Typewriter
          options={{
            strings: [
              "Hi there! I am Liton Nandi, a passionate UX/UI Designer with over a year of expertise in creating seamless and visually appealing digital experiences.",
            ],
            autoStart: true,
            loop: false, // Disable looping to prevent retyping
            deleteSpeed: Infinity, // Set deletion to an infinite delay to avoid deletion
            delay: 10, // Speed of typing
            cursor: "|", // Custom cursor
          }}
        />
      </h1>
      <motion.div
        className=""
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1, // Increase duration for a slower transition
          ease: [0.42, 0, 0.58, 1], // Use an easing curve for smoothness
          type: "spring", // Spring for a natural feel
          stiffness: 100, // Adjust stiffness for more control
        }}
      >
        <div className="bg-[#f8f8f838] p-4 rounded-3xl lg:h-[500px] h-[300px] lg:max-w-[800px] mx-auto mt-10 relative duration-500">
          <motion.div
            className="md:block hidden absolute -top-5 -left-32"
            initial={{ y: 0, scale: 1 }}
            animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }} // Floating + Scaling
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <img src="./left-top.png" alt="" />
          </motion.div>

          <motion.div
            className="md:block hidden absolute bottom-32 -left-[200px]"
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 10, -10, 0] }} // Rotating back and forth
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 0.5, // Add delay to desynchronize
            }}
          >
            <img className="opacity-40" src="./left-bottom.png" alt="" />
          </motion.div>

          <motion.div
            className="md:block hidden absolute -top-20 -right-40"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: [0.5, 1, 0.5], x: [0, 20, 0] }} // Fading + Horizontal movement
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <img src="./figma.png" alt="" />
          </motion.div>

          <motion.div
            className="md:block hidden absolute bottom-0 -right-40"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 0.9, 1], y: [0, -10, 0] }} // Scaling + Vertical movement
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: 0.3,
            }}
          >
            <img src="./right-bottom.png" alt="" />
          </motion.div>

          <iframe
            className="h-full w-full rounded-3xl"
            src="https://www.youtube.com/embed/Ia_SfTEGS24?si=gmPOTBB5lX8sAmxU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
