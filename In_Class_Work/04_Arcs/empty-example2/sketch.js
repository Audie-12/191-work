function setup() {
  createCanvas(800, 400);
  background(0, 253, 242);

  push();
  translate(400, 200);
  ellipse(0, 0, 20, 20);
  arc(0, 0, 60, 60, PI / 16, -PI / 16, PIE);
  pop();

  ellipse(0,0, 300, 30);


}


// arc(0, 0, 60, 60, PI / 4, -PI / 4); - pacman


function draw() {

}
