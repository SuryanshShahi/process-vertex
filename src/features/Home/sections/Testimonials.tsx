import Img from "@/shared/Img";
import {
  SLICK_VERTICAL_SETTING,
  SLICK_VERTICAL_SETTING2,
} from "@/utils/constant";
import React from "react";
import Slider from "react-slick";
import TestimonialCard from "../components/TestimonialCard";
import { FaRegComment } from "react-icons/fa";

const Testimonials = () => {
  const data = [
    {
      image:
        "https://framerusercontent.com/images/YdeRxW0UONt3yhBVmqWZsKUCZyk.png",
      className: "top-[40%] -left-[5%]",
    },
  ];
  return (
    <div className="relative">
      <div className="bubble h-[800px] w-screen absolute opacity-80" />

      <div className="space-y-6 bg-black verticalSlider pt-20">
        <div className="max-w-[1180px] mx-auto z-10 relative">
          <div className="text-[#EEE] flex justify-center gap-x-2">
            <FaRegComment size={20} className="text-[#EEE]" />
            <div className="font-bold">Testimonials</div>
          </div>
          <div className="text-5xl font-bold mt-8 text-center text-white">
            They love AIXGrow
          </div>
          <div className="py-10 md:px-5 md:max-w-full max-w-[520px] mx-auto maskImageVertical mt-10 md:h-screen text-white grid lg:gap-0 gap-6 md:grid-cols-2">
            <Slider {...SLICK_VERTICAL_SETTING} speed={8000}>
              {[1, 1, 1, 1, 1]?.map((item, idx) => (
                <TestimonialCard />
              ))}
            </Slider>
            <Slider
              {...SLICK_VERTICAL_SETTING2}
              speed={8000}
              className="md:!block !hidden"
            >
              {[1, 1, 1, 1, 1]?.map((item, idx) => (
                <TestimonialCard />
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="bubbleVertical md:block hidden h-[800px] opacity-70 max-w-[800px] w-full absolute -left-20 bottom-0 rotate-180" />
    </div>
  );
};

export default Testimonials;
