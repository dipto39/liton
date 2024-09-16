"use client";
import Image from "next/image";
import { FiChevronsRight } from "react-icons/fi";

const Workdynamic = () => {
  const data = [
    { id: 1, title: "User Research", description: "Gathering the Client's Business and Goals", image: '/flow1.png' },
    { id: 2, title: "User Research", description: "Gathering the Client's Business and Goals", image: '/flow1.png' },
    { id: 3, title: "User Research", description: "Gathering the Client's Business and Goals", image: '/flow1.png' },
    { id: 4, title: "User Research", description: "Gathering the Client's Business and Goals", image: '/flow1.png' },
    { id: 5, title: "User Research", description: "Gathering the Client's Business and Goals", image: '/flow1.png' },
    { id: 6, title: "User Research", description: "Gathering the Client's Business and Goals", image: '/flow1.png' },
  ];

  return (
    <div className="bg-black py-[150px] md:mx-0 mx-[20px]">
      <div className="container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-y-[53px]">
        {data.map((item, index) => (
          <div key={item.id} className="flex md:flex-row flex-col w-full items-center">
            <div className="w-[53px] text-white md:h-[197px] h-[53px] lg:hidden md:flex hidden justify-center items-center text-[20px]">
              <FiChevronsRight className="md:rotate-0 rotate-[90deg]" />
            </div>

            <div className="relative w-full flex justify-center items-center h-[200px] overflow-hidden rounded-[10px]">
              <div className="relative h-[197px] z-20 w-[99%] bg-[#151515] ps-[20px] pb-[44px] pt-[20px] rounded-[10px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="h-[60px] w-[60px] object-fill"
                />
                <h4 className="mt-[16px] text-white text-[24px] font-semibold leading-7 tracking-small">
                  {item.title}
                </h4>
                <p className="text-[16px] text-white mt-[4px] pb-[15px] leading-7 tracking-small">
                  {item.description}
                </p>
              </div>

              <div
                className={`card z-0 h-full absolute top-1/2 left-1/2 transform ${
                  index === 2 ? 'w-[130%]' : 'w-[120%]'
                } -translate-x-1/2 -translate-y-1/2`}
              ></div>
            </div>

            <div
              className={`w-[53px] text-white ${
                index === 2 ? 'lg:h-[197px]' : 'md:h-[197px]'
              } h-[53px] lg:flex md:hidden flex justify-center items-center text-[20px]`}
            >
              <FiChevronsRight className="md:rotate-0 rotate-[90deg]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workdynamic;
