import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import LogoLight from "@/assets/images/logo-light.png";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { CiDark } from "react-icons/ci";
import { MdLightMode } from "react-icons/md";

import { useTheme } from "next-themes";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <nav className="px-5 w-full py-5 mt-5 flex flex-row justify-between items-center sticky top-5 z-50 bg-white-100 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 rounded-3xl ">
      <Link href="/">
        <div className="logo">
          {currentTheme === "dark" ? (
            <Image src={LogoLight} alt="logo" className="w-5 md:w-10" />
          ) : (
            <Image src={Logo} alt="logo" className="w-5 md:w-10" />
          )}
        </div>
      </Link>
      <div className="nav-links bg-white py-5 px-10 rounded-full  border border-gray-100 hidden sm:hidden md:block">
        <ul className="flex gap-5 text-textPrimary text-lg cursor-pointer px-5 ">
          <Link href="/">
            <li>Home</li>
          </Link>

          <Link href="#work">
            <li> Work </li>
          </Link>

          <Link href="/">
            <li> About </li>
          </Link>
          <Link href="/">
            <li> Guestbook </li>
          </Link>
          <Link href="https://blog.bawantha.me">
            <li>Blog</li>
          </Link>
          <Link href="#contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>

      <div className=" block md:hidden">
        <h3 className="font-bold text-primary dark:text-white">
          Bawantha Thilan .
        </h3>
      </div>

      <div className="social-links  gap-5 hidden sm:hidden md:flex">
        <FaFacebookF className="text-textPrimary text-2xl" />
        <FaTwitter className="text-textPrimary text-2xl" />
        <FaInstagram className="text-textPrimary text-2xl" />
        <FaGithub className="text-textPrimary text-2xl" />
        <FaLinkedinIn className="text-textPrimary text-2xl" />
      </div>

      <div className="theme-switcher flex gap-5">
        {currentTheme === "dark" ? (
          <MdLightMode
            className="text-textPrimary text-2xl cursor-pointer"
            onClick={() => setTheme("light")}
          />
        ) : (
          <CiDark
            className="text-textPrimary text-2xl cursor-pointer"
            onClick={() => setTheme("dark")}
          />
        )}

        <div className="hamburger block md:hidden">
          <GiHamburgerMenu className="text-textPrimary text-2xl cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
