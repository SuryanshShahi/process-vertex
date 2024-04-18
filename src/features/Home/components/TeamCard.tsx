import React from "react";
import ImageCard from "./ImageCard";

const TeamCard = ({ data }: { data: any }) => {
  return (
    <div
      className="rounded-xl p-3 flex justify-between w-[260px] cardShadowType3"
      style={{ backgroundColor: data?.color + "20" }}
    >
      <div className="flex flex-col justify-between">
        <div className="font-semibold">{data?.title}</div>
        <div className="text-xs bg-white px-3 text-gray-500 py-1 w-fit rounded-full">
          {data?.designation}
        </div>
      </div>
      <ImageCard
        className="h-[60px] w-[60px]"
        image={data?.image}
        color={data?.color}
        height={48}
        weight={48}
      />
    </div>
  );
};

export default TeamCard;
