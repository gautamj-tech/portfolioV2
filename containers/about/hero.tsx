import React from "react";

const AboutHero = () => {
  return (
    <div>
      <div className="title bg-secondary p-5 rounded-xl relative">
        <h1 className=" text-[10vh] font-bold text-primary">
          I'm a{" "}
          <span className="titleFont font-medium">
            Software Engineer working remotely from Sri Lanka.
          </span>
        </h1>

        <p className="text-lg text-left text-textPrimary">
          I enjoy building dynamic, creative products from start to finish.
          Focused on developing intuitive experiences that constantly grow and
          improve based on user metrics. Always shipping.
        </p>

        <div className=" bg-green-500 h-5 w-5 rounded-md absolute right-2 bottom-2" />
      </div>
    </div>
  );
};

export default AboutHero;
