import React from "react";
import { AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="py-5 px-5 bg-secondary  dark:bg-darkBg">
      <div className="footer_contents flex justify-between">
        <h3 className="font-md text-textPrimary font-medium">
          &copy; {new Date().getFullYear()} Bawantha Thilan
        </h3>

        <div className="social-links  gap-5 hidden sm:hidden md:flex">
          <Link href="https://twitter.com/ThilanBawantha" target="_blank">
            <AiOutlineTwitter className="text-textPrimary text-2xl" />
          </Link>
          <Link href="https://github.com/Bawanthathilan" target="_blank">
            <AiOutlineGithub className="text-textPrimary text-2xl" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
