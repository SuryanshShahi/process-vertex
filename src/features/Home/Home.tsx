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
          "https://ik.imagekit.io/designkrunch/aixgrow/project-1.png",
          "https://ik.imagekit.io/designkrunch/aixgrow/project-2.png",
          "https://ik.imagekit.io/designkrunch/aixgrow/project-3.png",
          "https://ik.imagekit.io/designkrunch/aixgrow/project-4.png",
          "https://ik.imagekit.io/designkrunch/aixgrow/project-5.png",
          "https://ik.imagekit.io/designkrunch/aixgrow/project-6.png",
          "https://ik.imagekit.io/designkrunch/aixgrow/project-7.png",
          "https://ik.imagekit.io/designkrunch/aixgrow/project-8.jpg",
          "https://ik.imagekit.io/designkrunch/aixgrow/project-9.png",
          "https://ik.imagekit.io/designkrunch/aixgrow/project-10.png",
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
      <div className="marquee text-4xl font-semibold uppercase">
        <div className="marquee-group animate-marquee">
          <span>Branding Design</span>
          <span>Email Marketing</span>
          <span>Digital Product</span>
          <span>Ui/Ux Design</span>
          <span>Digital Studio</span>
        </div>

        <div className="marquee-group animate-marquee">
          <span>Branding Design</span>
          <span>Email Marketing</span>
          <span>Digital Product</span>
          <span>Ui/Ux Design</span>
          <span>Digital Studio</span>
        </div>
      </div>

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
