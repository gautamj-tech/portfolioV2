import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import LogoLight from "@/assets/images/logo-light.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import { CiDark } from "react-icons/ci";
import { MdLightMode } from "react-icons/md";

import { useTheme } from "next-themes";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <nav className="px-5 py-5 mt-5 flex flex-row justify-between items-center sticky top-5 z-50 bg-white-100 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 rounded-3xl">
      <div className="logo">
        {currentTheme === "dark" ? (
          <Image src={LogoLight} alt="logo" />
        ) : (
          <Image src={Logo} alt="logo" />
        )}
      </div>
      <div className="nav-links bg-white py-5 px-10 rounded-full  border border-gray-100">
        <ul className="flex gap-5 text-textPrimary text-lg cursor-pointer px-5 ">
          <li>Home</li>
          <li> Work </li>
          <li> About </li>
          <li> Guestbook </li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="social-links flex gap-5">
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
      </div>
    </nav>
  );
};

export default Navbar;
