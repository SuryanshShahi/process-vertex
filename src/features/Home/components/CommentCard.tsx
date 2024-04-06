import React from "react";

const CommentCard = ({
  icon,
  name,
  description,
  className,
}: {
  icon: any;
  name: string;
  description: string;
  className?: string;
}) => {
  return (
    <div
      className={`bg-white p-3 rounded-xl flex gap-x-3 w-full max-w-[300px] cardShadow ${className}`}
    >
      {icon}
      <div className="text-sm space-y-1 text-start">
        <div className="font-semibold">{name}</div>
        <div className="text-[#3d3d3d]">{description}</div>
      </div>
    </div>
  );
};

export default CommentCard;
