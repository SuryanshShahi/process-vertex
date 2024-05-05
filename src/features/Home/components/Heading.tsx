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
      className={`text-white xl:text-[32px] text-2xl mx-auto sm:max-w-[600px] max-w-[450px] text-center leading-[35px] ${className}`}
    >
      {title}
      <span className="text-[#adacb0]">{subTitle}</span>
    </div>
  );
};

export default Heading;
