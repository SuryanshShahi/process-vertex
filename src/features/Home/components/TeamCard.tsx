import React from "react";

const TeamCard = ({
  title,
  designation,
  color,
}: {
  title: string;
  designation: string;
  color?: string;
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

      <div
        className="h-[60px] w-[60px] flex justify-center items-center rounded-full"
        style={{ backgroundColor: color + "80" }}
      >
        <img
          src="https://framerusercontent.com/images/GaxkgrTkzKlxI7B3EJtZp4dabI.png"
          height={48}
          width={48}
          alt=""
        />
      </div>
    </div>
  );
};

export default TeamCard;
