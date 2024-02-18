import React from "react";
import "./About.scss";

import bxEnvelope from "@iconify-icons/bx/bx-envelope";
import bxlLinkedin from "@iconify-icons/bx/bxl-linkedin";
import githubFilled from "@iconify/icons-ant-design/github-filled";
import { InlineIcon } from "@iconify/react";

const About = (): JSX.Element => (
  <div className="About">
    <div className="identifiers">
      <h1 className="name">Thivagar Nadarajan</h1>
      <h2 className="title">Software Developer</h2>
    </div>
    <p className="description">
      Hi there! I&apos;m a full time software developer at Environment &amp;
      Climate Change Canada. Building mission critical weather applications used
      all across Canada.
    </p>
    <div className="socials">
      <a
        href="https://www.linkedin.com/in/thivagar-nadarajan"
        className="social"
        target="_blank"
        rel="noreferrer"
      >
        <InlineIcon icon={bxlLinkedin} />
      </a>
      <a
        href="https://github.com/ThivagarNadarajan"
        className="social"
        target="_blank"
        rel="noreferrer"
      >
        <InlineIcon icon={githubFilled} />
      </a>
      <a className="social" href="mailto:thiv.nadarajan@gmail.com">
        <InlineIcon icon={bxEnvelope} />
      </a>
    </div>
  </div>
);

export default About;
