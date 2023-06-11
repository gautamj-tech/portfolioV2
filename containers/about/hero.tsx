import React from "react";
import Image from "next/image";
import myImg from "@/assets/images/myImg.png";

const AboutHero = () => {
  return (
    <div className="grid  grid-cols-1 sm:grid-cols-1 lg:grid-cols-5 gap-10 ">
      <div className="title bg-secondary p-5 rounded-xl relative dark:bg-darkBg col-span-3 flex flex-col gap-5">
        <h1 className=" text-6xl sm:text-6xl lg:text-[10vh] font-bold text-primary dark:text-white">
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

      <div className="img w-full h-full relative col-span-2 rounded-xl">
        <Image
          src={myImg}
          alt="my"
          fill
          className=" object-cover rounded-xl"
          placeholder="blur"
        />
      </div>
    </div>
  );
};

export default AboutHero;
