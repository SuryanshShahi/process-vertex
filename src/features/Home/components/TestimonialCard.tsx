import React from "react";

const TestimonialCard = () => {
  return (
    <div className="p-10 rounded-[20px] testimonialCard space-y-5 w-full max-w-[520px] border border-neutral-800">
      <p className="text-md font-light leading-[30px]">
        Redesigning our website with AIXGrow has been a game-changer! The
        transformation is unbelievable – not only is it user-friendly, but the
        visual appeal is off the charts. Absolutely wowed by the results!
      </p>
      <div className="flex items-center gap-x-3">
        <img
          alt=""
          className="h-10 w-10 rounded-full"
          src="https://framerusercontent.com/images/YdeRxW0UONt3yhBVmqWZsKUCZyk.png"
        />
        <div className="font-semibold	 text-md">Tiana Roses</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
