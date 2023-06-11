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
// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav className="px-5 w-full py-2 mt-5 flex flex-row justify-between items-center sticky top-5 z-50 bg-white-100 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 rounded-3xl ">
      <Link href="/">
        <div className="logo">
          {currentTheme === "dark" ? (
            <Image src={LogoLight} alt="logo" className="w-5 md:w-6" />
          ) : (
            <Image src={Logo} alt="logo" className="w-5 md:w-6" />
          )}
        </div>
      </Link>
      <div className="nav-links bg-white py-3 px-10 rounded-full  border border-gray-100 hidden sm:hidden md:block dark:bg-darkBg dark:border-gray-800">
        <ul className="flex gap-5 text-textPrimary text-md cursor-pointer px-5 ">
          <Link href="/">
            <li>Home</li>
          </Link>

          <Link href="#work">
            <li> Work </li>
          </Link>

          <Link href="/about">
            <li> About </li>
          </Link>
          <Link href="/guestbook">
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
        <Link href="https://facebook.com/bawanthathilan/" target="_blank">
          <FaFacebookF className="text-textPrimary text-md" />
        </Link>

        <Link href="https://twitter.com/ThilanBawantha" target="_blank">
          <FaTwitter className="text-textPrimary text-md" />
        </Link>

        <Link href="https://www.instagram.com/bawwa_/" target="_blank">
          <FaInstagram className="text-textPrimary text-md" />
        </Link>

        <Link href="https://github.com/Bawanthathilan" target="_blank">
          <FaGithub className="text-textPrimary text-md" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/bawanthathilan/"
          target="_blank"
        >
          <FaLinkedinIn className="text-textPrimary text-md" />
        </Link>
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
          <GiHamburgerMenu
            className="text-textPrimary text-2xl cursor-pointer"
            onClick={toggleDrawer}
          />

          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="right"
            style={
              currentTheme === "dark"
                ? { backgroundColor: "black" }
                : { backgroundColor: "white" }
            }
            className="drawer"
          >
            <ul className="flex flex-col gap-5 text-textPrimary text-lg cursor-pointer px-5 mt-10 ">
              <Link href="/">
                <div className="logo">
                  {currentTheme === "dark" ? (
                    <Image src={LogoLight} alt="logo" className="w-5 md:w-6" />
                  ) : (
                    <Image src={Logo} alt="logo" className="w-5 md:w-6" />
                  )}
                </div>
              </Link>
              <Link href="/">
                <li>Home</li>
              </Link>

              <Link href="#work">
                <li> Work </li>
              </Link>

              <Link href="/about">
                <li> About </li>
              </Link>
              <Link href="/guestbook">
                <li> Guestbook </li>
              </Link>
              <Link href="https://blog.bawantha.me">
                <li>Blog</li>
              </Link>
              <Link href="#contact">
                <li>Contact</li>
              </Link>
            </ul>
          </Drawer>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
