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
  context.save(); // Save the initial state of the canvas
  context.fillStyle = "#" + getHexFromSliders();
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.restore(); // Remove the lightblue fill styling
  // The combo of save-restore is used throughout the app to ensure no accidental styling overlap (old elements applying styling to new ones)
  return true;
}

function messWithCanvas() {
  const framesPerSecond = 60;
  let counter = 0;
  let timeInterval = setInterval(() => {
    //console.log('Current time: ' + (new Date().getTime() - startTime));
    //t = (new Date().getTime() - startTime) % 1000; // elapsed time in seconds
    t = counter / 100; // can be used to control the speed of the animation
    s = 480;
    c = canvas;
    x = context;
    //S = Math.sin();
    //C = Math.cos();
    //T = Math.tan();
    /*R = (red, green, blue) =>  {
        return `rgba(${red}, ${green}, ${blue})`;
    } ;*/
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

  /*
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
  context.fillStyle = "yellow";
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
  */
}
