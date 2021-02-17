// handles logic for manipulating the flat earth image
const flatEarth = {
  draw: (context, x, y, rotationPerSecond, fps) => {
    //console.log("Earth is flat and nasa is lying");
    const image = new Image();
    startPosX = x;
    startPosY = y;
    // calculate rotation per frame
    rotation = Math.PI/(180/rotationPerSecond*fps);
    image.src = "/assets/earth.png";
    image.onload = function() {
        earthCenterX = x + image.width/2;
        earthCenterY = y + image.height/2;
        // Move to the center of earth (the image)
        context.translate(earthCenterX, earthCenterY);
        context.rotate(rotation);
        // reset the context position
        context.translate(-earthCenterX, -earthCenterY);
        context.drawImage(image, startPosX, startPosY);
      };
  },
};
