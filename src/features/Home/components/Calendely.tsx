import React, { useEffect } from "react";
import Heading from "./Heading";

const CalendlyEmbed = ({ url }: { url: string }) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");

    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head && head.appendChild(script);
  }, []);

  return (
    <div className="mt-20 sm:space-y-0 space-y-10">
      <Heading
        title="Get in Touch."
        subTitle="Partner with us
        and watch your business Grow!"
        className="!text-black"
      />
      <div
        className="calendly-inline-widget w-full h-[1150px] lg:h-[700px] overflow-hidden"
        data-url={url}
      ></div>
    </div>
  );
};

export default CalendlyEmbed;
