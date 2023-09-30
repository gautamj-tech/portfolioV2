import React from "react";
import Image from "next/image";

interface Props {
  post: any;
}

const BlogCard = ({ post }: Props) => {
  return (
    <div className="bg-secondary border border-grey-200 dark:border-[#27272a] p-5 md:p-10 rounded-3xl dark:bg-darkBg relative">
      <span className="absolute w-[40%] bottom-0 right-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
      <span className="absolute w-px left-0 h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
      <div className="blog_content grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-5">
        <div className="blog_image relative col-span-5 sm:col-span-5 md:col-span-5 lg:col-span-2 h-[400px] sm:h-[400px] md:h-[400px] lg:h-auto">
          <Image
            src={post.coverImage}
            alt="blog"
            fill
            className=" object-cover rounded-3xl"
          />
        </div>
        <div className="blog_info flex flex-col gap-5 col-span-3">
          <h1 className="text-4xl text-primary font-bold dark:text-white">
            {post.title}
          </h1>
          <p className="text-textSecondary mt-5">{post.brief}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
