var ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.dx = 7;
ball.dy = 5;

var emu = [];


function setup() {
  createCanvas(600,600);
  for (var i = 0; i < 500; i++){
    emu[i] = new Emu();

  }
}


function draw() {
  if (mouseIsPressed) {
    background(0);
  }
  for (var i = 0; i < 500; i++) {
// used to make my function move or (bubble)
    emu[i].move();
// Used to display my function
    emu[i].display();

}


var bgVal;
bgVal = map(mouseX, 0, 600, 0, 255);
bgRed = map(mouseX, 0, 600, 0, 255);
bgGreen = map(mouseY, 0, 600, 0, 255);
bgBlue = map(mouseX, mouseY, 0, 600, 0, 255);

stroke(255);
fill(bgRed, bgGreen, bgBlue);
ellipse(mouseX, mouseY, 64, 64);



// Move the ball
ball.x += ball.dx;
ball.y += ball.dy;

// Ensure the ball stays on the screen
if (ball.x < width || ball.x >= 0) {
  ball.dx *= - 1;
}
if (ball.y > height || ball.y <= 0) {
  ball.dy *= - 1;
}




// ball

fill(random(0, 266), random(0, 266), random(0, 266));
ellipse(ball.x, ball.y, ball.width, ball.width);


}
