import React, { useState, useEffect } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import MyImg from "@/assets/images/my.png";
import { BsSpotify } from "react-icons/bs";
import getNowPlayingItem from "@/utils/spotify";
import { motion } from "framer-motion";
import { FiDownloadCloud } from "react-icons/fi";
import { Meteors } from "@/components/Meteors";
import { Badge } from "@/components/Badge";
import { FaReact } from 'react-icons/fa'
import { TbBrandNextjs, TbBrandFigma, TbBrandGithub, TbBrandJavascript, TbBrandDocker } from 'react-icons/tb'
import { IoLogoNodejs } from 'react-icons/io'
import { IconContainer } from "@/components/Radar/iconContainer";
import { Radar } from "@/components/Radar";


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
    <React.Fragment>
      <div className=" flex justify-center items-center my-5">
        <Badge text="Buy Next JS Portfolio Templates" url="https://www.buymeacoffee.com/bawanthathilan" />
      </div>

      <div className="relative mt-0 md:mt-0 lg:mt-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-5 grid-rows-3 gap-0 sm:gap-0 md:gap-5 lg:gap-5 grid-flow-row ">

        <motion.div
          transition={{ delay: 0.2 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className=" group border border-grey-200 dark:border-[#27272a] col-span-2 bg-secondary rounded-2xl p-8 flex flex-col gap-5 row-span-3 cursor-pointer dark:bg-darkBg relative"
        >
          <span className="absolute w-[40%] bottom-0 right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
          <span className="absolute w-px left-0 h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
          <div className="image relative h-[450px] w-full">
            <Image
              src={MyImg}
              alt="my"
              placeholder="blur"
              className="rounded-2xl object-cover "
              fill
            />
          </div>

          <motion.div
            transition={{ duration: 1.5, delay: 0.2 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="title mt-5"
          >
            <h1 className="text-4xl ">
              <span className="font-medium text-textSecondary titleFont">
                hey, I'm
              </span>{" "}
              <br />
              <span className="font-bold text-primary  titleFont dark:text-white">
                Bawantha Thian 👋
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
          className="col-span-3 border border-grey-200 dark:border-[#27272a] bg-secondary rounded-2xl p-8 flex flex-col row-span-2 mt-5 sm:mt-5 md:mt-0 lg:mt-0 dark:bg-darkBg relative overflow-hidden"
        >
          <span className="absolute w-[40%] bottom-0 right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
          <span className="absolute w-px left-0 h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
          <div className="content flex flex-col gap-5  h-full justify-between ">
            <p className="text-primary font-bold text-4xl dark:text-white ">
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
                className="cv  shadow-[0_10px_50px_rgba(8,_112,_184,_0.7)] bg-primary text-white font-medium flex items-center px-5 py-3 md:py-0 lg:py-0 rounded-xl gap-4 dark:bg-secondary dark:text-primary"
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

          <Meteors number={10} />
        </motion.div>

        <motion.div
          transition={{ delay: 0.4 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className=" flex md:flex bg-secondary dark:bg-darkBg relative group cursor-pointer col-span-3  rounded-2xl p-0  flex-col row-span-1 mt-5 sm:mt-5 md:mt-0 lg:mt-0 h-[300px] md:h-[300px]  lg:h-auto"
        >

          <div className="rounded-2xl absolute w-full h-full bg-transparent z-50 hidden group-hover:flex">
            <div className="flex justify-center w-full h-full items-center z-50">
              <h1 className="bg-secondary dark:bg-darkBg  py-2 rounded-md px-4">Tools and Technologies I Used</h1>
            </div>
          </div>

          <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-4 z-10">
            <div className="mx-auto w-full px-5">
              <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
                <IconContainer
                  delay={0.4}
                  text="NEXT JS"
                  icon={<TbBrandNextjs className=" h-8 w-8 text-textSecondary " />}
                />
                <IconContainer
                  delay={0.4}
                  text="React JS"
                  icon={<FaReact className=" h-8 w-8 text-textSecondary " />}
                />
                <IconContainer
                  text="Figma"
                  delay={0.3}
                  icon={<TbBrandFigma className=" h-8 w-8 text-textSecondary" />}
                />
              </div>
            </div>
            <div className="mx-auto w-full max-w-md">
              <div className="flex w-full items-center justify-center space-x-10 md:justify-around md:space-x-0 ">
                <IconContainer
                  text="Git"
                  delay={0.5}
                  icon={<FaReact className=" h-8 w-8 text-textSecondary" />}
                />
                <IconContainer
                  text="Java Script"
                  icon={
                    <TbBrandJavascript className=" h-8 w-8 text-textSecondary" />
                  }
                  delay={0.8}
                />
              </div>
            </div>
            <div className="mx-auto w-full max-w-3xl">
              <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
                <IconContainer
                  delay={0.6}
                  text="GitHub"
                  icon={<TbBrandGithub className=" h-8 w-8 text-textSecondary" />}
                />
                <IconContainer
                  delay={0.7}
                  text="Node JS"
                  icon={<IoLogoNodejs className=" h-8 w-8 text-textSecondary " />}
                />
                <IconContainer
                  delay={0.7}
                  text="Docker"
                  icon={<TbBrandDocker className=" h-8 w-8 text-textSecondary " />}
                />
              </div>
            </div>

            <Radar className="absolute -bottom-12" />
            <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
          </div>
        </motion.div>
      </div>
    </React.Fragment>
  );
};

export default Hero;
