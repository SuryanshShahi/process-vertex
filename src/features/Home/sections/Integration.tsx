import React from "react";
import { GrConnect } from "react-icons/gr";

const Integration = () => {
  const data = [
    {
      image: "/images/social-media-platforms/Facebook.png",
      className: "top-[40%] -left-[4%]",
      innerCircleClass: "top-[40%] -left-[7%]",
    },
    {
      image: "/images/social-media-platforms/Instagram.png",
      className: "top-[10%] left-[11%]",
      innerCircleClass: "top-[10%] left-[7%]",
    },
    {
      image: "/images/social-media-platforms/Twitter.png",
      className: "right-[50%] -top-[4%]",
      innerCircleClass: "right-[50%] -top-[6%]",
    },
    {
      image: "/images/social-media-platforms/MetaAds.png",
      className: "right-[19%] top-[4%]",
      innerCircleClass: "right-[12%] top-[4%]",
    },
    {
      image: "/images/social-media-platforms/Tiktok.png",
      className: "-right-[2%] top-[31%]",
      innerCircleClass: "-right-[6%] top-[31%]",
    },
    {
      image: "/images/social-media-platforms/Facebook.png",
      className: "right-[1%] bottom-[24%]",
      innerCircleClass: "-right-[3%] bottom-[24%]",
    },
    {
      image: "/images/social-media-platforms/GoogleAds.png",
      className: "right-[20%] bottom-[3%]",
      innerCircleClass: "right-[20%] -bottom-[1%]",
    },
    {
      image: "/images/social-media-platforms/Snapchat.png",
      className: "left-[30%] -bottom-[1%]",
      innerCircleClass: "left-[30%] -bottom-[5%]",
    },
    {
      image: "/images/social-media-platforms/Linkedin.png",
      className: "left-[4%] bottom-[19%]",
      innerCircleClass: "left-[3%] bottom-[14%]",
    },
  ];

  return (
    <div className="bg-black space-y-6 flex flex-col items-center pt-20 relative lg:h-full sm:h-[600px] h-[500px]">
      <div className="text-[#EEE] flex gap-x-2">
        <GrConnect size={20} className="text-[#EEE]" />
        <div className="font-bold">Integrations</div>
      </div>
      <div className="text-white md:text-5xl text-3xl font-bold text-center">
        Seamless connections
      </div>
      <p className="opacity-70 text-white max-w-[300px] text-center">
        Integrate effortlessly with your favorite tools and platforms.
      </p>

      <div className="max-h[350px] md:scale-100 sm:scale-75 lg:relative absolute md:-bottom-0 sm:-bottom-11 -bottom-[86px] scale-50 overflow-hidden sm:p-20 p-10 md:w-full integrationBg">
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
          <div className="border absolute border-gray-200 animate-antiClockWise rounded-full h-[350px] w-[350px]">
            {data?.map((item, idx) => (
              <img
                src={item?.image}
                key={idx}
                className={`h-12 w-12 absolute ${item?.innerCircleClass}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integration;
