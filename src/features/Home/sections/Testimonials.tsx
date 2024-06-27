import {
  SLICK_VERTICAL_SETTING,
  SLICK_VERTICAL_SETTING2,
} from "@/utils/constant";
import React from "react";
import Slider from "react-slick";
import TestimonialCard from "../components/TestimonialCard";
import { FaRegComment } from "react-icons/fa";

const Testimonials = () => {
  const slider1 = [
    {
      title: "Tiana Roses",
      description:
        "Redesigning our website with AIXGrow has been a game-changer! The transformation is unbelievable – not only is it user-friendly, but the visual appeal is off the charts. Absolutely wowed by the results!",
      image:
        "/images/icons/image.png",
      views: "6.5M",
      likes: "10.3K",
      comments: "100.5K",
      shares: "18.2K"
    },
    {
      title: "Michael Berry",
      description:
        "Our sales increased by 30% after using AIXGrow. The new design attracted more customers and the site navigation is a breeze!",
      image:
        "/images/icons/image-1.png",
      views: "15.2M",
      likes: "25.6K",
      comments: "200.8K",
      shares: "30.4K"
    },
    {
      title: "Sarah Johnson",
      description:
        "AIXGrow has truly elevated our online presence. The team was professional, responsive, and incredibly talented. Highly recommend!",
      image:
        "/images/icons/image-2.png",
      views: "20.1M",
      likes: "35.2K",
      comments: "150.3K",
      shares: "40.7K"
    }
  ];
  
  const slider2 = [
    {
      title: "David Wilson",
      description:
        "Thanks to AIXGrow, our social media reach has expanded significantly. Their SMM strategies have increased our follower base by 50% in just two months!",
      image:
        "/images/icons/image-3.png",
      views: "8.8M",
      likes: "12.4K",
      comments: "110.6K",
      shares: "22.3K"
    },
    {
      title: "Emma Brown",
      description:
        "AIXGrow's social media campaigns have been instrumental in boosting our brand awareness. Engagements have skyrocketed, thanks to their creative content and targeted ads!",
      image:
        "/images/icons/image-4.png",
      views: "10.5M",
      likes: "18.1K",
      comments: "90.9K",
      shares: "15.5K"
    },
    {
      title: "Lucas Green",
      description:
        "The integrated approach by AIXGrow has transformed both our website and social media presence. Our brand is now more visible and engaging across platforms.",
      image:
        "/images/icons/image-5.png",
      views: "12.3M",
      likes: "20.9K",
      comments: "130.2K",
      shares: "25.7K"
    }
  ];
  
  
  
  return (
    <div className="relative" id="Testimonials">
      <div className="bubble h-[800px] w-screen absolute opacity-80" />

      <div className="space-y-6 bg-black verticalSlider pt-20">
        <div className="max-w-[1180px] mx-auto z-10 relative">
          <div className="text-[#EEE] flex justify-center gap-x-2">
            <FaRegComment size={20} className="text-[#EEE]" />
            <div className="font-bold">Testimonials</div>
          </div>
          <div className="text-5xl font-bold mt-8 text-center text-white">
            Our Client's Numbers Talk
          </div>
          <div className="py-10 md:px-5 md:max-w-full max-w-[520px] mx-auto maskImageVertical mt-10 md:h-screen text-white grid lg:gap-0 gap-6 md:grid-cols-2">
            <Slider {...SLICK_VERTICAL_SETTING} speed={8000}>
              {slider1?.map((item, idx) => (
                <TestimonialCard data={item} key={idx} />
              ))}
            </Slider>
            <Slider
              {...SLICK_VERTICAL_SETTING2}
              speed={8000}
              className="md:!block !hidden"
            >
              {slider2?.map((item, idx) => (
                <TestimonialCard data={item} key={idx} />
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
