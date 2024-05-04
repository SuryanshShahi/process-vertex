import Button from "@/shared/button/Button";
import { HERO_VERTICAL_SETTING } from "@/utils/constant";
import React from "react";
import { CiStopwatch } from "react-icons/ci";
import Slider from "react-slick";

const HeroSection = () => {
  // const getData = () => {
  //   axios
  //     .get(
  //       `https://graph.instagram.com/me?fields=id,username,name&access_token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
  //     )
  //     .then((e) => {
  //       console.log({ e });
  //       axios
  //         .get(
  //           `https://graph.instagram.com/${e?.data?.id}?fields=id,media_type,media_url,username,timestamp&access_token=${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
  //         )
  //         .then((res) => console.log({ fsssss: res }))
  //         .catch((eee) => console.log(eee));
  //     })
  //     .catch((err) => console.log(err));
  // };
  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <div className="space-y-6 mt-10">
      <div className="text-black relative font-medium lg:text-[64px] lg:leading-[77px] sm:leading-[60px] sm:text-5xl text-3xl">
        <div>Building Massive Audiences</div>
        <div className="flex heroTextSlider">
          <div>Achieving</div>
          <Slider
            {...HERO_VERTICAL_SETTING}
            className="sm:max-w-[300px] max-w-[150px]"
          >
            {["Startups", "Founders", "Agencies"]?.map((item, idx) => (
              <span className="hero-text" key={idx}>
                {item}
              </span>
            ))}
          </Slider>
        </div>
      </div>
      <p className="text-[#87868a] text-lg max-w-[450px]">
        Get instant access to unlimited design requests and revisions from a
        top-tier creative team for a flat monthly fee. Pause or cancel anytime.
      </p>
      <div className="gap-x-2 flex items-center text-[#646464] text-sm">
        <div className="bg-[#09e884] h-2 w-2 rounded-full animate-ping" />2
        spots available
        <CiStopwatch size={18} />
      </div>
      <div className="flex gap-x-4">
        <Button className="border hover:border-gray-100 hover:bg-transparent text-white hover:!text-black">
          View Pricing
        </Button>

        <a href="#Contact">
          <Button className="bg-transparent hover:!text-white !text-black border border-gray-100">
            Book a Call
          </Button>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
