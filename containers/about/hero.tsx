import React from "react";
import Image from "next/image";
import myImg from "@/assets/images/myImg.png";
import { motion } from "framer-motion";
import { BsStackOverflow } from "react-icons/bs";
import Link from "next/link";

const AboutHero = () => {
  return (
    <div className="grid  grid-cols-1 sm:grid-cols-1 lg:grid-cols-5 gap-10 ">
      <motion.div
        transition={{ delay: 0.2 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="title bg-secondary p-5 rounded-xl relative dark:bg-darkBg col-span-3 flex flex-col gap-5 order-1"
      >
        <motion.div
          transition={{ duration: 1.5, delay: 0.4 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className=" text-6xl sm:text-6xl lg:text-[7vh] font-bold text-primary dark:text-white"
        >
          <span className="titleFont font-sm">Get to know me!</span>
        </motion.div>

        <motion.div
          transition={{ duration: 1.6, delay: 0.5 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg text-left text-textPrimary "
        >
          Hi, my name is Bawantha and I am a Software Engineer based in Sri
          Lanka. <br /> <br />I graduated from Sri Lanka Institute of
          Information Technology, in 2022 with a BSc in Information Technology
          and have been working in the field ever since. <br />
          <br />
          On my free time I like to read, play sports, travel, to make YouTube
          videos. I am always seeking new experiences and love to keep myself
          engaged and learning new things.
        </motion.div>

        <div className=" bg-green-500 h-5 w-5 rounded-md absolute right-2 bottom-2" />
      </motion.div>

      <motion.div
        transition={{ delay: 0.3 }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="img w-full md:w-full h-[300px] md:h-full relative col-span-3 md:col-span-2 rounded-xl"
      >
        <Image
          src={myImg}
          alt="my"
          fill
          className="object-cover rounded-xl "
          placeholder="blur"
        />

        <div className="ico absolute bottom-2 right-5  bg-gray-900 p-3 rounded-xl text-white cursor-pointer">
          <Link
            href="https://stackoverflow.com/users/9825931/bawantha-rathnayaka"
            target="_blank"
          >
            <BsStackOverflow />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutHero;
