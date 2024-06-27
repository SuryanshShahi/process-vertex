import Img from "@/shared/Img";
import React from "react";
import { FaFolder, FaUserAlt } from "react-icons/fa";
import Slider from "react-slick";
import CommentCard from "../components/CommentCard";
import Heading from "../components/Heading";
import TeamCard from "../components/TeamCard";
import { motion } from "framer-motion";
import { HeroVariants } from "@/utils/framer";
import { SLICK_SETTING } from "@/utils/constant";

const WhySubscribe = () => {
  const communicationData = [
    {
      name: "You",
      description: "Hey!",
      icon: (
        <FaUserAlt
          className="bg-red-800 text-pink-400 rounded-lg pt-2 min-w-12"
          size={48}
        />
      ),
      className: "sm:opacity-20 opacity-0",
    },
    {
      name: "You",
      description: "How are you?",
      icon: (
        <FaUserAlt
          className="bg-red-800 text-pink-400 rounded-lg pt-2 min-w-12"
          size={48}
        />
      ),
      className: "absolute sm:right-5 sm:-top-10 sm:opacity-20 opacity-0",
    },
    {
      name: "You",
      description: "I would like to request a design for a landing page",
      icon: (
        <FaUserAlt
          className="bg-red-800 text-pink-400 rounded-lg pt-2 min-w-12"
          size={48}
        />
      ),
      className: "mx-auto relative z-10",
    },
    {
      name: "AIXGrow",
      description: "Hey! what can we do for you today?",
      icon: (
        <Img
          height={48}
          width={48}
          src="/images/icons/logo.png"
          isLocal
          className="object-contain -mt-2"
          alt=""
        />
      ),
      className: "-left-10 absolute -mt-16 sm:opacity-20 opacity-0",
    },
    {
      name: "AIXGrow",
      description: "Sure! We will get back to you by the end of tomorrow 😉",
      icon: (
        <Img
          height={48}
          width={48}
          src="/images/icons/logo.png"
          isLocal
          className="object-contain -mt-2"
          alt=""
        />
      ),
      className: "sm:-left-[5%] z-10 sm:ml-auto mx-auto relative mt-5",
    },
    {
      name: "You",
      description: "Great!",
      icon: (
        <FaUserAlt
          className="bg-red-800 text-pink-400 rounded-lg pt-2 min-w-12"
          size={48}
        />
      ),
      className: "sm:opacity-20 opacity-0 -mt-14",
    },
  ];
  const teamsData = [
    {
      title: "Aniket",
      designation: "The Main Guy",
      image: "/images/icons/guy1.png",
      color: "#808080",
    },
    {
      title: "Nakul",
      designation: "The Main Guy",
      image: "/images/icons/guy1.png",
      color: "#6EB6FF",
    },
    {
      title: "John Ray",
      designation: "Technical Stuff Brain",
      image: "/images/icons/guy2.png",
      color: "#FFFF00",
    },
    {
      title: "Maria Rhode",
      designation: "Marketing Star",
      image: "/images/icons/girl1.png",
      color: "#008000",
    },
    {
      title: "Jeffrey",
      designation: "Creative King",
      image: "/images/icons/guy3.png",
      color: "#0000FF",
    },
    {
      title: "Cleo Jane",
      designation: "Video Artist",
      image: "/images/icons/girl2.png",
      color: "#FF0000",
    },
  ];
  return (
    <div className="space-y-20 customSliderSetting font-medium">
      <Heading
        className="!text-black"
        title="Why subscribe? "
        subTitle="We streamline the design process by breaking down projects into smaller, hyper-focused design tasks."
      />

      <div className="grid grid-cols-12 lg:gap-10 gap-5">
        <div className="lg:col-span-4 sm:col-span-6 lg:order-1 order-2 col-span-12 border flex flex-col justify-center border-gray-200 px-5 md:py-10 py-5 rounded-3xl text-center">
          <motion.div
            viewport={{ once: false, amount: 0.3 }}
            variants={HeroVariants.LEFT}
            whileInView="show"
            initial="hidden"
            className="m-auto"
          >
            <FaFolder size={120} className="text-blue-300" />
          </motion.div>
          <div className="mt-auto space-y-5">
            <div className="text-black lg:text-2xl  sm:text-lg text-[22px]">
              Fast turnarounds
            </div>
            <div className="leading-5 sm:text-sm text-[#717073]">
              Receive lightning-fast delivery of your design request within 24
              to 48 hours.
            </div>
          </div>
        </div>
        <div className="lg:col-span-8 lg:order-2 order-1 col-span-12 border border-gray-200 overflow-hidden relative p-5 rounded-3xl text-center">
          {communicationData?.map((item, idx) => (
            <motion.div
              viewport={{ once: false }}
              variants={HeroVariants.CARD}
              whileInView="show"
              initial="hidden"
              custom={{ delay: idx }}
              key={idx}
            >
              <CommentCard
                className={item?.className}
                name={item?.name}
                description={item?.description}
                icon={item?.icon}
              />
            </motion.div>
          ))}

          <div className="mt-14 space-y-5">
            <div className="text-black lg:text-2xl  sm:text-lg text-[22px]">
              Efficient communication
            </div>
            <div className="leading-5 sm:text-sm text-[#717073]">
              Real-time conversations with your team whenever there's a new
              request or revision.
            </div>
          </div>
        </div>
        <div className="lg:col-span-8 lg:order-3 order-4 col-span-12 relative py-10 md:space-y-10 rounded-3xl border border-gray-200">
          <div className="maskImage">
            <motion.div
              viewport={{ once: false, amount: 0.3 }}
              variants={HeroVariants.CARD}
              whileInView="show"
              initial="hidden"
              custom={{ duration: 0.5 }}
            >
              <Slider {...SLICK_SETTING} speed={5000}>
                {teamsData?.map((item, idx) => (
                  <TeamCard data={item} key={idx} />
                ))}
              </Slider>
            </motion.div>
            <motion.div
              viewport={{ once: false, amount: 0.3 }}
              variants={HeroVariants.CARD1}
              whileInView="show"
              initial="hidden"
              custom={{ duration: 0.5 }}
            >
              <Slider {...SLICK_SETTING} speed={8000}>
                {teamsData?.map((item, idx) => (
                  <TeamCard data={item} key={idx} />
                ))}
              </Slider>
            </motion.div>
          </div>
          <div className="mt-auto px-5 space-y-5 text-center max-w-[400px] mx-auto">
            <div className="text-black lg:text-2xl  sm:text-lg text-[22px]">
              Top-tier creative team
            </div>
            <div className="leading-5 sm:text-sm text-[#717073]">
              We work with a network of creatives from different disciplines to
              deliver outstanding design solutions to you.
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 overflow-hidden sm:col-span-6 lg:order-4 order-3 col-span-12 border border-gray-200 rounded-3xl flex flex-col md:pb-10 pb-5">
          <motion.div
            viewport={{ once: false }}
            variants={HeroVariants.NO_MORE}
            whileInView="show"
            initial="hidden"
            className="bg-[rgb(250, 250, 250)] space-y-4 cardShadowType2 px-5 py-8 rounded-es-2xl rounded-se-3xl ml-auto md:w-[80%] sm:w-full"
          >
            <div className="lg:text-2xl text-lg lg:mb-16 mb-6">
              Say no more to
            </div>
            {[
              "Long meetings",
              "High cost hiring full-time",
              "Micromanagement",
              "Long contracts",
            ]?.map((item, idx) => (
              <motion.div
                viewport={{ once: false }}
                variants={idx % 2 == 0 ? HeroVariants.LEFT : HeroVariants.RIGHT}
                whileInView="show"
                initial="hidden"
                custom={{ delay: idx }}
                key={idx}
                className="flex items-center gap-x-3 mt-auto px-5"
              >
                <div className="h-6 w-6 flex justify-center items-center rounded-lg bg-red-500">
                  <div className="text-xl text-white -mt-[3px]">&times;</div>
                </div>
                <div className="text-[#454545] text-sm">{item}</div>
              </motion.div>
            ))}
          </motion.div>
          <div className="md:mt-auto mt-5 space-y-5 text-center max-w-[400px] mx-auto">
            <div className="text-black lg:text-2xl sm:text-lg text-[22px]">
              Flexibility
            </div>
            <div className="leading-5 sm:text-sm text-[#717073]">
              Scale up or down, pause, or cancel anytime.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySubscribe;
