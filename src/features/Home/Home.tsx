import React from "react";
import CardAnimation from "./sections/CardAnimation";
import WhySubscribe from "./sections/WhySubscribe";
import OurPricing from "./sections/OurPricing";
import Integration from "./sections/Integration";
import Testimonials from "./sections/Testimonials";
import HeroSection from "./sections/HeroSection";

const Home = () => {
  return (
    <div className="space-y-20">
      <div className="container mx-auto px-5">
        <HeroSection />
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
