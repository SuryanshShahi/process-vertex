import Img from "@/shared/Img";
import { SLICK_SETTING, SLICK_VERTICAL_SETTING } from "@/utils/constant";
import React from "react";
import { GrConnect } from "react-icons/gr";
import Slider from "react-slick";

const Testimonials = () => {
  const data = [
    {
      image:
        "https://framerusercontent.com/images/YdeRxW0UONt3yhBVmqWZsKUCZyk.png",
      className: "top-[40%] -left-[5%]",
    },
  ];
  return (
    <div className="space-y-6">
      <div className="text-[#50fa91] flex justify-center gap-x-2">
        <GrConnect size={20} className="text-[#50fa91]" />
        <div className="font-bold">Testimonials</div>
      </div>
      <div className="text-5xl font-bold text-center">They love Vertex</div>
      <div>
        <Slider {...SLICK_VERTICAL_SETTING} speed={8000} vertical>
          {[1, 1, 1, 1, 1]?.map((item, idx) => (
            <div
              className="p-10 rounded-[20px] testimonialCard space-y-5 w-full max-w-[520px]"
              key={idx}
            >
              <p className="text-xl leading-[30px]">
                Redesigning our website with Vertex has been a game-changer! The
                transformation is unbelievable – not only is it user-friendly,
                but the visual appeal is off the charts. Absolutely wowed by the
                results!
              </p>
              <div className="flex items-center gap-x-3">
                <img
                  alt=""
                  className="h-10 w-10 rounded-full"
                  src="https://framerusercontent.com/images/YdeRxW0UONt3yhBVmqWZsKUCZyk.png"
                />
                <div className="font-bold text-lg">Tiana Roses</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
