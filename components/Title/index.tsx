import React from "react";

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <div className="w-full flex justify-start items-center">
      <h1 className=" text-5xl font-bold text-primary dark:text-white">
        {title}
      </h1>
      {/* line */}
      <div className="w-full h-[0.5px] bg-textPrimary mt-2 ml-2"></div>
    </div>
  );
};

export default Title;
