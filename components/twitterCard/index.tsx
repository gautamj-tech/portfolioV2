import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from 'react-icons/ri'

interface TwitterCardProps {
  name: string;
  handle?: string;
  comment: string;
  linkedin?: string;
}

const TwitterCard = ({ name, handle, comment, linkedin }: TwitterCardProps) => {
  return (
    <div className=" group border border-grey-200 dark:border-[#27272a]  bg-secondary px-10 py-5 rounded-lg flex flex-col gap-5 hover:bg-blue-400 dark:hover:bg-blue-400 cursor-pointer dark:bg-darkBg relative">
      <span className="absolute w-[40%] bottom-0 right-5 h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
      <span className="absolute w-px left-0 top-5 h-[50%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
      <div className="header flex justify-between ">
        <h3 className="text-textSecondary font-bold group-hover:text-white">
          {name}
        </h3>

        {handle && (
          <RiTwitterXFill className="text-[#0075b5] text-2xl group-hover:text-white" />
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
