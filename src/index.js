main();


function main() {
  // initialize sliders for changing of colors etc
  initSliders();

  // funky time, which is located in funkyTime.js
  document.getElementById("testButton").addEventListener('click', funkyTime);
}
