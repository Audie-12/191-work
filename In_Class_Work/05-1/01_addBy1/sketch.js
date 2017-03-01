function setup() {
  createCanvas(600, 600);
  background(150, 50, 78);



}

// variables to define ellipse position
var posX = 100;
var posY = 100;

function draw() {

  background(200);
// get the current frame rate of the sketch.
  var currFrameRate;
  currFrameRate = frameRate();
// display the current frame rate in the sketch
  text(currFrameRate, 100, 100);

  ellipse(posX, posY, 30, 50);
  // update posX every frame
  posX = posX + 1;
  posY = posY + 1;
}
