import React from "react";
import "./Intro.css";

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
              <div className="i-title-item">MERN Stack Focused</div>
              <div className="i-title-item">Lifelong Learner</div>
              <div className="i-title-item">Coffee Connoisseur</div>
            </div>
          </div>
          <div className="i-desc">
            I am a Certified Full Stack Web Developer. I love creating unique,
            stylish, and responsive websites. Feel free to take a look at my
            portfolio below, thanks!
          </div>
        </div>
      </div>
      <div className="i-right">right</div>
    </div>
  );
};

export default Intro;
