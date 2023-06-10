import React from "react";
import Image from "next/image";

const AboutHero = () => {
  return (
    <div className="grid grid-cols-5">
      <div className="title bg-secondary p-5 rounded-xl relative dark:bg-darkBg col-span-3">
        <h1 className=" text-[10vh] font-bold text-primary dark:text-white">
          I'm a{" "}
          <span className="titleFont font-medium">
            Software Engineer working remotely from Sri Lanka.
          </span>
        </h1>

        <p className="text-lg text-left text-textPrimary ">
          I enjoy building dynamic, creative products from start to finish.
          Focused on developing intuitive experiences that constantly grow and
          improve based on user metrics. Always shipping.
        </p>

        <div className=" bg-green-500 h-5 w-5 rounded-md absolute right-2 bottom-2" />
      </div>

      <div className="img">
        <Image src={MyImg} alt="my_2" className="object-cover w-full h-full" />
      </div>
    </div>
  );
};

export default AboutHero;
