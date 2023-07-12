import React, { useState, useEffect } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import MyImg from "@/assets/images/my.png";
import Barca from "@/assets/images/barca.gif";
import { BsSpotify } from "react-icons/bs";
import getNowPlayingItem from "@/utils/spotify";
import { motion } from "framer-motion";
import { FiDownloadCloud } from "react-icons/fi";

const Hero = (props: any): any => {
  const [loading, setLoading] = useState<any>(true);
  const [result, setResult] = useState<any>({});

  useEffect(() => {
    Promise.all([
      getNowPlayingItem(
        props.client_id,
        props.client_secret,
        props.refresh_token
      ),
    ]).then((results: any) => {
      setResult(results[0]);
      setLoading(false);
    });
  });

  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 grid-rows-4  gap-0 sm:gap-0 md:gap-5 lg:gap-5 grid-flow-row ">
      <motion.div
        transition={{ delay: 0.2 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className=" group col-span-2 bg-secondary rounded-2xl p-8 flex flex-col gap-5 row-span-4 cursor-pointer dark:bg-darkBg relative"
      >
        <span className="absolute w-[40%] bottom-0 right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
        <span className="absolute w-px left-0 h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
        <div className="image relative h-[450px] w-full">
          <Image
            src={MyImg}
            alt="my"
            placeholder="blur"
            className="rounded-2xl object-cover grayscale group-hover:grayscale-0  transition duration-500 ease-in-out "
            fill
          />
        </div>

        <motion.div
          transition={{ duration: 1.5, delay: 0.2 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="title mt-5"
        >
          <h1 className="text-5xl ">
            <span className="font-medium text-textSecondary titleFont">
              Hi, I'm
            </span>{" "}
            <br />
            <span className="font-bold text-primary  titleFont dark:text-white">
              Bawantha Thian
            </span>
          </h1>
        </motion.div>

        <hr />

        <div className="spotify flex gap-5 items-center flex-row flex-wrap">
          {/* <div className="logo">
            <BsSpotify className="text-[#1DB954] text-5xl" />
          </div>
          <h3 className="text-[#1DB954] font-bold text-2xl">Spotify</h3> */}
        </div>

        <div className="spotify_widget bg-[#1DB954] px-5 py-3 rounded-2xl flex items-center gap-5">
          <div className="album">
            {result?.isPlaying ? (
              <img
                className="rounded-full h-8 w-8"
                src={result?.albumImageUrl}
                alt={result?.album}
              />
            ) : (
              <BsSpotify className="text-white text-2xl" />
            )}
          </div>
          <Marquee>
            <p className="text-white font-bold">
              {result?.isPlaying ? result.title : "Not Listening"} -{" "}
              {result?.isPlaying ? result.artist : "Spotify"}
            </p>
          </Marquee>
        </div>
      </motion.div>
      <motion.div
        transition={{ delay: 0.3 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="col-span-3 bg-secondary rounded-2xl p-8 flex flex-col row-span-3 mt-5 sm:mt-5 md:mt-0 lg:mt-0 dark:bg-darkBg relative"
      >
        <span className="absolute w-[40%] bottom-0 right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
        <span className="absolute w-px left-0 h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
        <div className="content flex flex-col gap-5 ">
          <p className="text-primary font-bold text-5xl dark:text-white ">
            Software Engineer , Tech Blogger and {""}
            <span className="text-textSecondary">Traveller</span>, opensource
            enthusiast, practicing minimalist, and Pop Music in search of flow.
            Working with my hands to make magic happen on the internet.
          </p>

          <hr />

          <div className="btn_group flex flex-col md:flex-row lg:flex-row justify-between gap-4 md:gap-0">
            <a
              href="https://drive.google.com/file/d/1gG4ECmLza1bP8AoafXs-U3otzY0rte0V/view?usp=sharing"
              target="_blank"
              className="cv bg-primary text-white font-medium flex items-center px-5 py-3 md:py-0 lg:py-0 rounded-xl gap-4 dark:bg-secondary dark:text-primary"
            >
              <FiDownloadCloud />
              Download CV
            </a>
            <div className="buyMeCofee">
              <a href="https://www.buymeacoffee.com/bawanthathilan">
                <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=bawanthathilan&button_colour=FFDD00&font_colour=000000&font_family=Poppins&outline_colour=000000&coffee_colour=ffffff" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        transition={{ delay: 0.4 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-secondary relative group cursor-pointer col-span-3  rounded-2xl p-8 flex flex-col row-span-1 mt-5 sm:mt-5 md:mt-0 lg:mt-0 h-[500px] sm:h-[500px] md:h-auto lg:h-auto"
      >
        <Image
          src={Barca}
          alt="messi"
          fill
          unoptimized={true}
          className="object-cover rounded-2xl"
        />

        <p>
          <a href="https://giphy.com/gifs/fcbarcelona-futbol-fc-barcelona-camp-nou-12qVn0zVgCRjpK">
            via GIPHY
          </a>
        </p>

        <div className=" absolute top-0 flex flex-row gap-5 justify-between h-full items-center">
          <h1 className="text-5xl font-bold text-white ">
            True Culer . |{" "}
            <span className=" font-light line-through text-3xl">
              Visca Barca Visca Catalunya
            </span>
          </h1>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
