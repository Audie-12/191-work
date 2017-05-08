var emu = [];

function setup() {
  createCanvas(600,600);
  for (var i = 0; i < 500; i++){
    emu[i] = new Emu();
  }
}



function draw() {
  background(0);
  for (var i = 0; i < 500; i++) {
    emu[i].move();
    emu[i].display();
  }
}
 hello
