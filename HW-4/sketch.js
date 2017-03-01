function setup() {
  createCanvas(600,600);
}

var r = 0;
var b = 255;



function draw() {


  r = map(mouseX, 0, 600, 0, 255);
  b = map(mouseX, 0, 600, 255, 0);
  background(0);
  fill(r, 0, b);
  stroke(255);
  ellipse(mouseX, 200, 64, 64);

}
?
