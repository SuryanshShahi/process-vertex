import Button from "@/shared/button/Button";
import { HERO_VERTICAL_SETTING, SLICK_SETTING } from "@/utils/constant";
import React from "react";
import { CiStopwatch } from "react-icons/ci";
import Slider from "react-slick";

const HeroSection = () => {
  return (
    <div className="max-w-[450px] space-y-6 mt-10">
      <div className="text-black relative font-medium sm:text-[64px] sm:leading-[77px] text-5xl">
        <div>Design partner</div>
        <div className="flex heroTextSlider max-[640px]:mt-2">
          <div>for</div>
          <Slider {...HERO_VERTICAL_SETTING} className="max-w-[300px]">
            {["Startups", "Founders", "Agencies"]?.map((item, idx) => (
              <span className="hero-text" key={idx}>
                {item}
              </span>
            ))}
          </Slider>
        </div>
      </div>
      <p className="text-[#87868a] text-lg">
        Get instant access to unlimited design requests and revisions from a
        top-tier creative team for a flat monthly fee. Pause or cancel anytime.
      </p>
      <div className="gap-x-2 flex items-center text-[#646464] text-sm">
        <div className="bg-[#09e884] h-2 w-2 rounded-full animate-ping" />2
        spots available
        <CiStopwatch size={18} />
      </div>
      <div className="flex gap-x-4">
        <Button className="border hover:border-gray-100 hover:bg-transparent hover:!text-black">
          View Pricing
        </Button>
        <Button className="bg-transparent !text-black border border-gray-100">
          Book a Call
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
