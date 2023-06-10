import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

interface TwitterCardProps {
  name: string;
  handle?: string;
  comment: string;
  linkedin?: string;
}

const TwitterCard = ({ name, handle, comment, linkedin }: TwitterCardProps) => {
  return (
    <div className=" group bg-secondary px-10 py-5 rounded-3xl flex flex-col gap-5 hover:bg-blue-400 cursor-pointer dark:bg-darkBg">
      <div className="header flex justify-between ">
        <h3 className="text-textSecondary font-bold group-hover:text-white">
          {name}
        </h3>

        {handle && (
          <AiOutlineTwitter className="text-[#0075b5] text-2xl group-hover:text-white" />
        )}
        {linkedin && (
          <FaLinkedin className="text-[#0075b5] text-2xl group-hover:text-white" />
        )}
      </div>

      <div className="comment">
        <p className="text-primary font-medium text-lg group-hover:text-white dark:text-white">
          {comment}
        </p>
      </div>
    </div>
  );
};

export default TwitterCard;
