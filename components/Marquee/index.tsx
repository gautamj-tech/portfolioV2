import React from 'react';
import Marqueee from 'react-fast-marquee';
import { comments } from '@/data';
import TwitterCard from '../twitterCard';
import { useTheme } from 'next-themes';

const Marquee = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <div className=" w-full relative">
      <div className="absolute left-0 w-10 h-[100%] bg-gradient-to-r  dark:from-[#121212] z-10" />
      <div className="absolute right-0 w-10 h-[100%] bg-gradient-to-l  dark:from-[#121212] z-10" />
      <Marqueee
        gradient={currentTheme === 'dark' ? false : true}
        gradientWidth={100}
        pauseOnHover={true}
        className="marq"
        speed={40}
      >
        {comments.map((comment: any, index: any) => (
          <div id={index} key={index} className="last-of-type:mr-5">
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
