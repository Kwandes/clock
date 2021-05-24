main();


function main() {
  // initialize sliders for changing of colors etc
  initSliders();

  // funky time, which is located in funkyTime.js
  document.getElementById("testButton").addEventListener('click', funkyTime);
}

function initSliders() {
  const sliderRed = document.getElementById("sliderRed");
  const sliderGreen = document.getElementById("sliderGreen");
  const sliderBlue = document.getElementById("sliderBlue");
  const sliderRedValue = document.getElementById("sliderRedValue");
  const sliderGreenValue = document.getElementById("sliderGreenValue");
  const sliderBlueValue = document.getElementById("sliderBlueValue");
  sliderRed.value = Math.floor(Math.random() * sliderRed.max);
  sliderGreen.value = Math.floor(Math.random() * sliderGreen.max);
  sliderBlue.value = Math.floor(Math.random() * sliderBlue.max);

  sliderRedValue.innerHTML = sliderRed.value;
  sliderGreenValue.innerHTML = sliderGreen.value;
  sliderBlueValue.innerHTML = sliderBlue.value;

  sliderRed.oninput = function () {
    sliderRedValue.innerHTML = this.value;
    changeHex();
  };
  sliderGreen.oninput = function () {
    sliderGreenValue.innerHTML = this.value;
    changeHex();
  };
  sliderBlue.oninput = function () {
    sliderBlueValue.innerHTML = this.value;
    changeHex();
  };

  // initial setup of the background color
  changeHex();
}

function changeHex() {
  let hex = getHexFromSliders();
  document.getElementById("hex-value").textContent = "#" + hex;
  document.body.style.backgroundColor = "#" + hex;
  // change the text color to the opposite of background color from sliders
  document.body.style.color = "#" + (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase();
}

function getHexFromSliders() {
  const sliderRed = document.getElementById("sliderRed");
  const sliderGreen = document.getElementById("sliderGreen");
  const sliderBlue = document.getElementById("sliderBlue");
  // (+variableName) forces the variable to be interpreted as an integer
  let r = (+sliderRed.value).toString(16);
  let g = (+sliderGreen.value).toString(16);
  let b = (+sliderBlue.value).toString(16);

  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;

  return r + g + b;
}
