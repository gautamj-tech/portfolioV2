import React from 'react';
import Title from '@/components/Title';
import BlogPosts from '@/components/blogCard/blogPost';

const Blog = () => {
  return (
    <section className="mt-20">
      <Title title="Latest Blog Post" />

      <div className="blogCard mt-10 md:mt-20 mb-20">
        <BlogPosts />
      </div>
    </section>
  );
};

export default Blog;
