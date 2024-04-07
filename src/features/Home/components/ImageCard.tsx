import React from "react";

const ImageCard = ({
  className,
  color,
  height,
  weight,
}: {
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
      <img
        src="https://framerusercontent.com/images/GaxkgrTkzKlxI7B3EJtZp4dabI.png"
        height={height || 48}
        width={weight || 48}
        alt=""
      />
    </div>
  );
};

export default ImageCard;
