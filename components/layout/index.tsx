import React from 'react';
import Navbar from '../navbar';
import Footer from '../footer';
import Head from 'next/head';
import { useTheme } from 'next-themes';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
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
      {currentTheme === 'dark' ? (
        <div className="h-full w-full bg-white">
          <div className="absolute z-[-1] bottom-0 left-0 right-0 top-0 bg-[radial-gradient(#4f4f4f2e_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>
      ) : (
        <div className="h-full w-full bg-white">
          <div className="absolute z-[-1] bottom-0 left-0 right-0 top-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>
      )}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
