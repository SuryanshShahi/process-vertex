import React from "react";
import Heading from "../components/Heading";
import { GiStarsStack } from "react-icons/gi";
import { FaStar, FaStopwatch } from "react-icons/fa";
import { PiCalendarPlusFill, PiLightningFill } from "react-icons/pi";
import PricingCard from "../components/PricingCard";
import { HeroVariants } from "@/utils/framer";
import { motion } from "framer-motion";
import Button from "@/shared/button/Button";

const OurPricing = () => {
  return (
    <div
      className="space-y-20 font-medium max-[768px]:overflow-hidden"
      id="Pricing"
    >
      <Heading
        title="Our Pricing. "
        className="!text-black"
        subTitle="No lengthy contracts. No managing employees. No headaches."
      />
      <div className="flex lg:flex-row flex-wrap flex-col justify-center gap-10">
        <motion.div
          viewport={{ once: false, amount: 0.1 }}
          variants={HeroVariants.LEFT}
          custom={{ duration: 0.4 }}
          whileInView="show"
          initial="hidden"
          className="hover:-top-5 top-0 relative duration-500"
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
              description: "Scalable Growth for Emerging Brands",
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
          viewport={{ once: false, amount: 0.1 }}
          variants={HeroVariants.RIGHT}
          whileInView="show"
          initial="hidden"
          custom={{ duration: 0.4 }}
          className="hover:-top-5 top-0 relative duration-500"
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
        <motion.div
          viewport={{ once: false, amount: 0.1 }}
          variants={HeroVariants.CARD}
          whileInView="show"
          initial="hidden"
          custom={{ duration: 0.4 }}
          className="hover:-top-5 flex mx-auto flex-col gap-y-10 items-center top-0 max-w-[500px] relative duration-500 bg-[#fafafa] rounded-[32px] p-7 border border-[rgba(212,212,212,.6)]"
        >
          <div className="space-y-5 text-center">
            <div className="text-black lg:text-2xl  sm:text-lg text-[22px]">
              Custom project?
            </div>
            <div className="leading-5 sm:text-sm text-[#717073]">
              Looking for a project with quoted fees and delivered in
              milestones? Schedule a call with us for a thorough discussion
              before making a decision.
            </div>
          </div>
          <a href="#Contact" className="w-full">
            <Button className="border py-[10px] w-full justify-center hover:border-gray-100 flex items-center gap-x-2 group hover:bg-transparent text-white hover:!text-black">
              <PiCalendarPlusFill
                className="group-hover:text-black duration-500 text-white"
                size={14}
              />
              Book a Call
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default OurPricing;
