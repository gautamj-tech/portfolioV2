import React from "react";
import Image from "next/image";
import Link from "next/link";

import { BsArrowUpRightCircle } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: any;
  link?: string;
  github?: string;
  category?: string;
  tech?: string[];
}

const ProjectCard = ({
  title,
  description,
  image,
  link,
  github,
  category,
  tech,
}: ProjectCardProps) => {
  return (
    <div className=" group bg-secondary rounded-2xl h-[500px]  max-h-[500px] p-5 flex flex-col gap-5">
      <div className="header flex flex-row justify-between gap-5">
        <div className="title flex flex-col gap-3">
          <h1 className="text-3xl font-bold text-primary">{title}</h1>
          <p className="text-textPrimary font-medium text-lg">{description} </p>

          <div className="line w-full h-[1px] bg-textPrimary opacity-10"></div>
        </div>
        <div className="icons flex gap-5">
          {link && (
            <Link href={`${link}`}>
              <BsArrowUpRightCircle className="text-5xl text-textPrimary group-hover:text-primary" />
            </Link>
          )}

          {github && (
            <Link href={`${github}`}>
              <FaGithub className="text-5xl text-textPrimary group-hover:text-primary" />
            </Link>
          )}
        </div>
      </div>

      <div className="image relative h-[400px]">
        <Image
          src={image}
          alt={`${title}`}
          fill
          className="object-cover rounded-2xl saturate-0 group-hover:saturate-100 transition-all duration-500 ease-in-out "
        />
      </div>
    </div>
  );
};

export default ProjectCard;