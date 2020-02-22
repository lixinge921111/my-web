import React from "react";
import "../styles/about.css";
import SocialIcons from "./SocialLink";
import { Experience } from "./Experience";

const About = () => {
  return (
    <div className="about">
      <h3 className="title" style={{ color: "black" }}>
        Hello World, I'm Xinge Li
      </h3>
      <SocialIcons />
      <div className="paragraph">
        <span>
          I'm a Software Developer at{" "}
          <a
            style={{ textDecoration: "none", color: "darkorange" }}
            href="https://www.yepstr.com/"
          >
            Yepstr
          </a>{" "}
          and I am also a master student at Stockholm University studying{" "}
          <a
            style={{ textDecoration: "none", color: "darkblue" }}
            href="https://www.su.se/english/search-courses-and-programmes/sbdso-1.413329"
          >
            Data Science and Decision Analysis
          </a>{" "}
          (this will be my second master degree).
        </span>

        <Experience />
      </div>
    </div>
  );
};

export default About;
