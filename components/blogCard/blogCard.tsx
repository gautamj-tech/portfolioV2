import React from "react";
import Image from "next/image";

interface Props {
  post: any;
}

const BlogCard = ({ post }: Props) => {
  return (
    <div className="bg-secondary p-5 md:p-10 rounded-3xl">
      <div className="blog_content grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-5">
        <div className="blog_image relative col-span-5 sm:col-span-5 md:col-span-2 lg:col-span-2 h-[400px] sm:h-[400px] md:h-auto lg:h-auto">
          <Image
            src={post.coverImage}
            alt="blog"
            fill
            className=" object-cover rounded-3xl"
          />
        </div>
        <div className="blog_info flex flex-col gap-5 col-span-3">
          <h1 className="text-4xl text-primary font-bold">{post.title}</h1>
          <p className="text-textSecondary mt-5">{post.brief}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
