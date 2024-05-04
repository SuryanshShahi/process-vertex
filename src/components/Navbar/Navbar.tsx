import Img from "@/shared/Img";
import Button from "@/shared/button/Button";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex md:p-10 p-5 sticky top-0 z-20">
      <div className="flex gap-x-3 items-center">
        <Img
          height={32}
          width={32}
          src="/images/icons/logo.webp"
          isLocal
          className="object-contain"
          alt=""
        />
        <div className="text-2xl text-black">Process</div>
      </div>
      <div className="tabBar rounded-full items-center lg:flex hidden pl-5 pr-3 py-3 mx-auto gap-x-3">
        {["About", "Contact", "Pricing", "Testimonials"]?.map((item, idx) => (
          <a href={`#${item}`} key={idx} className="text-sm">
            {item}
          </a>
        ))}
        <a href="#Contact">
          <Button size="sm" className="px-3 py-2">
            Book a Call
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
