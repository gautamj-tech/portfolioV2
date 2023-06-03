import React from "react";
import { AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="py-5 px-5 bg-secondary ">
      <div className="footer_contents flex justify-between">
        <h3 className="font-md text-textPrimary">
          &copy; {new Date().getFullYear()} Bawantha Thilan
        </h3>

        <div className="social-links  gap-5 hidden sm:hidden md:flex">
          <AiOutlineTwitter className="text-textPrimary text-2xl" />
          <AiOutlineGithub className="text-textPrimary text-2xl" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
