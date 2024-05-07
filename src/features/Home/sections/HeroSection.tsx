import Button from "@/shared/button/Button";
import { HERO_VERTICAL_SETTING } from "@/utils/constant";
import React from "react";
import { CiStopwatch } from "react-icons/ci";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { HeroVariants } from "@/utils/framer";

const HeroSection = () => {
  // const getData = () => {
  //   axios
  //     .get(
  //       `https://graph.instagram.com/me?fields=id,username,name&access_token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
  //     )
  //     .then((e) => {
  //       console.log({ e });
  //       axios
  //         .get(
  //           `https://graph.instagram.com/${e?.data?.id}?fields=id,media_type,media_url,username,timestamp&access_token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
  //         )
  //         .then((res) => console.log({ fsssss: res }))
  //         .catch((eee) => console.log(eee));
  //     })
  //     .catch((err) => console.log(err));
  // };
  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <div className="space-y-6 mt-10">
      <motion.div
        viewport={{ once: false }}
        variants={HeroVariants.CARD}
        whileInView="show"
        initial="hidden"
        custom={{ delay: 1, duration: 0.4}}
        className="text-black relative font-medium lg:text-[64px] lg:leading-[77px] sm:leading-[60px] sm:text-5xl text-3xl"
      >
        <div>Building Massive Audiences</div>
        <div className="flex heroTextSlider">
          <div>Achieving</div>
          <Slider
            {...HERO_VERTICAL_SETTING}
            className="sm:max-w-[475px] max-w-[230px]"
          >
            {["1 Bn+ Views", "5 Mn+ Followers", "∞ Growth"]?.map(
              (item, idx) => (
                <span className="hero-text" key={idx}>
                  {item}
                </span>
              )
            )}
          </Slider>
        </div>
      </motion.div>
      <motion.p
        viewport={{ once: false }}
        variants={HeroVariants.CARD}
        whileInView="show"
        initial="hidden"
        custom={{ delay: 2, duration: 0.4}}
        className="text-[#87868a] text-lg max-w-[450px]"
      >
        Experience exponential growth with our data-driven strategies that amplify your message
      </motion.p>
      <motion.div
        viewport={{ once: false }}
        variants={HeroVariants.CARD}
        whileInView="show"
        initial="hidden"
        custom={{ delay: 3, duration: 0.4}}
        className="gap-x-2 flex items-center text-[#646464] text-sm"
      >
        <div className="bg-[#09e884] h-2 w-2 rounded-full animate-ping" />Exclusive Access
        <CiStopwatch size={18} />
      </motion.div>
      <motion.div
        viewport={{ once: false }}
        variants={HeroVariants.CARD}
        whileInView="show"
        initial="hidden"
        custom={{ delay: 4, duration: 0.4}}
        className="flex gap-x-4"
      >
        <a href="#Pricing">
        <Button className="border hover:border-gray-100 hover:bg-transparent text-white hover:!text-black">
          View Pricing
        </Button></a>

        <a href="#Contact">
          <Button className="bg-transparent hover:!text-white !text-black border border-gray-100">
            Book a Call
          </Button>
        </a>
      </motion.div>
    </div>
  );
};

export default HeroSection;
