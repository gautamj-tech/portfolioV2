import React from "react";
import AboutHero from "@/containers/about/hero";
import Slider from "@/containers/about/slider";
import Certifications from "@/containers/about/certifications";
import Experience from "@/containers/about/experience";

const About = () => {
  return (
    <div className="mt-10">
      <AboutHero />
      <Experience />
      <Certifications />
      <Slider />
    </div>
  );
};

export default About;
