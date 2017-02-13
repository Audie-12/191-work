function setup() {
  createCanvas(500, 500);
  background(170, 183, 184);
  // Head
  fill(250, 215, 160);
  ellipse(200, 100, 100, 120);

  // Eyes
  push();
  fill(0);
  ellipse(225, 100, 10, 10);
  ellipse(175, 100, 10, 10);
  pop();

  // Pupils
  push();
  fill(255);
  ellipse(226, 99, 5, 5);
  ellipse(176, 99, 5, 5);
  pop();

  // Mouth
  push();
  fill(0);
  rect(190, 135, 20, 5);
  pop();

  // nose
  push();
  triangle(205, 110, 200, 120, 185, 110);
  pop();

  // Left leg
  fill(0);
  push();
  rect(180, 330, 8, 80);
  pop();

  // right leg
  push();
  rect(210, 330, 8, 80);
  pop();

  // left foot
  push();
  ellipse(173, 410, 30, 15);
  pop();

  // right foot
  push();
  ellipse(226, 410, 30, 15);
  pop();

  // left arm
  fill(0);
  push();
  rect(125, 205, 35, 10);
  pop();

  // left arm extended
  push();
  rect(125, 205, 10, 55);
  pop();

  // right arm
  push();
  rect(237, 205, 35, 10);
  pop();

  // right arm extended
  push();
  rect(265, 160, 10, 55);
  pop();

  // left hand
  push();
  ellipse(130, 260, 25, 20);
  pop();

  // right hand
  push();
  ellipse(270, 163, 25, 20);
  pop();

  // body
  fill(250, 215, 160);
  push();
  ellipse(200, 250, 88, 180);
  pop();

  // scarf
  fill(0);
  push();
  rect(174, 150, 50, 24);
  pop();

  // scarf bottom
  push();
  rect(178, 150, 20, 50);
  pop();

}

function draw() {

}
