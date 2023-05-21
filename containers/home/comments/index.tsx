import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import Marquee from "@/components/Marquee";

const Comments = () => {
  return (
    <section className="mt-20 mb-20">
      <div className="title flex flex-col justify-start gap-5">
        <h1 className="text-primary text-5xl font-bold">
          Mmmm, a little brag{" "}
          <VscGithubAlt className="inline-block text-5xl text-textSecondary" />
        </h1>

        <p className="text-textSecondary text-3xl">
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
