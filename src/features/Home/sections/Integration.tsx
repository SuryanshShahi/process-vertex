import React from "react";
import { GrConnect } from "react-icons/gr";

const Integration = () => {
  const data = [
    {
      image:
        "https://framerusercontent.com/images/YdeRxW0UONt3yhBVmqWZsKUCZyk.png",
      className: "top-[40%] -left-[5%]",
    },
    {
      image:
        "https://framerusercontent.com/images/MVekyQ8LsrdErSmPHObOHdYukIo.png",
      className: "top-[10%] left-[8%]",
    },
    {
      image:
        "https://framerusercontent.com/images/HSCCIKwzqEj4dkYb0eaoQbP0c.png",
      className: "right-[50%] -top-[5%]",
    },
    {
      image:
        "https://framerusercontent.com/images/O1eC8TJfwFgqCrRducRcrawTuw.png",
      className: "right-[15%] top-[4%]",
    },
    {
      image:
        "https://framerusercontent.com/images/7OlTS9bUugS0TvKPAt5a77nsa6k.png",
      className: "-right-[4%] top-[31%]",
    },
    {
      image:
        "https://framerusercontent.com/images/YdeRxW0UONt3yhBVmqWZsKUCZyk.png",
      className: "-right-[2%] bottom-[24%]",
    },
    {
      image:
        "https://framerusercontent.com/images/MVekyQ8LsrdErSmPHObOHdYukIo.png",
      className: "right-[20%] bottom-[1%]",
    },
    {
      image:
        "https://framerusercontent.com/images/HSCCIKwzqEj4dkYb0eaoQbP0c.png",
      className: "left-[30%] -bottom-[4%]",
    },
    {
      image:
        "https://framerusercontent.com/images/O1eC8TJfwFgqCrRducRcrawTuw.png",
      className: "left-[4%] bottom-[15%]",
    },
  ];
  return (
    <div className="bg-black space-y-6 flex flex-col items-center sm:py-40 py-20">
      <div className="text-[#50fa91] flex gap-x-2">
        <GrConnect size={20} className="text-[#50fa91]" />
        <div className="font-bold">Integrations</div>
      </div>
      <div className="text-white text-5xl font-bold text-center">Seamless connections</div>
      <p className="opacity-70 text-white max-w-[300px] text-center">
        Integrate effortlessly with your favorite tools and platforms.
      </p>

      <div className="h-[350px] md:scale-100 sm:scale-75 scale-50 overflow-hidden sm:p-20 p-10">
        <div className="relative flex justify-center items-center">
          <div className="animate-clockWise border border-gray-200 flex justify-center items-center relative rounded-full h-[600px] w-[600px]">
            {data?.map((item, idx) => (
              <img
                src={item?.image}
                key={idx}
                className={`h-12 w-12 absolute ${item?.className}`}
              />
            ))}
          </div>
          <div className="border absolute top-[100px] border-gray-200 animate-antiClockWise  rounded-full h-[350px] w-[350px]">
            {data?.map((item, idx) => (
              <img
                src={item?.image}
                key={idx}
                className={`h-12 w-12 absolute ${item?.className}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integration;
