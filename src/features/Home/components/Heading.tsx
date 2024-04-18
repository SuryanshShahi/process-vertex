import React from "react";

const Heading = ({
  title,
  subTitle,
  className,
}: {
  title: string;
  subTitle: string;
  className?: string;
}) => {
  return (
    <div
      className={`text-white text-2xl mx-auto max-w-[600px] text-center leading-[35px] ${className}`}
    >
      {title}
      <span className="text-[#adacb0]">{subTitle}</span>
    </div>
  );
};

export default Heading;
