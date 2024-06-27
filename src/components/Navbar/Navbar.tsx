import Img from "@/shared/Img";
import Button from "@/shared/button/Button";
import useScrollHidden from "@/utils/hooks/useScrollHidden";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();
  useScrollHidden(isActive);
  return (
    <>
      <div className="flex md:p-10 p-5 items-center sticky top-0 z-20">
        <div className="flex gap-x-3 items-center">
          <Img
            height={40}
            width={40}
            src="/images/icons/logo.png"
            isLocal
            className="object-contain"
            alt=""
          />
          <div className="text-2xl text-black">AIXGrow</div>
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
        <GiHamburgerMenu
          className="sm:hidden ml-auto"
          size={24}
          onClick={() => setIsActive(!isActive)}
        />
      </div>

      {isActive && (
        <div
          className="bg-white h-full w-screen space-y-6 p-4 fixed top-0"
          id="sideBar"
        >
          <div className="flex gap-x-3 items-center">
            <Img
              height={32}
              width={32}
              src="/images/icons/logo.png"
              isLocal
              className="object-contain"
              alt=""
            />
            <div className="text-2xl text-black">AIXGrow</div>
            <div
              className="ml-auto text-4xl"
              onClick={() => setIsActive(false)}
            >
              &times;
            </div>
          </div>
          <div className={`space-y-5 font-extrabold mr-5`}>
            {["About", "Contact", "Pricing", "Testimonials"]?.map(
              (item, idx) => (
                <div key={idx}>
                  <a
                    href={`#${item}`}
                    className="text-base font-medium"
                    onClick={() => setIsActive(false)}
                  >
                    {item}
                  </a>
                </div>
              )
            )}
          </div>
          <div className="flex flex-col items-center gap-4 !mt-10">
            <a href="#Contact" className="w-full">
              <Button size="sm" className="px-3 py-2 w-full">
                Book a Call
              </Button>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
