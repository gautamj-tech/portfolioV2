import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import MyImg from '@/assets/images/my.png';
import { BsSpotify } from 'react-icons/bs';
import getNowPlayingItem from '@/utils/spotify';
import { motion } from 'framer-motion';
import { FiDownloadCloud } from 'react-icons/fi';
import { Meteors } from '@/components/Meteors';
import { Badge } from '@/components/Badge';
import { FaReact } from 'react-icons/fa';
import {
  TbBrandNextjs,
  TbBrandFigma,
  TbBrandGithub,
  TbBrandJavascript,
  TbBrandDocker
} from 'react-icons/tb';
import { IoLogoNodejs } from 'react-icons/io';
import { IconContainer } from '@/components/Radar/iconContainer';
import { Radar } from '@/components/Radar';

const Hero = (props: any): any => {
  const [loading, setLoading] = useState<any>(true);
  const [result, setResult] = useState<any>({});

  useEffect(() => {
    Promise.all([
      getNowPlayingItem(
        props.client_id,
        props.client_secret,
        props.refresh_token
      )
    ]).then((results: any) => {
      setResult(results[0]);
      setLoading(false);
    });
  });

  return (
    <React.Fragment>
      <div className=" flex justify-center items-center my-5">
        <Badge
          text="Buy Next JS Portfolio Templates"
          url="https://www.buymeacoffee.com/bawanthathilan"
        />
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
              </span>{' '}
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

          {result?.isPlaying ? (
            <div className="flex items-start">
              <span className="inline-flex gap-2 items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700">
                <BsSpotify className="text-[#1DB954] text-md" />

                <p className="whitespace-nowrap text-sm">Now Playing</p>
              </span>
            </div>
          ) : null}

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
                {result?.isPlaying ? result.title : 'Not Listening'} -{' '}
                {result?.isPlaying ? result.artist : 'Spotify'}
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
          <div className="dvg-group absolute -z-0 left-0 bottom-0 hidden md:flex justify-between w-full opacity-30 ">
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {' '}
              <g clip-path="url(#clip0_231_793)">
                {' '}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M50 0H200V50V150L150 200L150 50H0L50 0ZM0 165.067V100L65.067 100L0 165.067ZM100 200H35.7777L100 135.778L100 200Z"
                  fill="url(#paint0_linear_231_793)"
                />{' '}
              </g>{' '}
              <defs>
                {' '}
                <linearGradient
                  id="paint0_linear_231_793"
                  x1="177"
                  y1="-9.23648e-06"
                  x2="39.5"
                  y2="152.5"
                  gradientUnits="userSpaceOnUse"
                >
                  {' '}
                  <stop stop-color="#B0B9FF" />{' '}
                  <stop offset="1" stop-color="#E7E9FF" />{' '}
                </linearGradient>{' '}
                <clipPath id="clip0_231_793">
                  {' '}
                  <rect width="200" height="200" fill="white" />{' '}
                </clipPath>{' '}
              </defs>{' '}
            </svg>
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {' '}
              <g clip-path="url(#clip0_238_1331)">
                {' '}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M146.371 34.5888C147.629 31.5563 148.272 28.3046 148.265 25.0218C148.267 20.0831 146.806 15.2545 144.066 11.1455C141.326 7.03648 137.431 3.83135 132.871 1.9347C128.311 0.038053 123.291 -0.465076 118.445 0.488832C113.6 1.44274 109.145 3.81092 105.644 7.29439L100.004 12.5471L94.4021 7.31163C89.7108 2.62604 83.3503 -0.00403591 76.7198 4.64873e-06C70.0894 0.00404521 63.7321 2.64187 59.0465 7.33318C54.3609 12.0245 51.7308 18.385 51.7348 25.0155C51.7389 31.6459 54.3767 38.0032 59.068 42.6888L97.5477 81.7374C97.8685 82.0631 98.2508 82.3217 98.6725 82.4983C99.0941 82.6748 99.5467 82.7658 100.004 82.7658C100.461 82.7658 100.914 82.6748 101.335 82.4983C101.757 82.3217 102.139 82.0631 102.46 81.7374L140.94 42.6888C143.268 40.3744 145.114 37.6213 146.371 34.5888ZM53.6286 165.411C52.3712 168.444 51.7276 171.695 51.7349 174.978C51.7327 179.917 53.1938 184.746 55.9336 188.855C58.6735 192.964 62.5693 196.169 67.1293 198.065C71.6892 199.962 76.7089 200.465 81.5546 199.511C86.4003 198.557 90.8547 196.189 94.3556 192.706L99.9961 187.453L105.598 192.688C110.289 197.374 116.65 200.004 123.28 200C129.911 199.996 136.268 197.358 140.954 192.667C145.639 187.976 148.269 181.615 148.265 174.985C148.261 168.354 145.623 161.997 140.932 157.311L102.452 118.263C102.132 117.937 101.749 117.678 101.327 117.502C100.906 117.325 100.453 117.234 99.9961 117.234C99.539 117.234 99.0864 117.325 98.6647 117.502C98.2431 117.678 97.8607 117.937 97.54 118.263L59.0603 157.311C56.7321 159.626 54.8859 162.379 53.6286 165.411ZM174.978 148.266C171.695 148.273 168.444 147.629 165.411 146.372C162.379 145.115 159.626 143.268 157.311 140.94L118.263 102.461C117.937 102.14 117.678 101.757 117.502 101.336C117.325 100.914 117.234 100.462 117.234 100.004C117.234 99.5473 117.325 99.0947 117.502 98.6731C117.678 98.2514 117.937 97.869 118.263 97.5483L157.311 59.0686C161.997 54.3773 168.354 51.7394 174.985 51.7354C181.615 51.7314 187.976 54.3614 192.667 59.047C197.358 63.7326 199.996 70.0899 200 76.7204C200.004 83.3509 197.374 89.7114 192.688 94.4027L187.453 100.004L192.706 105.645C196.189 109.146 198.557 113.6 199.511 118.446C200.465 123.292 199.962 128.311 198.065 132.871C196.169 137.431 192.964 141.327 188.855 144.067C184.746 146.807 179.917 148.268 174.978 148.266ZM34.5888 53.628C31.5563 52.3706 28.3046 51.727 25.0218 51.7343C20.0831 51.7321 15.2544 53.1932 11.1455 55.933C7.03647 58.6729 3.83134 62.5687 1.9347 67.1287C0.0380524 71.6887 -0.465076 76.7083 0.488831 81.554C1.44274 86.3997 3.81091 90.8542 7.29439 94.355L12.5471 99.9956L7.31163 105.597C2.62603 110.289 -0.00403599 116.649 4.64892e-06 123.28C0.00404529 129.91 2.64186 136.267 7.33317 140.953C12.0245 145.639 18.385 148.269 25.0155 148.265C31.6459 148.261 38.0032 145.623 42.6888 140.931L81.7373 102.452C82.063 102.131 82.3217 101.749 82.4982 101.327C82.6748 100.905 82.7657 100.453 82.7657 99.9955C82.7657 99.5384 82.6748 99.0858 82.4982 98.6642C82.3217 98.2425 82.063 97.8602 81.7373 97.5394L42.6888 59.0597C40.3744 56.7315 37.6213 54.8853 34.5888 53.628Z"
                  fill="url(#paint0_linear_238_1331)"
                />{' '}
              </g>{' '}
              <defs>
                {' '}
                <linearGradient
                  id="paint0_linear_238_1331"
                  x1="177"
                  y1="-9.23648e-06"
                  x2="39.5"
                  y2="152.5"
                  gradientUnits="userSpaceOnUse"
                >
                  {' '}
                  <stop stop-color="#B0B9FF" />{' '}
                  <stop offset="1" stop-color="#E7E9FF" />{' '}
                </linearGradient>{' '}
                <clipPath id="clip0_238_1331">
                  {' '}
                  <rect width="200" height="200" fill="white" />{' '}
                </clipPath>{' '}
              </defs>{' '}
            </svg>
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {' '}
              <g clip-path="url(#clip0_234_869)">
                {' '}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M50 0H0V100H50C22.3858 100 0 122.386 0 150V200H100V150C100 177.614 122.386 200 150 200H200V100H150C177.614 100 200 77.6142 200 50V0H100V50C100 22.3858 77.6142 0 50 0ZM100 100H50C77.6142 100 100 122.386 100 150V100ZM100 100V50C100 77.6142 122.386 100 150 100H100Z"
                  fill="url(#paint0_linear_234_869)"
                />{' '}
              </g>{' '}
              <defs>
                {' '}
                <linearGradient
                  id="paint0_linear_234_869"
                  x1="100"
                  y1="0"
                  x2="100"
                  y2="200"
                  gradientUnits="userSpaceOnUse"
                >
                  {' '}
                  <stop stop-color="#A7B5FF" />{' '}
                  <stop offset="1" stop-color="#F3ACFF" />{' '}
                </linearGradient>{' '}
                <clipPath id="clip0_234_869">
                  {' '}
                  <rect width="200" height="200" fill="white" />{' '}
                </clipPath>{' '}
              </defs>{' '}
            </svg>
          </div>

          <span className="absolute z-10 w-[40%] bottom-0 right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
          <span className="absolute w-px left-0 h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
          <div className="content z-10 flex flex-col gap-5  h-full justify-between ">
            <p className="text-primary font-bold text-4xl dark:text-white ">
              Software Engineer , Tech Blogger and {''}
              <span className="text-textSecondary">Traveller</span>, opensource
              enthusiast, practicing minimalist, and Pop Music in search of
              flow. Working with my hands to make magic happen on the internet.
            </p>
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
              <h1 className="bg-secondary dark:bg-darkBg  py-2 rounded-md px-4">
                Tools and Technologies I Used
              </h1>
            </div>
          </div>

          <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden px-4 z-10">
            <div className="mx-auto w-full px-5">
              <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
                <IconContainer
                  delay={0.4}
                  text="NEXT JS"
                  icon={
                    <TbBrandNextjs className=" h-8 w-8 text-textSecondary " />
                  }
                />
                <IconContainer
                  delay={0.4}
                  text="React JS"
                  icon={<FaReact className=" h-8 w-8 text-textSecondary " />}
                />
                <IconContainer
                  text="Figma"
                  delay={0.3}
                  icon={
                    <TbBrandFigma className=" h-8 w-8 text-textSecondary" />
                  }
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
                  icon={
                    <TbBrandGithub className=" h-8 w-8 text-textSecondary" />
                  }
                />
                <IconContainer
                  delay={0.7}
                  text="Node JS"
                  icon={
                    <IoLogoNodejs className=" h-8 w-8 text-textSecondary " />
                  }
                />
                <IconContainer
                  delay={0.7}
                  text="Docker"
                  icon={
                    <TbBrandDocker className=" h-8 w-8 text-textSecondary " />
                  }
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
