import React from "react";

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <div className="w-full flex-col sm:flex-col md:flex-row lg:flex justify-start items-center">
      <h1 className=" text-3xl sm:text-3xl md:text-5xl lg:text-5xl font-bold text-primary dark:text-white titleFont">
        {title}
      </h1>
      {/* line */}
      <div className="w-full h-[0.5px] bg-gray-200 dark:bg-gray-800  mt-2 ml-2"></div>
    </div>
  );
};

export default Title;
