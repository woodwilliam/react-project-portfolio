import React from "react";
// Here we are importing a CSS file as a dependency
import '../styles/Style.css';
import WillPic from '../images/Willpic.jpg'

function AboutMe() {
  return (
    <div>
      <div class="filler"></div>
      <div class="sec1" id="sec1">
        <div class="about-me" id="about-me">
          <h2 class="about-me-item">About Me</h2>
          <img
            class="about-me-item"
            src={WillPic}
            alt="main pic"
          />
          <p class="about-me-item">
            Hello! My name is William. These are my projects! Email me when
            youre ready for greatness.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
