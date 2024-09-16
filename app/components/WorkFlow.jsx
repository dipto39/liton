import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';

// Custom hook to handle intersection
const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isIntersecting;
};

// FlowStep component with conditional animation
const FlowStep = ({ imageSrc, title, description, delay, isVisible }) => (
  <motion.div
    className="p-5 border rounded-md bg-[rgba(21,21,21,0.7)] text-left w-full" 
    style={{
      borderImage: "radial-gradient(circle at 0% 50%, white, black, black) 1",
       animation: "borderImageAnimation 5s infinite"
    }}
    initial={{ opacity: 0, x: -100 }}
    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }} // Conditionally animate
    transition={{ duration: 0.5, delay }}
  >
    <div className="mb-4">
      <Image
        src={imageSrc}
        alt="certificate"
        width={60}
        height={60}
        className="object-fill"
      />
    </div>
    <div>
      <h3 className="text-2xl font-semibold leading-7 tracking-wide pb-1">
        {title}
      </h3>
      <p className="text-base font-normal text-opacity-80">{description}</p>
    </div>
  </motion.div>
);

// WorkFlow component that detects section visibility
const WorkFlow = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref); // Use the hook to check visibility

  return (
    <div ref={ref}>
      <h1 className="text-white md:text-[58px] text-[24px] text-center font-extrabold leading-[1.005] opacity-30 tracking-[1.16px] backdrop-blur-[50px]">My Work Process</h1>
      <div className="text-[#FFF] font-geist mt-[55px] mb-24 space-y-10">
        <div className="flex md:flex-row flex-col items-center gap-4 lg:mr-10">
          <FlowStep
            imageSrc="/flow1.svg"
            title="User Research"
            description="Gathering the Client's Business and Goals."
            delay={0.1}
            isVisible={isVisible} // Pass visibility state
          />
          <Image
            src={"/right-arrow.png"}
            alt="arrow"
            width={20}
            height={20}
            className="object-fill md:rotate-0 rotate-90"
            style={{ width: 'auto', height: 'auto' }}
          />
          <FlowStep
            imageSrc="/flow2.svg"
            title="Planning"
            description="Structuring the Client's Needs."
            delay={0.3}
            isVisible={isVisible} // Pass visibility state
            
          />
          <Image
            src={"/right-arrow.png"}
            alt="arrow"
            width={20}
            height={20}
            className="object-fill md:rotate-0 rotate-90"
            style={{ width: 'auto', height: 'auto' }}
          />
          <FlowStep
            imageSrc="/flow3.svg"
            title="Design"
            description="Crafting Design Solutions."
            delay={0.5}
            isVisible={isVisible} // Pass visibility state
          />
        </div>

        <div className="flex md:flex-row flex-col items-center gap-4">
          <Image
            src={"/right-arrow.png"}
            alt="arrow"
            width={20}
            height={20}
            className="object-fill md:rotate-0 rotate-90"
            style={{ width: 'auto', height: 'auto' }}
          />
          <FlowStep
            imageSrc="/flow4.svg"
            title="Usability Testing"
            description="Design UI mockups and prototypes."
            delay={0.1}
            isVisible={isVisible} // Pass visibility state
          />
          <Image
            src={"/right-arrow.png"}
            alt="arrow"
            width={20}
            height={20}
            className="object-fill md:rotate-0 rotate-90"
            style={{ width: 'auto', height: 'auto' }}
          />
          <FlowStep
            imageSrc="/flow5.svg"
            title="UI Design"
            description="Design Review with the Client."
            delay={0.3}
            isVisible={isVisible} // Pass visibility state
          />
          <Image
            src={"/right-arrow.png"}
            alt="arrow"
            width={20}
            height={20}
            className="object-fill md:rotate-0 rotate-90"
            style={{ width: 'auto', height: 'auto' }}
          />
          <FlowStep
            imageSrc="/flow6.svg"
            title="Developer Handoff"
            description="Hand over this design for web development."
            delay={0.5}
            isVisible={isVisible} // Pass visibility state
          />
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
