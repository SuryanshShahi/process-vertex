import Img from "@/shared/Img";
import React from "react";
import { FaFolder, FaUserAlt } from "react-icons/fa";
import Slider from "react-slick";
import CommentCard from "../components/CommentCard";
import Heading from "../components/Heading";
import TeamCard from "../components/TeamCard";

const WhySubscribe = () => {
  var settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  };

  return (
    <div className="space-y-20">
      <Heading
        className="!text-black"
        title="Why subscribe?"
        subTitle="We streamline the design process by breaking down projects into smaller, hyper-focused design tasks."
      />

      <div className="grid grid-cols-12 lg:gap-10 gap-5">
        <div className="lg:col-span-4 sm:col-span-6 lg:order-1 order-2 col-span-12 border flex flex-col justify-center border-gray-200 px-5 md:py-10 py-5 rounded-3xl text-center">
          <FaFolder size={120} className="text-blue-300 m-auto" />
          <div className="mt-auto space-y-5">
            <div className="text-black text-lg ">Fast turnarounds</div>
            <div className="leading-5 text-sm text-[#717073]">
              Receive lightning-fast delivery of your design request within 24
              to 48 hours.
            </div>
          </div>
        </div>
        <div className="lg:col-span-8 lg:order-2 order-1 col-span-12 border border-gray-200 overflow-hidden relative px-5 py-10 rounded-3xl text-center">
          <CommentCard
            className="opacity-20"
            name="You"
            description="Hey!"
            icon={
              <FaUserAlt
                className="bg-red-800 text-pink-400 rounded-lg pt-2 min-w-12"
                size={48}
              />
            }
          />
          <CommentCard
            className="absolute -right-28 top-5 opacity-20"
            name="You"
            description="How are you?"
            icon={
              <FaUserAlt
                className="bg-red-800 text-pink-400 rounded-lg pt-2 min-w-12"
                size={48}
              />
            }
          />
          <CommentCard
            className="mx-auto relative z-10"
            name="You"
            description="I would like to request a design for a landing page"
            icon={
              <FaUserAlt
                className="bg-red-800 text-pink-400 rounded-lg pt-2 min-w-12"
                size={48}
              />
            }
          />
          <CommentCard
            className="-left-5 absolute -mt-8 opacity-20"
            name="Process"
            description="Hey! what can we do for you today?"
            icon={
              <Img
                height={48}
                width={48}
                src="/images/icons/logo.webp"
                isLocal
                className="object-contain -mt-2"
                alt=""
              />
            }
          />
          <CommentCard
            className="-left-[5%] z-10 ml-auto relative mt-8"
            name="Process"
            description="Sure! We will get back to you by the end of tomorrow 😉"
            icon={
              <Img
                height={48}
                width={48}
                src="/images/icons/logo.webp"
                isLocal
                className="object-contain -mt-2"
                alt=""
              />
            }
          />
          <CommentCard
            className="opacity-20 -mt-10"
            name="You"
            description="Great!"
            icon={
              <FaUserAlt
                className="bg-red-800 text-pink-400 rounded-lg pt-2 min-w-12"
                size={48}
              />
            }
          />
          <div className="mt-4 space-y-5">
            <div className="text-black text-lg ">Efficient communication</div>
            <div className="leading-5 text-sm text-[#717073]">
              Real-time conversations with your team whenever there's a new
              request or revision.
            </div>
          </div>
        </div>
        <div className="lg:col-span-8 lg:order-3 order-4 col-span-12 relative py-10 md:space-y-20 rounded-3xl border border-gray-200">
          <div className="maskImage">
            <Slider {...settings} speed={5000}>
              {["#808080", "#FFFF00", "#008000", "#0000FF", "#FF0000"]?.map(
                (item, idx) => (
                  <TeamCard
                    title="Suryansh Shahi"
                    designation="Frontend Develop"
                    color={item}
                    key={idx}
                  />
                )
              )}
            </Slider>
            <Slider {...settings} speed={8000}>
              {["#FF0000", "#0000FF", "#008000", "#FFFF00", "#808080"]?.map(
                (item, idx) => (
                  <TeamCard
                    title="Suryansh Shahi"
                    designation="Frontend Develop"
                    color={item}
                    key={idx}
                  />
                )
              )}
            </Slider>
          </div>
          <div className="mt-auto px-5 space-y-5 text-center max-w-[400px] mx-auto">
            <div className="text-black text-lg ">Top-tier creative team</div>
            <div className="leading-5 text-sm text-[#717073]">
              We work with a network of creatives from different disciplines to
              deliver outstanding design solutions to you.
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 sm:col-span-6 lg:order-4 order-3 col-span-12 border border-gray-200 rounded-3xl flex flex-col md:pb-10 pb-5">
          <div className="bg-[rgb(250, 250, 250)] space-y-4 cardShadowType2 px-5 py-8 rounded-es-2xl rounded-se-3xl ml-auto md:w-[80%] w-full">
            <div className=" text-lg mb-6">Say no more to</div>
            {[
              "Long meetings",
              "High cost hiring full-time",
              "Micromanagement",
              "Long contracts",
            ]?.map((item, idx) => (
              <div key={idx} className="flex items-center gap-x-3 mt-auto px-5">
                <div className="h-6 w-6 flex justify-center items-center rounded-lg bg-red-500">
                  <div className="text-xl text-white -mt-[3px]">&times;</div>
                </div>
                <div className="text-[#454545] text-sm">{item}</div>
              </div>
            ))}
          </div>
          <div className="md:mt-auto mt-5 space-y-5 text-center max-w-[400px] mx-auto">
            <div className="text-black text-lg ">Flexibility</div>
            <div className="leading-5 text-sm text-[#717073]">
              Scale up or down, pause, or cancel anytime.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySubscribe;
