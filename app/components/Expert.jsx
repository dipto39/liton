import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Expert = () => {
  return (
    <div>
      <h1 className="heading-text mb-14">Expert</h1>
      <div className="flex justify-between gap-4">
        <div className="col-span-1 space-y-10 flex-1">
          <div
            className="flex items-center text-start gap-4 border-[1px]  rounded-md bg-[rgba(21,21,21,0.4)] backdrop-blur-[15px]"
            style={{
              borderImage:
                "radial-gradient(circle at 0% 50%, #081219, #081219, white) 1",
                animation: "borderImageAnimation 5s infinite" // Apply the animation here
            }}
          >
            <div>
              <Image src="/service1.png" alt="user" width={100} height={100} />
            </div>
            <div className="text-start">
              <h1 className="text-[20px] font-geist font-semibold leading-[120%] tracking-[0.48px] text-white">
                Web Design
              </h1>
              <p className="text-[16px] font-geist font-normal leading-[150%] tracking-[0.32px] text-white text-opacity-[0.8]">
                Get you dream website
              </p>
            </div>
          </div>
          <div
            className="flex items-center text-start gap-4 border-[1px]  rounded-md bg-[rgba(21,21,21,0.4)] backdrop-blur-[15px]"
            style={{
              borderImage:
                "radial-gradient(circle at 0% 50%, white, #081219,#081219 ) 1",
                animation: "borderImageAnimation 5s infinite" // Apply the animation here
            }}
          >
            <div>
              <Image src="/service1.png" alt="user" width={100} height={100} />
            </div>
            <div className="text-start">
              <h1 className="text-[20px] font-geist font-semibold leading-[120%] tracking-[0.48px] text-white">
                Web Design
              </h1>
              <p className="text-[16px] font-geist font-normal leading-[150%] tracking-[0.32px] text-white text-opacity-[0.8]">
                Get you dream website
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <motion.div
          className="relative bg-gradient-to-r from-red-500 to-orange-500 h-[254px] w-[254px] rounded-full mx-10 z-10 flex justify-center items-center"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }} // Continuous rotation
        >
          <motion.div
            className="relative rounded-full h-[252px] w-[252px] flex justify-center items-center bg-[#081219] z-20"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: [0.42, 0, 0.58, 1],
            }} // Scaling effect
          >
            <Image
              src="/fi.png"
              alt="service"
              className="absolute top-[-16px]"
              width={32}
              height={32}
              style={{ width: 'auto', height: 'auto' }}
            />
            <Image
              src="/ps.png"
              alt="service"
              className="absolute left-0 top-[20%]"
              width={32}
              height={32}
              style={{ width: 'auto', height: 'auto' }}
            />
            <Image
              src="/m.png"
              alt="service"
              className="absolute right-0 top-[20%]"
              width={32}
              height={32}
              style={{ width: 'auto', height: 'auto' }}
            />
            <Image
              src="/xd2.png"
              alt="service"
              className="absolute left-0 bottom-[20%]"
              width={32}
              height={32}
              style={{ width: 'auto', height: 'auto' }}
            />
            <Image
              src="/f.png"
              alt="service"
              className="absolute right-0 bottom-[20%]"
              width={32}
              height={32}
              style={{ width: 'auto', height: 'auto' }}
            />
            <Image
              src="/ai.png"
              alt="service"
              className="absolute bottom-[-16px]"
              width={32}
              height={32}
              style={{ width: 'auto', height: 'auto' }}
            />
           
          </motion.div>
        </motion.div>
        <h1 className="text-[58px] text-white absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] z-30">
              UXUI
            </h1>
        </div>
        
        <div className="col-span-1 space-y-10 flex-1">
          <div
            className="flex items-center text-start gap-4 border-[1px]  rounded-md bg-[rgba(21,21,21,0.4)] "
            style={{
              borderImage:
                "radial-gradient(circle at 0% 50%, #081219, #081219, white) 1",
                animation: "borderImageAnimation 5s infinite" // Apply the animation here
            }}
          >
            <div>
              <Image src="/service1.png" alt="user" width={100} height={100} />
            </div>
            <div className="text-start">
              <h1 className="text-[20px] font-geist font-semibold leading-[120%] tracking-[0.48px] text-white">
                Web Design
              </h1>
              <p className="text-[16px] font-geist font-normal leading-[120%] tracking-[0.32px] text-white text-opacity-[0.8]">
                Get you dream website
              </p>
            </div>
          </div>
          <div
            className="flex items-center text-start gap-4 border-[1px]  rounded-md bg-[rgba(21,21,21,0.4)] backdrop-blur-[15px]"
            style={{
              borderImage:
                "radial-gradient(circle at 0% 50%, white, #081219, #081219) 1",
                animation: "borderImageAnimation 5s infinite" // Apply the animation here
            }}
          >
            <div>
              <Image src="/service1.png" alt="user" width={100} height={100} />
            </div>
            <div className="text-start">
              <h1 className="text-[20px] font-geist font-semibold leading-[120%] tracking-[0.48px] text-white">
                Web Design
              </h1>
              <p className="text-[16px] font-geist font-normal leading-[150%] tracking-[0.32px] text-white text-opacity-[0.8]">
                Get you dream website
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expert;
