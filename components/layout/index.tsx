import React from "react";
import Navbar from "../navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
