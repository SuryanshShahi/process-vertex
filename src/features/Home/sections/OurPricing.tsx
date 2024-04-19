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
    <div className="space-y-20 overflow-x-hidden font-medium">
      <Heading
        title="Our Pricing. "
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
                "Scalable Growth for Emerging Brands",
              price: "$1,899",
              included: [
                {
                  title: "Guaranteed Follower Growth",
                  subtitle: "Gain at least 7.5k new followers monthly.",
                },
                {
                  title: "Guaranteed Views",
                  subtitle:
                    "Over 1.5 million views to increase brand visibility.",
                },
                {
                  title: "High Engagement",
                  subtitle:
                    "Maintain a 10% engagement rate, exceptional in any sector.",
                },
                {
                  title: "24/7 Support",
                  subtitle:
                    "Round-the-clock assistance for uninterrupted growth.",
                },
                {
                  title: "Monthly Engagement Reports",
                  subtitle: "Detailed insights to stay ahead of trends.",
                },
                {
                  title: "Trend Adoption",
                  subtitle:
                    "Early access to social media trends for timely content.",
                },
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
              description: "Accelerated Expansion for Ambitious Brands",
              price: "$3,199",
              included: [
                {
                  title: "Enhanced Follower Growth",
                  subtitle: "Secure a minimum of 15k followers each month.",
                },
                {
                  title: "Amplified Views",
                  subtitle:
                    "Guarantee of over 3 million views for superior exposure.",
                },
                {
                  title: "Elevated Engagement",
                  subtitle: "Aim for over 15% engagement to lead your niche.",
                },
                {
                  title: "Priority Support",
                  subtitle:
                    "Dedicated account manager for personalized service.",
                },
                {
                  title: "In-depth Analytics",
                  subtitle:
                    "Comprehensive reports for informed decision-making.",
                },
                {
                  title: "Content Strategy Consultation",
                  subtitle: "Monthly sessions with our content experts.",
                },
                {
                  title: "Premium Trend Insights",
                  subtitle: "Advanced notice and strategy for upcoming trends.",
                },
              ],
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default OurPricing;
