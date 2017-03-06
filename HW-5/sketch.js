// Variables
var col = {
  r: 100,
  b: 100,
  g: 100
};

var spot = {
  x: 100,
  y: 50
};

var ellipSize = {
  x: 2,
  y: 5
};

function setup() {
  createCanvas(700,800);

  background(125, 50, 250);
}




function draw() {

  col.r = random(10, 255);
  col.b = random(25, 200);
  col.g = random(10, 100);

  spot.x = random(0, width);
  spot.y = random(0, height);

  noStroke();
  fill(col.r, col.g, col.b);
  ellipse(spot.x, spot.y, ellipSize.x, ellipSize.y);


  if(mouseIsPressed) {
  background(200, 150, 250);
  col.r = random(0, 255);
  col.b = random(0, 255);
  col.g = random(0, 255);

  spot.x = random(0, width);
  spot.y = random(0, height);
  ellipSize.x = random(0, 150);
  ellipSize.y = random(0, 150);

  noStroke();
  fill(col.r, col.g, col.b);
  ellipse(spot.x, spot.y, ellipSize.x, ellipSize.y);

  }


}
