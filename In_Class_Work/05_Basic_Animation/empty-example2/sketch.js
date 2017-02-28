function setup() {
  createCanvas(600, 700);

}

function draw() {

  var bgVal;
  bgVal = map(mouseX, 0, 600, 0, 255);
  bgRed = map(mouseX, 0, 600, 0, 255);
  bgGreen = map(mouseY, 0, 600, 0, 255);
  bgBlue = map(mouseX, mouseY, 0, 600, 0, 255);

// mapping mouseX to a usable range
// bgVal = mouseX
// bgVal = mouseX * 0.425
  background(bgRed, bgGreen, bgBlue);
  text(mouseX, 50, 50);
  text(mouseY, 50, 65);
  text(bgRed, 50, 80);
  text(bgGreen, 50, 95);
  text(bgBlue, 50, 110);
}
