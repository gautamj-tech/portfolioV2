import React, { useState, useEffect } from "react";
import Image from "next/image";
import myImg from "@/assets/images/myImg.png";
import { motion } from "framer-motion";
import { BsStackOverflow } from "react-icons/bs";
import Link from "next/link";
import { SUPABASE_ANON_KEY, SUPABASE_URL } from "@/config/keys";
import { createClient } from "@supabase/supabase-js";

const AboutHero = () => {
  const [work, setWork] = useState([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  const getWorkData = async () => {
    try {
      setLoading(true);
      const { data, error }: any = await supabase
        .from("work")
        .select()
        .order("id", { ascending: true });
      setWork(data);
      setLoading(false);
      if (error) throw error;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWorkData();
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <div className="grid  grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-6 gap-5 ">
        <div className="title bg-secondary p-5 rounded-xl relative dark:bg-darkBg col-span-3 md:col-span-4 lg:col-span-2  flex flex-col gap-5 order-1 justify-center">
          <div className=" text-[30px] sm:text-6xl lg:text-[5vh] font-bold text-primary dark:text-white">
            {/* <span className="titleFont font-sm">Get to know me!</span> */}
            <span className="titleFont font-sm">Hey, I'm Bawantha 👋</span>
          </div>

          <div className="text-xl text-left text-primary dark:text-white">
            Software Engineer at OREL IT
          </div>
        </div>

        <div className="img w-full md:w-full h-[300px] md:h-[250px] relative col-span-3 md:col-span-4 rounded-xl">
          <Image
            src={myImg}
            alt="my"
            fill
            className="object-cover object-top rounded-xl "
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
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 w-full">
        <div className="p-5 rounded-xl relative bg-secondary dark:bg-darkBg flex flex-col gap-5">
          <div className=" text-[30px] lg:text-[5vh] font-bold text-primary dark:text-white">
            <span className="titleFont font-sm">About me</span>
          </div>
          <div className="text-lg text-left text-textPrimary ">
            I graduated from Sri Lanka Institute of Information Technology, in
            2022 with a BSc in Information Technology and have been working in
            the field ever since. On my free time I like to read, play sports,
            travel, to make YouTube videos. I am always seeking new experiences
            and love to keep myself engaged and learning new things.
          </div>
        </div>
        <div className="p-5 rounded-xl relative bg-secondary dark:bg-darkBg flex flex-col gap-5 ">
          <div className=" text-[30px] sm:text-6xl lg:text-[5vh] font-bold text-primary dark:text-white">
            <span className="titleFont font-sm">Experiences</span>
          </div>

          <div className="flex flex-col gap-5">
            {work?.map((workItem: any, index: number) => (
              <div className="div flex flex-row justify-between items-center flex-nowrap w-full gap-3">
                <div className="title w-full">
                  <h2>{workItem.Company_name}</h2>
                  <p className="text-textPrimary">{workItem.Desc}</p>
                </div>
                <hr className="w-full" />
                <div className="date w-full">
                  <span className="text-sm">
                    {workItem.startYear} - {workItem.endYear}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
