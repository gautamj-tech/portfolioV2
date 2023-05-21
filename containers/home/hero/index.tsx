import React, { useState, useEffect } from "react";
import Image from "next/image";

import MyImg from "@/assets/images/my.jpg";
import { BsSpotify, BsArrowUpRightCircle } from "react-icons/bs";
import getNowPlayingItem from "@/utils/spotify";

const Hero = (props: any) => {
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
      <div className=" group col-span-2 bg-secondary rounded-2xl p-8 flex flex-col gap-5 row-span-4 cursor-pointer">
        <div className="image relative h-[450px] w-full">
          <Image
            src={MyImg}
            alt="my"
            className="rounded-2xl object-cover grayscale group-hover:grayscale-0  transition duration-500 ease-in-out "
            fill
          />
        </div>

        <div className="title mt-5">
          <h1 className="text-5xl ">
            <span className="font-medium text-textSecondary">Hi, I'm</span>{" "}
            <br />
            <span className="font-bold text-primary line-through">
              Bawantha Thian
            </span>
          </h1>
        </div>

        <hr />

        <div className="spotify flex gap-5 items-center">
          <div className="logo">
            <BsSpotify className="text-[#1DB954] text-5xl" />
          </div>
          <h3 className="text-[#1DB954] font-bold text-2xl">Spotify</h3>
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
          <marquee>
            <p className="text-white font-bold">
              {result?.isPlaying ? result.title : "Not Listening"} -{" "}
              {result?.isPlaying ? result.artist : "Spotify"}
            </p>
          </marquee>
        </div>
      </div>
      <div className="col-span-3 bg-secondary rounded-2xl p-8 flex flex-col row-span-3 mt-5 sm:mt-5 md:mt-0 lg:mt-0">
        <div className="content flex flex-col gap-5 ">
          <p className="text-primary font-bold text-5xl">
            Software Engineer , Tech Blogger and {""}
            <span className="text-textSecondary">Traveller</span>, opensource
            enthusiast, practicing minimalist, and Pop Music in search of flow.
            Working with my hands to make magic happen on the internet.
          </p>

          <hr />

          <div className="buyMeCofee">
            <a href="https://www.buymeacoffee.com/bawanthathilan">
              <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=bawanthathilan&button_colour=FFDD00&font_colour=000000&font_family=Comic&outline_colour=000000&coffee_colour=ffffff" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-secondary group cursor-pointer col-span-3  rounded-2xl p-8 flex flex-col row-span-1 mt-5 sm:mt-5 md:mt-0 lg:mt-0">
        <div className="content flex flex-row gap-5 justify-between h-full items-center">
          <h1 className="text-5xl font-bold text-primary">
            Some Things I’ve Built
          </h1>

          <BsArrowUpRightCircle className="  text-textPrimary text-5xl cursor-pointer group-hover:text-black group-hover:rotate-90 transition duration-500 ease-in-out " />
        </div>
      </div>
    </div>
  );
};

export default Hero;
