import React, { useEffect } from "react";

const CalendlyEmbed = ({ url }: { url: string }) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");

    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  }, []);

  return (
    <div
      className="calendly-inline-widget w-full h-[1150px] lg:h-[700px] overflow-hidden"
      data-url={url}
    ></div>
  );
};

export default CalendlyEmbed;
