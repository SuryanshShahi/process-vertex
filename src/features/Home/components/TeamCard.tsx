import React from "react";
import ImageCard from "./ImageCard";

const TeamCard = ({
  title,
  designation,
  color,
}: {
  title: string;
  designation: string;
  color: string;
}) => {
  return (
    <div
      className="rounded-xl p-3 flex justify-between w-[260px] cardShadowType3"
      style={{ backgroundColor: color + "20" }}
    >
      <div className="flex flex-col justify-between">
        <div className="font-semibold">{title}</div>
        <div className="text-xs bg-white px-3 text-gray-500 py-1 w-fit rounded-full">
          {designation}
        </div>
      </div>
      <ImageCard
        className="h-[60px] w-[60px]"
        color={color}
        height={48}
        weight={48}
      />
    </div>
  );
};

export default TeamCard;
