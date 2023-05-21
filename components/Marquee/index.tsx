import React from "react";
import Marqueee from "react-fast-marquee";
import { comments } from "@/data/comments";
import TwitterCard from "../twitterCard";

const Marquee = () => {
  return (
    <div className=" w-full">
      <Marqueee
        gradient={true}
        gradientWidth={100}
        pauseOnHover={true}
        className="marq"
        speed={40}
      >
        {comments.map((comment: any, index: any) => (
          <div id={index}>
            <TwitterCard
              name={comment.name}
              comment={comment.comment}
              handle={comment.twitterHandle}
              linkedin={comment.linkedin}
            />
          </div>
        ))}
      </Marqueee>
    </div>
  );
};

export default Marquee;
