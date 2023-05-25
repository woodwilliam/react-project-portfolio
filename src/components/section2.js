import React from "react";
// Here we are importing a CSS file as a dependency
import '../styles/Style.css';
import Project1 from '../images/project1.png';
import Project2 from '../images/project2.png';
import Project3 from '../images/project3.jpg';
import Project4 from '../images/project4.png';

function MyWork() {
  return (
    <div class="sec2" id="sec2">
      <h2>My Applications!</h2>
      <h3>App 1: Willy Wonka's Whimsical CryptoCurrancy Converter</h3>
      <div class="first-application">
        <a href="https://sbarsuhn.github.io/Willy-Wonkas-Whimsical-Cryptocurrency-Converter/">
          <img
            src={Project1}
            title="click me!"
            alt="app art 1"
          />
        </a>
      </div>
      <h3>App 2: Industry Plant Seedling</h3>
      <div class="pleebs">
        <a href="https://github.com/ChapstickLover97/IndustryPlant_Seedling">
          <img
            src={Project2}
            title="Application"
            alt="app art 2"
          />
        </a>
      </div>
      <h3>App 3: Java RX</h3>
      <div class="pleebs">
        <a href="https://github.com/jonahkane/Java-Rx">
          <img
            src={Project3}
            title="click me!"
            alt="app art 3"
          />
        </a>
      </div>
      <h3>App 4: Horizon Homepage</h3>
      <div class="pleebs">
        <a href="https://woodwilliam.github.io/Week1Challenge/">
          <img
            src={Project4}
            title="Application"
            alt="app art 4"
          />
        </a>
      </div>
    </div>
  );
}

export default MyWork;
