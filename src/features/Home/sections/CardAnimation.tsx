import React from "react";
import Button from "@/shared/button/Button";
import { FaUserAlt, FaYoutube } from "react-icons/fa";
import { MdCheckCircleOutline, MdEdit } from "react-icons/md";
import { IoIosAttach, IoMdCheckmark } from "react-icons/io";
import { FaCirclePause } from "react-icons/fa6";
import { Variants, motion } from "framer-motion";
import StackingCard from "../components/StackingCard";
import Heading from "../components/Heading";
import { HeroVariants } from "@/utils/framer";
import { BiComment } from "react-icons/bi";
import { GoPlus } from "react-icons/go";
import ImageCard from "../components/ImageCard";
import Img from "@/shared/Img";

const CardAnimation = () => {
  const StatckingCard: { [x: string]: Variants } = {
    LEFT: {
      hidden: {
        opacity: 0,
        x: -350,
      },
      show: (prop?: any) => ({
        opacity: 1,
        position: "absolute",
        x: 0,
        transition: {
          delay: prop?.delay && 0.05 * prop?.delay,
          staggerChildren: 0.5,
        },
      }),
    },
    RIGHT: {
      hidden: {
        opacity: 0,
        x: 350,
      },
      show: (prop?: any) => ({
        opacity: 1,
        position: "absolute",
        x: 0,
        transition: {
          delay: prop?.delay && 0.05 * prop?.delay,
          staggerChildren: 0.5,
        },
      }),
    },
    TOP: {
      hidden: {
        opacity: 0,
        y: 250,
      },
      show: (prop?: any) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: prop?.delay && 0.05 * prop?.delay,
          duration: 0.3,
        },
      }),
    },
  };
  return (
    <div className="howWeWork pt-[160px] pb-[60px]">
      <div className="container mx-auto sm:px-5 px-4 space-y-20">
        <Heading
          title="How we work?"
          subTitle="We streamline the design workflow by breaking down projects into
            bite-sized design tasks."
        />

        <div className="lg:h-[3000px] h-[4000px] space-y-20">
          <div className="md:top-[20%] top-[10%] sticky">
            <motion.div
              viewport={{ once: false, amount: 0.1 }}
              variants={HeroVariants.STACKING_CARD}
              whileInView="show"
              initial="hidden"
            >
              <StackingCard
                icon={<FaYoutube size={18} className="m-auto text-gray-500" />}
                headerText="Subscribe"
                title="Get instant access to unlimited design"
                desctiption="Get instant access to unlimited design requests and revisions
      from our top-tier design team using our monthly subscription.
      No more wasting time hiring unreliable freelancers or locking
      in lengthy contracts."
                btnName="View Pricing"
                rightChildren={
                  <div className="bg-black w-full h-[450px] m-auto rounded-3xl flex items-center justify-center">
                    <div className="max-w-[300px] space-y-10">
                      <div className="space-y-4">
                        <div className="flex items-end">
                          <div className="pricing-text text-[64px] font-medium leading-[77px]">
                            $4,999
                          </div>
                          <span className="text-white">/ monthly</span>
                        </div>
                        <div className="text-[#646466] text-sm ">
                          Pause or cancel anytime
                        </div>
                      </div>
                      <Button className="bg-neutral-800 py-3 w-full text-white">
                        Subscribe Now
                      </Button>
                    </div>
                  </div>
                }
              />
            </motion.div>
          </div>
          <div className="md:top-[25%] top-[15%] sticky">
            <motion.div
              viewport={{ once: false, amount: 0.1 }}
              variants={HeroVariants.STACKING_CARD}
              whileInView="show"
              initial="hidden"
            >
              <StackingCard
                icon={
                  <IoMdCheckmark size={18} className="m-auto text-gray-500" />
                }
                headerText="Request"
                title="Add as many design requests as needed"
                desctiption="Add as many design requests to your queue as necessary. We will work on them sequentially, one by one. Usually, the majority of requests are fulfilled within 48 hours, sometimes even quicker, depending on the plan."
                leftChildren={
                  <div className="gap-y-[10px]">
                    {[
                      "Unlimited requests",
                      "One or two requests at a time",
                      "48 hours turnaround per request",
                    ]?.map((item, idx) => (
                      <div className="flex items-center gap-x-3" key={idx}>
                        <MdCheckCircleOutline className="bg-green-100 rounded-full text-green-400" />
                        <div className="text-[#646466]">{item}</div>
                      </div>
                    ))}
                  </div>
                }
                rightChildren={
                  <div className="max-w-[350px] w-full space-y-4 m-auto">
                    <motion.div
                      viewport={{ once: false, amount: 0.3 }}
                      variants={HeroVariants.RIGHT}
                      custom={{ delay: 1, duration: 0.8 }}
                      whileInView="show"
                      initial="hidden"
                      className="border gap-y-6 cardShadow border-gray-200 bg-gray-50 h-fit rounded-[18px] p-4 space-y-6"
                    >
                      <div className="px-2 py-1 text-xs text-[#4a0ffc] bg-voilet-50 border border-violet-300 w-fit rounded-full">
                        Design
                      </div>
                      <div>
                        <div className="">Create 3 social media posts</div>
                        <div className="text-[#87868a]">
                          Showcase Arrival's features
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 rounded-full w-full bg-gray-400 relative">
                          <motion.div
                            viewport={{ once: false, amount: 0.3 }}
                            variants={HeroVariants.PROGRESS}
                            whileInView="show"
                            initial="hidden"
                            className="bg-blue-600 h-full absolute rounded-full"
                          />
                        </div>
                        <div className="text-[#adacb0] text-xs">
                          74% completed
                        </div>
                      </div>
                      <div className="flex items-center gap-x-4">
                        <div className="text-sm text-[#87868a] flex items-center gap-x-1">
                          <BiComment size={12} className="text-[#adacb0]" />6
                        </div>
                        <div className="text-sm text-[#87868a] flex items-center gap-x-1">
                          <IoIosAttach size={12} className="text-[#adacb0]" />2
                        </div>
                        <ImageCard
                          className="!h-[30px] ml-auto !w-[30px]"
                          color="#ff0000"
                          height={24}
                          weight={24}
                        />
                      </div>
                    </motion.div>
                    <motion.div
                      viewport={{ once: false, amount: 0.3 }}
                      variants={HeroVariants.LEFT}
                      whileInView="show"
                      custom={{ delay: 2, duration: 0.8 }}
                      initial="hidden"
                      className="border flex items-center gap-x-3 justify-center border-gray-200 p-4 rounded-[18px] cardShadow  bg-gray-50"
                    >
                      <div className="h-[30px] w-[30px] flex justify-center items-center rounded-full bg-[rgba(222,222,222,0.8)]">
                        <GoPlus size={16} />
                      </div>
                      <div className="text-sm text-[#717073]">
                        Add a new task
                      </div>
                    </motion.div>
                  </div>
                }
              />
            </motion.div>
          </div>
          <div className="md:top-[30%] top-[20%] sticky">
            <motion.div
              viewport={{ once: false, amount: 0.1 }}
              variants={HeroVariants.STACKING_CARD}
              whileInView="show"
              initial="hidden"
            >
              <StackingCard
                icon={<MdEdit size={18} className="m-auto text-gray-500" />}
                headerText="Revise"
                title="Revise until you're 100% satisfied"
                desctiption="Say goodbye to additional charges for revisions – we're committed to refining the designs until you're completely satisfied."
                rightChildren={
                  <div className="bg-black h-[450px] m-auto w-full rounded-3xl flex items-center justify-center">
                    <div className="max-w-[300px] space-y-10">
                      <div className="space-y-4">
                        <div className="flex items-end">
                          <div className="pricing-text text-[64px] font-medium leading-[77px]">
                            $4,999
                          </div>
                          <span className="text-white">/ monthly</span>
                        </div>
                        <div className="text-[#646466] text-sm ">
                          Pause or cancel anytime
                        </div>
                      </div>
                      <Button className="bg-neutral-800 py-3 w-full text-white">
                        Subscribe Now
                      </Button>
                    </div>
                  </div>
                }
              />
            </motion.div>
          </div>
          <div className="md:top-[35%] top-[25%] sticky">
            <motion.div
              viewport={{ once: false, amount: 0.1 }}
              variants={HeroVariants.STACKING_CARD}
              whileInView="show"
              initial="hidden"
            >
              <StackingCard
                icon={
                  <FaCirclePause size={18} className="m-auto text-gray-500" />
                }
                headerText="Pause or cancel"
                title="Pause or cancel anytime"
                desctiption="The flexibility of our service sets Process apart as an exceptional design partner. Choose to maintain your subscription to meet ongoing design needs, or simply cancel when your design requirements are fulfilled."
                rightChildren={
                  <div className="px-8 pt-8 overflow-hidden relative max-h-[450px] mx-auto w-full overflowhidden bg-[linear-gradient(180deg,#e8deff_0%,rgb(250,245,255)_60%,rgb(253,247,255)_99%)] rounded-3xl">
                    <motion.div
                      viewport={{ once: false, amount: 0.2 }}
                      custom={{ delay: 0.5 }}
                      variants={StatckingCard.RIGHT}
                      whileInView="show"
                      initial="hidden"
                      className="absolute top-10 left-[10%]"
                    >
                      <ImageCard
                        className="!h-[80px] !w-[80px]"
                        color="#808080"
                        height={68}
                        weight={68}
                      />
                    </motion.div>
                    <motion.img
                      viewport={{ once: false, amount: 0.2 }}
                      custom={{ delay: 1 }}
                      variants={StatckingCard.TOP}
                      whileInView="show"
                      initial="hidden"
                      src="https://framerusercontent.com/images/zE1srbw5NnBTIC4p1Pm1mHUTk94.webp"
                      className="w-[220px] h-[440px] cardShadow rounded-t-2xl mx-auto mt-8"
                    />

                    <motion.img
                      viewport={{ once: false, amount: 0.2 }}
                      custom={{ delay: 1.5 }}
                      variants={StatckingCard.LEFT}
                      whileInView="show"
                      initial="hidden"
                      src="https://framerusercontent.com/images/Ga8vfNFxAf9JwpbK2esRcOPBtc.png"
                      className="w-[180px] h-[142px] absolute cardShadow right-[8%] bottom-[10%] rounded-2xl"
                    />
                    <motion.div
                      viewport={{ once: false, amount: 0.2 }}
                      custom={{ delay: 2 }}
                      variants={StatckingCard.RIGHT}
                      whileInView="show"
                      initial="hidden"
                      className="bottom-20 w-fit absolute"
                    >
                      <ImageCard
                        className="!h-[80px] !w-[80px]"
                        color="#FFFF00"
                        height={68}
                        weight={68}
                      />
                    </motion.div>
                    <motion.div
                      viewport={{ once: false, amount: 0.2 }}
                      custom={{ delay: 2.5 }}
                      variants={StatckingCard.LEFT}
                      whileInView="show"
                      initial="hidden"
                      className="right-10 top-32 absolute"
                    >
                      <ImageCard
                        className="!h-[80px] !w-[80px]"
                        color="#ff0000"
                        height={68}
                        weight={68}
                      />
                    </motion.div>
                  </div>
                }
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAnimation;
