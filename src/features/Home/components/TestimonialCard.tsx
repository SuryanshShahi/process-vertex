import React from "react";
import { IoIosHeart, IoIosShareAlt , IoMdCheckmark } from "react-icons/io";
import { BiComment } from "react-icons/bi";
import { FaHeart, FaComment, FaPlay } from "react-icons/fa6";
import { BsSendFill } from "react-icons/bs";



const TestimonialCard = ({
  data,
}: {
  data: { title: string; description: string; image: string; views: string; likes: string; comments: string; shares: string };
}) => {
  return (
    <div className="p-10 rounded-[20px] testimonialCard space-y-5 w-full max-w-[520px] border border-neutral-800">
      <p className="text-md font-light leading-[30px]">{data?.description}</p>
      <div className="flex items-top gap-x-3">
        <img alt="" className="h-12 w-12 rounded-full" src={data?.image} />
        
        <div className="space-y-2">
        <div className="font-semibold	text-md">{data?.title}</div>
        <div className="flex items-center gap-x-4">
                        <div className="text-lg text-[#87868a] flex items-center gap-x-2">
                          <FaPlay size={16} className="text-[#adacb0]" />{data?.views}
                        </div>
                        <div className="text-lg text-[#87868a] flex items-center gap-x-2">
                          <FaHeart size={16} className="text-[#adacb0]" />{data?.likes}
                        </div>
                        <div className="text-lg text-[#87868a] flex items-center gap-x-2">
                          <FaComment size={16} className="text-[#adacb0]" />{data?.comments}
                        </div>
                        <div className="text-lg text-[#87868a] flex items-center gap-x-2">
                          <BsSendFill size={16} className="text-[#adacb0]" />{data?.shares}
                        </div>
      </div>
        </div>
        

      </div>

    </div>
  );
};

export default TestimonialCard;
