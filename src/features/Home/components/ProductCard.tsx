import React from "react";

const ProductCard = ({ theme }: { theme: string }) => {
  return (
    <div className="bg-white space-y-3 min-w-[230px] rounded-2xl p-[10px] text-[#131314] text-sm">
      <div className="">ACME Inc.</div>
      <img
        src="https://framerusercontent.com/images/Icn2EFtv4cozKKqjLZV9xzBFN4.webp?scale-down-to=1024"
        className="h-[158px] w-[206px] rounded-lg object-cover"
      />
      <div className="flex justify-between">
        <div className="">Nike One Hopara</div>
        <div>$80</div>
      </div>
      <div className="text-[#87868A]">Nike</div>
      <div
        className="w-full hover:opacity-80 cursor-pointer text-center rounded-full text-white text-sm bg-black duration-500 p-2 px-5"
        style={{ backgroundColor: theme + "95" }}
      >
        Buy Now
      </div>
    </div>
  );
};

export default ProductCard;
