import React from "react";
import AboutHero from "@/containers/about/hero";
import Slider from "@/containers/about/slider";
import Certifications from "@/containers/about/certifications";
import Experience from "@/containers/about/experience";
import Acheivement from "@/containers/about/acheivement";

const About = () => {
  return (
    <div className="mt-10">
      <AboutHero />
      <Acheivement />
      <Certifications />
      <Slider />
    </div>
  );
};

export default About;
