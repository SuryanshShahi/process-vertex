import React from "react";
import CardAnimation from "./sections/CardAnimation";
import WhySubscribe from "./sections/WhySubscribe";
import OurPricing from "./sections/OurPricing";

const Home = () => {
  return (
    <div className="space-y-20">
      <CardAnimation />
      <div className="container mx-auto space-y-20 px-5">
        <WhySubscribe />
        <OurPricing />
      </div>
    </div>
  );
};

export default Home;