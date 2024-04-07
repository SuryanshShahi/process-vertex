import React from "react";
import Heading from "../components/Heading";
import { GiStarsStack } from "react-icons/gi";
import { FaStar, FaStopwatch } from "react-icons/fa";
import { PiLightningFill } from "react-icons/pi";
import PricingCard from "../components/PricingCard";
import { HeroVariants } from "@/utils/framer";
import { motion } from "framer-motion";

const OurPricing = () => {
  return (
    <div className="space-y-20">
      <Heading
        title="Our Pricing."
        className="!text-black"
        subTitle="No lengthy contracts. No managing employees. No headaches."
      />
      <div className="flex lg:flex-row flex-col justify-center gap-10">
        <motion.div
          viewport={{ once: false, amount: 0.3 }}
          variants={HeroVariants.LEFT}
          custom={{ duration: 0.4 }}
          whileInView="show"
          initial="hidden"
        >
          <PricingCard
            data={{
              title: "Starter",
              subTitle: "One request at a time",
              rightText: "Most popular",
              rightIcon: <FaStar size={12} className="text-gray-400" />,
              headerIcon: (
                <GiStarsStack
                  className="-rotate-[135deg] text-white mt-1"
                  size={26}
                />
              ),
              description:
                "Ideal for individuals or startups seeking on-demand design assistance",
              price: "$4,999",
              included: [
                "One request at a time",
                "Unlimited revisions",
                "48 hours turnaround per request",
                "1x Junior designer",
                "Communication via Slack",
                "Weekly progress updates",
              ],
            }}
          />
        </motion.div>
        <motion.div
          viewport={{ once: false, amount: 0.3 }}
          variants={HeroVariants.RIGHT}
          whileInView="show"
          initial="hidden"
          custom={{ duration: 0.4 }}
        >
          <PricingCard
            theme="DARK"
            data={{
              title: "Growth",
              subTitle: "Two requests at a time",
              rightText: "1 spot remaining",
              rightIcon: <FaStopwatch size={12} className="text-white" />,
              headerIcon: <PiLightningFill className="text-white" size={26} />,
              description:
                "Ideal for companies with a growing need for design support, maintenance, and services",
              price: "$8,999",
              included: [
                "One request at a time",
                "Unlimited revisions",
                "48 hours turnaround per request",
                "1x Junior designer",
                "Communication via Slack",
                "Weekly progress updates",
              ],
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default OurPricing;
