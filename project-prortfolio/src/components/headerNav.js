import React from "react";
// Here we are importing a CSS file as a dependency
import '../styles/Style.css';

function HeaderNav() {
  return (
    <header>
      <h3 class="navbar">
        <a href="#sec1">About Me</a>
      </h3>
      <h3 class="navbar">
        <a href="#sec2">Apps</a>
      </h3>
      <h3 class="navbar">
        <a href="#sec3">Contact Me</a>
      </h3>
    </header>
  );
}

export default HeaderNav;
