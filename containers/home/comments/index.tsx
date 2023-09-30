import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineComment } from 'react-icons/ai'
import Marquee from "@/components/Marquee";

const Comments = () => {
  return (
    <section className="mt-20 mb-20">
      <div className="title flex flex-col justify-start gap-5 text-center sm:text-center md:text-left lg:text-left">
        <h1 className="text-primary text-3xl sm:text-3xl md:text-5xl lg:text-5xl font-bold dark:text-white titleFont">
          Mmmm, a little brag{" "}
          <AiOutlineComment className="hidden md:inline-block lg:inline-block text-5xl text-primary dark:text-white" />
        </h1>

        <p className="text-textSecondary text-xl sm:text-3xl md:text-3xl lg:text-3xl ">
          What people are saying about my portfolio
        </p>
      </div>

      <div className="comments mt-10">
        <Marquee />
      </div>
    </section>
  );
};

export default Comments;
