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
        <title>Bawantha Thilan - Software Engineer</title>
        <meta name="title" content="Bawantha Thilan - Software Engineer"></meta>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
