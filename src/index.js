//const canvas = document.getElementById("canvas");
//const context = canvas.getContext("2d");
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

window.addEventListener("load", () => {
  if (!initCanvas()) {
    console.error(
      "Canvas has not been initialized properly. Stopping the application..."
    );
    return;
  }
  doIndexStuff();
});

// Automatically adjust the canvas when the window is resized
window.addEventListener("resize", () => {
  console.log("resized");
  initCanvas();
});

function initCanvas() {
  // Validate that the client browser supports WebGL for 3D rendering
  if (!isWebGLSupported()) {
    alert(
      "Your browser does not support required features (WebGL). Please switch to a modern browser or enable webGL" +
        " (https://support.biodigital.com/hc/en-us/articles/218322977-How-to-turn-on-WebGL-in-my-browser)"
    );
    console.error(
      "Your browser does not support required features (WebGL). Please switch to a modern browser or enable WebGL" +
        " (https://support.biodigital.com/hc/en-us/articles/218322977-How-to-turn-on-WebGL-in-my-browser)"
    );
    console.error("no, Internet Explorer is not a modern browser");
    return false;
  }

  // Set the initial Canvas values
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  context.save(); // Save the initial state of the canvas
  context.fillStyle = "lightblue";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.restore(); // Remove the lightblue fill styling
  // The combo of save-restore is used throughout the app to ensure no accidental styling overlap (old elements applying styling to new ones)
  return true;
}

function doIndexStuff() {
  console.log("%cHello There", "color: violet");

  context.save();
  messWithCanvas();
  drawFlatEarth();
  context.restore();



  console.log("%cI'm finished, cya", "color: violet");
}

function messWithCanvas() {
  context.save();
  // Paint the purple rectangle
  context.fillStyle = "purple";
  console.log((canvas.width / 8) * 7);
  context.shadowColor = "black";
  context.shadowBlur = 10;
  context.shadowOffsetX = -2;
  context.shadowOffsetY = 2;
  context.fillRect(
    canvas.width / 8,
    canvas.height / 8,
    (canvas.width / 8) * 6,
    (canvas.height / 8) * 6
  );
  context.restore();

  // Paint the yellow rectangle
  
  const min = 0;
  const max = 16777215;
  let colorInHex = random(min, max).toString(16);
  console.log(`#${colorInHex}`);
  context.fillStyle = `#${colorInHex}`;
  context.shadowColor = "black";
  context.shadowBlur = 6;
  context.shadowOffsetX = -1;
  context.shadowOffsetY = 1;
  context.fillRect(
    canvas.width / 4,
    canvas.height / 4,
    canvas.width / 2,
    canvas.height / 2
  );
  context.restore();

  document.addEventListener("click", doClickyStuff);
}

function doClickyStuff() {
  console.log("yeet");
}

function isWebGLSupported() {
  var canvas = document.createElement("canvas");
  var gl =
    canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

  return gl && gl instanceof WebGLRenderingContext;
}

// draw a rotating image of earth. It rotates indefnitely at a set framerate
function drawFlatEarth() {
  context.save();
  const framesPerSecond = 60;
  rotationPerSecond = 90;
  let earthInterval = setInterval(() => {
    flatEarth.draw(context, 10, 10, rotationPerSecond, framesPerSecond);
  }, 1000 / framesPerSecond);
  context.restore();
}

function random(min, max)
{
  return Math.floor((Math.random() * max) + min); 
}

function toHex(decimal)
{
  return decimal.toString(16); 
}