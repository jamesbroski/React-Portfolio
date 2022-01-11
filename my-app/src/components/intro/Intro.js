import React from "react";
import "./Intro.css";
import Me from "../../img/me.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">James Broski</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Frontend & Backend</div>
              <div className="i-title-item">React.js</div>
              <div className="i-title-item">JavaScript</div>
              <div className="i-title-item">MERN Stack , & more!</div>
            </div>
          </div>
          <p className="i-desc">
            I am a Certified Full Stack Web Developer. I love creating unique,
            stylish, and responsive websites. Feel free to take a look at my
            portfolio below, thanks!
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
