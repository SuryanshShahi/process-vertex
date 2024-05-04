import React from "react";
import CardAnimation from "./sections/CardAnimation";
import WhySubscribe from "./sections/WhySubscribe";
import OurPricing from "./sections/OurPricing";
import Integration from "./sections/Integration";
import Testimonials from "./sections/Testimonials";
import HeroSection from "./sections/HeroSection";
import { SLICK_SETTING, SLICK_SETTING_HERO } from "@/utils/constant";
import Slider from "react-slick";
import ProductCard from "./components/ProductCard";
import Img from "@/shared/Img";
import { HeroVariants } from "@/utils/framer";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <div className="space-y-20">
      <div className="container mx-auto px-5">
        <HeroSection />
      </div>
      <motion.div
        viewport={{ once: false, amount: 0 }}
        variants={HeroVariants.CARD}
        whileInView="show"
        initial="hidden"
        custom={{ duration: 0.5 }}
      >
        <Slider
          {...SLICK_SETTING_HERO}
          speed={10000}
          className="mt-12 max-h-[590px] maskImage"
        >
          {[
            "/images/slide1.jpg",
            "/images/slide2.png",
            "/images/slide3.jpg",
            "/images/slide4.png",
            "/images/slide5.jpg",
            "/images/slide6.png",
          ]?.map((item, idx) => (
            <Img
              src={item}
              height={550}
              width={880}
              alt=""
              isLocal
              className="h-[550px] !w-[880px] rounded-2xl shadow-lg shadow-neutral-300"
            />
          ))}
        </Slider>
      </motion.div>
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
