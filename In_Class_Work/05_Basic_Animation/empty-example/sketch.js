function setup() {
  createCanvas(600, 700);

}

function draw() {
// lets refresh the bakcground everey 5 seconds
// by moving background to the "draw()" function we overwrite the previous ellipse position.
  background(200, 40, 6);

  ellipse(width/2, height/2, ellipseSize, ellipseSize);
  // adjust the size of the ellipse
  ellipseSize = ellipseSize + 0.8;
}
