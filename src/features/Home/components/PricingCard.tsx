import Button from "@/shared/button/Button";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const PricingCard = ({ data, theme }: { theme?: "DARK"; data: any }) => {
  return (
    <div
      className={`hover:-mt-5 duration-500 border border-gray-200 p-7 rounded-3xl space-y-6 lg:max-w-[480px] ${
        theme === "DARK" ? "bg-black" : "bg-white"
      }`}
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-x-3">
          <div
            className={`h-12 w-12 rounded-lg flex justify-center items-center ${
              theme === "DARK"
                ? "bg-[linear-gradient(143deg,#2ba7ff_16%,rgb(239,10,255)_61%,rgba(239,10,255,1)_75%)]"
                : "bg-[linear-gradient(143deg,#5921ff_0%,rgb(255,5,5)_46%,rgb(255,69,230)_100%)]"
            }`}
          >
            {data?.headerIcon}
          </div>
          <div>
            <div className="text-lg">{data?.title}</div>
            <div className="text-[#646466] text-sm">{data?.subTitle}</div>
          </div>
        </div>
        <div
          className={`border gap-x-2 rounded-full h-fit w-fit text-[10px] flex items-center border-gray-200 px-3 py-1 ${
            theme === "DARK" ? "text-white" : "text-black"
          }`}
        >
          {data?.rightIcon}
          {data?.rightText}
        </div>
      </div>
      <div className="text-sm text-[#87868a]">{data?.description}</div>
      <div className="space-y-4">
        <div className="flex items-end">
          <div className="pricing-text text-[64px] font-medium leading-[77px]">
            {data?.price}
          </div>
          <span
            className={`text-sm ${
              theme === "DARK" ? "text-white" : "text-black"
            }`}
          >
            / monthly
          </span>
        </div>
        <div className="text-[#87868a] text-sm ">Pause or cancel anytime</div>
      </div>
      <Button
        className={`py-2 w-full !text-black border ${
          theme === "DARK"
            ? "bg-white hover:bg-transparent border-white"
            : "bg-transparent border-gray-200"
        }`}
      >
        Subscribe Now
      </Button>
      <div className="space-y-3 !mt-8">
        <div
          className={`text-sm mb-3 ${
            theme === "DARK" ? "text-white" : "text-black"
          }`}
        >
          What's included:
        </div>
        {data?.included?.map((item: string, idx: number) => (
          <div key={idx} className="flex items-center gap-x-2">
            <FaCircleCheck
              size={16}
              className={`${theme === "DARK" ? "text-white" : "text-black"}`}
            />
            <div className="text-sm text-[#87868a]">{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;