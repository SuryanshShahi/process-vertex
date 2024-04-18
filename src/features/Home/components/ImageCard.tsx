import Img from "@/shared/Img";
import React from "react";

const ImageCard = ({
  className,
  color,
  height,
  weight,
  image,
}: {
  image: string;
  className: string;
  color: string;
  height: number;
  weight: number;
}) => {
  return (
    <div
      className={`h-[60px] w-[60px] flex justify-center items-center rounded-full ${className}`}
      style={{ backgroundColor: color + "80" }}
    >
      <Img
        src={image}
        height={height || 48}
        width={weight || 48}
        alt={image}
        isLocal
      />
    </div>
  );
};

export default ImageCard;
