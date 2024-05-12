import React from "react";
import CardAnimation from "./sections/CardAnimation";
import WhySubscribe from "./sections/WhySubscribe";
import OurPricing from "./sections/OurPricing";
import Integration from "./sections/Integration";
import Testimonials from "./sections/Testimonials";
import HeroSection from "./sections/HeroSection";
import { SLICK_SETTING_HERO } from "@/utils/constant";
import Slider from "react-slick";
import Img from "@/shared/Img";
const Home = () => {
  return (
    <div className="space-y-20">
      <div className="container mx-auto px-5">
        <HeroSection />
      </div>

      <Slider
        {...SLICK_SETTING_HERO}
        speed={10000}
        className="mt-12 sm:max-h-[590px] max-h-[490px] maskImage"
      > 
        {[
          "/images/work/project (1).jpg",
          "/images/work/project (3).png",
          
          "/images/work/project (7).png",
          "/images/work/project (10).png",
          
        ]?.map((item, idx) => (
          <Img
            key={idx}
            src={item}
            height={550}
            width={880}
            alt=""
            isLocal
            className="sm:h-[550px] h-[450px] object-cover w-[880px] rounded-2xl shadow-lg shadow-neutral-300"
          />
        ))}
      </Slider>

      <CardAnimation />
      <Integration />
      <div className="container mx-auto space-y-20 px-5">
        <WhySubscribe />
        <OurPricing />
      </div>
      <Testimonials />
    </div>
  );
};

export default Home;
