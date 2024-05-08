import React from "react";

const TestimonialCard = ({
  data,
}: {
  data: { title: string; description: string; image: string };
}) => {
  return (
    <div className="p-10 rounded-[20px] testimonialCard space-y-5 w-full max-w-[520px] border border-neutral-800">
      <p className="text-md font-light leading-[30px]">{data?.description}</p>
      <div className="flex items-center gap-x-3">
        <img alt="" className="h-10 w-10 rounded-full" src={data?.image} />
        <div className="font-semibold	text-md">{data?.title}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
