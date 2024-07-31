import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Himanshu Shishodia</span>, frontend Web Developer.
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet veritatis
        debitis sit amet, consectetur adipisicing elit. Amet veritatis debitis
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a
            href="https://drive.google.com/file/d/13t3yoHDDkrXm0CST7bHwiiBzsHmCWMS2/view"
            download
          >
            My resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
