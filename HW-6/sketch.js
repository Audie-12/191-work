
function setup() {
  createCanvas(600, 400);

}


function draw() {
  background(0);
  strokeWeight(2);
  stroke(255);

// makes all of the cirlces when you click the mouse
  if (mouseIsPressed) {
   for (var x = 0; x <= width; x += 100) {
     for (var y = 0; y <= height; y += 100) {
       fill(50, 70, 90);
       ellipse(x, y, random(0, 25), random(0, 25));
     }
   }
 }

 // Was suppose to create a roll over on the box in the middle but couldnt figure it out
 if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250) {
   fill(255, 0, 200);
 }
 noFill();
 rectMode(CENTER);
 rect(300, 200, 100, 100);

// Adds a diagnol line to intersect the circles
  if (mouseX > 600) {
    line(100, 0, 0, 100);
  } if (mouseX > 550) {
    line(200, 0, 0, 200);
  } if (mouseX > 500) {
    line(300, 0, 0, 300);
  } if (mouseX > 450) {
    line(400, 0, 0, 400);
  } if (mouseX > 400) {
    line(500, 0, 0, 500);
  } if (mouseX > 350) {
    line(600, 0, 0, 600);
  } if (mouseX > 300) {
    line(700, 0, 0, 700);
  } if (mouseX > 250) {
    line(800, 0, 0, 800);
  } if (mouseX > 200) {
    line(900, 0, 0, 900);
  } if (mouseX > 150) {
    line(1000, 0, 0, 1000);
  } if (mouseX > 100) {
    line(1100, 0, 0, 1100);
  } if (mouseX > 50) {
    line(1200, 0, 0, 1200);
  }


}
