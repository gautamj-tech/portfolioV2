import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import Head from "next/head";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <title>Bawantha Thilan — Software Engineer</title>
        <meta name="title" content="Bawantha Thilan — Software Engineer" />
        <meta
          name="description"
          content="Software Engineer , Tech Blogger and Traveller, opensource enthusiast, practicing minimalist, and Pop Music in search of flow. Working with my hands to make magic happen on the internet."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="bawantha.me" />
        <meta
          property="og:title"
          content="Bawantha Thilan — Software Engineer"
        />
        <meta
          property="og:description"
          content="Software Engineer , Tech Blogger and Traveller, opensource enthusiast, practicing minimalist, and Pop Music in search of flow. Working with my hands to make magic happen on the internet."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/sliit123/image/upload/v1689186241/og_ewdw57.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="bawantha.me" />
        <meta
          property="twitter:title"
          content="Bawantha Thilan — Software Engineer"
        />
        <meta
          property="twitter:description"
          content="Software Engineer , Tech Blogger and Traveller, opensource enthusiast, practicing minimalist, and Pop Music in search of flow. Working with my hands to make magic happen on the internet."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/sliit123/image/upload/v1689186241/og_ewdw57.png"
        />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
