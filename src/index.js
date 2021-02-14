const canvasElement = document.getElementById("canvas");
const context = canvas.getContext("2d");

window.addEventListener("load", () => {
  initCanvas();
  doIndexStuff();
});

// Automatically adjust the canvas when the window is resized
window.addEventListener("resize", () => {
  console.log("resized");
  initCanvas();
});

function initCanvas() {
  canvasElement.width = window.innerWidth;
  canvasElement.height = window.innerHeight;
  context.save(); // Save the initial state of the canvas
  context.fillStyle = "lightblue";
  context.fillRect(0, 0, canvasElement.width, canvasElement.height);
  context.restore(); // Remove the lightblue fill
  // The combo of save-restore is used throughout the app to ensure no accidental styling overlap (old elements applying styling to new ones)
}

function doIndexStuff() {
  console.log("%cHello There", "color: violet");

  context.save();
  messWithCanvas();
  context.restore();

  console.log("%cI'm finished, cya", "color: violet");
}

function messWithCanvas() {
  context.save();
  // Paint the purple rectangle
  context.fillStyle = "purple";
  console.log((canvasElement.width / 8) * 7);
  context.shadowColor = "black";
  context.shadowBlur = 10;
  context.shadowOffsetX = -2;
  context.shadowOffsetY = 2;
  context.fillRect(
    canvasElement.width / 8,
    canvasElement.height / 8,
    (canvasElement.width / 8) * 6,
    (canvasElement.height / 8) * 6
  );
  context.restore();

  // Paint the yellow rectangle
  context.fillStyle = "yellow";
  context.shadowColor = "black";
  context.shadowBlur = 6;
  context.shadowOffsetX = -1;
  context.shadowOffsetY = 1;
  context.fillRect(
    canvasElement.width / 4,
    canvasElement.height / 4,
    canvasElement.width / 2,
    canvasElement.height / 2
  );
  context.restore();

  document.addEventListener("click", doClickyStuff);
}

function doClickyStuff() {
  console.log("yeet");
}
