// write down when the program execution has begun
const startTime = new Date().getTime();

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

function funkyTime() {
  console.log("Let's get funky");
  console.log("Start time: " + startTime);

  initCanvas();
  messWithCanvas();
}

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

  function isWebGLSupported() {
    var canvas = document.createElement("canvas");
    var gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

    return gl && gl instanceof WebGLRenderingContext;
  }

  // Set the initial Canvas values
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - 200;
  context.fillStyle = "#" + getHexFromSliders();
  context.fillRect(0, 0, canvas.width, canvas.height);
  return true;
}

function messWithCanvas() {
  const framesPerSecond = 60;
  let counter = 0;
  let timeInterval = setInterval(() => {
    t = counter / 100; // can be used to control the speed of the animation
    s = 480;
    c = canvas;
    x = context;
    for (
      c.width |= i = a = 540;
      i--;
      x.fillRect(
        window.innerWidth / 2 + a * Math.sin((v = i >> 2)) * Z,
        a + a * Math.cos(v) * Z,
        (b = Z * 50),
        b
      )
    )
      (Z = 99 / (((i - t * 99) % a) + a)),
        (x.fillStyle = `hsl(${i},99%,${a / Z / 20 - (i % 4) * 9}%`);
    counter++;
  }, 1000 / framesPerSecond);
}