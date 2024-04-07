import Button from "@/shared/button/Button";
import React from "react";
import { FaYoutube } from "react-icons/fa";

const StackingCard = ({
  icon,
  headerText,
  title,
  desctiption,
  btnName,
  leftChildren,
  rightChildren,
  className,
}: {
  icon: any;
  headerText: string;
  title: string;
  desctiption: string;
  btnName?: string;
  leftChildren?: any;
  rightChildren?: any;
  className?: string;
}) => {
  return (
    <div
      className={`bg-white h-[650px] lg:p-10 sm:p-6 p-4 stackingCard rounded-[32px] ${className}`}
    >
      <div className="grid lg:grid-cols-2 lg:gap-5 min-h-full gap-10">
        <div className="space-y-5 max-w-[450px]">
          <div className="flex items-center gap-x-2">
            <div className="bg-gray-100 h-8 w-8 flex justify-center items-center rounded-lg">
              {icon}
            </div>
            <div className="text-lg  text-[#717073]">{headerText}</div>
          </div>
          <div className="text-5xl  leading-[58px]">{title}</div>
          <p className=" text-[#87868a] leading-6">{desctiption}</p>
          {btnName && <Button>{btnName}</Button>}
          {leftChildren}
        </div>
        {rightChildren}
      </div>
    </div>
  );
};

export default StackingCard;
