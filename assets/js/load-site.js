import Typed from "./typed.js";

var options = {
  strings: [
    '<span style="margin-right: 10px;">> Miguel </span><span style="color: var(--title-secondary-color);">VF</span>',
  ],
  typeSpeed: 75,
  backSpeed: 50,
  smartBackspace: true,
  showCursor: true,
  cursorChar: "_",
  attr: null,
};

window.addEventListener("load", function () {
  var typed = new Typed(".typewriter", options);
  console.log("Site loaded");
});
