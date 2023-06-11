import React from "react";
import Title from "@/components/Title";
import { Carousel } from "@material-tailwind/react";

const Slider = () => {
  return (
    <div className="bg-secondary p-5 rounded-xl mt-20 mb-10 dark:bg-darkBg">
      <Title title="Memories" />

      <Carousel className="rounded-xl h-[300px] mt-10" autoplay>
        <img
          src="https://res.cloudinary.com/sliit123/image/upload/v1657634440/272258120_3178253882410849_7730553419125038279_n_m0zaqs.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="https://res.cloudinary.com/sliit123/image/upload/v1657634530/274008021_4972833612755971_1080696660064803007_n_r21r7c.jpg"
          alt="image 2"
          className="h-full w-full object-contain"
        />
        <img
          src="https://res.cloudinary.com/sliit123/image/upload/v1657634536/78390585_2506948399550696_6980378636998148096_n_vdocpq.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </div>
  );
};

export default Slider;
