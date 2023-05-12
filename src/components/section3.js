import React from "react";
// Here we are importing a CSS file as a dependency
import '../styles/Style.css';

function ContactMe() {
  return (
    <div class="sec3" id="sec3">
        <h2>Contact Me!</h2>
        <ul>
            <li>Email: noemail4you@fishhook.net</li>
            <li><a href="https://github.com/woodwilliam">GitHub</a></li>
            <li><a href="#sec1">Back to the top!</a></li>
        </ul>
    </div>
  );
}

export default ContactMe;
