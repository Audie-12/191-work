function setup() {
 createCanvas(600, 700);

}

var posX = 100;
var posY = 100;

function draw() {

  background(0);

  var bgVal;
  bgVal = map(mouseX, 0, 600, 0, 255);
  bgRed = map(mouseX, 0, 600, 0, 255);
  bgGreen = map(mouseY, 0, 600, 0, 255);
  bgBlue = map(mouseX, mouseY, 0, 600, 0, 255);

  stroke(255);
  fill(bgRed, bgGreen, bgBlue);
  ellipse(mouseX, mouseY, 64, 64);



  fill(random(0, 266), random(0, 266), random(0, 266));
  ellipse(posX, posY, 30, 50);
  posX = posX + 1;
  posY = posY + 1;
  var currFrameRate;
  currFrameRate = frameRate();

}
