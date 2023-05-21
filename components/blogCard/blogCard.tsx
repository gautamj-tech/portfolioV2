import React from "react";
import Image from "next/image";

interface Props {
  post: any;
}

const BlogCard = ({ post }: Props) => {
  return (
    <div className="bg-secondary p-10 rounded-3xl">
      <div className="blog_content grid grid-cols-5 gap-5">
        <div className="blog_image relative col-span-2">
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
