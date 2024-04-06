import React from "react";
import Button from "@/shared/button/Button";
import { FaYoutube } from "react-icons/fa";
import { MdCheckCircleOutline, MdEdit } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { FaCirclePause } from "react-icons/fa6";
import { Variants, motion } from "framer-motion";
import StackingCard from "../components/StackingCard";
import Heading from "../components/Heading";
import useWindowDimensions from "@/utils/hooks/useWindowDimension";
export const HeroVariants: { [x: string]: Variants } = {
  BIRD: {
    hidden: {
      opacity: 0,
      scaleX:
        typeof window !== "undefined" && window?.innerWidth > 1280 ? 1.2 : 1,
      position: "relative",
    },
    show: {
      opacity: 1,
      scaleX: 1,
      position: "relative",
      transition: { duration: 0.5, staggerChildren: 0.5 },
    },
  },

  CONTAINER: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
};

const CardAnimation = () => {
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
              viewport={{ once: false }}
              variants={HeroVariants.BIRD}
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
                  <div className="bg-black w-full h-[450px] rounded-3xl flex items-center justify-center">
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
              viewport={{ once: false }}
              variants={HeroVariants.BIRD}
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
                        <div className=" text-[#646466]">{item}</div>
                      </div>
                    ))}
                  </div>
                }
                rightChildren={
                  <div className="bg-black h-[450px] rounded-3xl flex items-center justify-center">
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
          <div className="md:top-[30%] top-[20%] sticky">
            <motion.div
              viewport={{ once: false }}
              variants={HeroVariants.BIRD}
              whileInView="show"
              initial="hidden"
            >
              <StackingCard
                icon={<MdEdit size={18} className="m-auto text-gray-500" />}
                headerText="Revise"
                title="Revise until you're 100% satisfied"
                desctiption="Say goodbye to additional charges for revisions – we're committed to refining the designs until you're completely satisfied."
                rightChildren={
                  <div className="bg-black h-[450px] rounded-3xl flex items-center justify-center">
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
              viewport={{ once: false }}
              variants={HeroVariants.BIRD}
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
                  <div className="bg-black h-[450px] rounded-3xl flex items-center justify-center">
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
        </div>
      </div>
    </div>
  );
};

export default CardAnimation;
