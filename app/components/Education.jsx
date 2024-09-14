import React from "react";

const Education = () => {
  return (
    <div className="border" style={{
      borderImage:
        "radial-gradient(circle at 0% 50%, #081219, #081219, white) 1",
         animation: "borderImageAnimation 5s infinite"
    }}>
      <div
        className="flex justify-center items-center inset-0 rounded-md bg-[rgba(21,21,21,0.4)] backdrop-blur-[15px]"
        
      >
        <div>
          <img src="/edu.png"></img>
        </div>
        <div className="mx-[60px] my-[40px]">
          <h1 className="text-white text-[42px] font-bold mb-16">
            My Education
          </h1>
          <div className="flex gap-4">
            <div className="border-dashed border-r-[1px] opacity-50 my-3"></div>
            <div className="font-geist text-start space-y-6">
              <div className="relative">
                <span className="w-4 h-4 rounded-full bg-[#FFF] absolute -left-[24px] top-1"></span>
                <h1 className="text-[24px] font-semibold leading-[120%] tracking-[0.48px] text-[#FFF]">
                  Govt Bangabandhu College, Khulna
                </h1>
                <h3 className="text-[18px] mt-2 font-semibold leading-[120%] tracking-[0.48px] text-white text-opacity-[0.8]">
                  BBA in Marketing
                </h3>
                <p className="text-[16px] font-normal leading-[150%] tracking-[0.32px] text-white text-opacity-[0.8]">
                  2017-2021
                </p>
              </div>
              <div className="relative">
                <span className="w-4 h-4 rounded-full bg-[#FFF] absolute -left-[24px] top-1"></span>

                <h1 className="text-[24px] font-semibold leading-[120%] tracking-[0.48px] text-white">
                  Govt. Majeed Memorial City College, Khulna
                </h1>
                <h3 className="text-[18px] mt-2 font-semibold leading-[120%] tracking-[0.48px] text-white">
                  Higher Secondary Certificate
                </h3>
                <p className="text-[16px] font-normal leading-[150%] tracking-[0.32px] text-white text-opacity-[0.8]">
                  2014-2016
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
