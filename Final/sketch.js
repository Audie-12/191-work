var emu = [];
var img;


// function preload() {
//   img = loadImage("./Pic/island.jpg");
// }

function setup() {
  createCanvas(600,600);
  for (var i = 0; i < 500; i++){
    emu[i] = new Emu();

    // song = loadSound("Sound/bubbles.wav");
  }
}
// Plays the song if the mouse is pressed.
// function mousePressed() {
//   if (song.isPlaying() ) {
//   song.stop();
//   } else {
//   song.play();
// }
// }

function draw() {
  for (var i = 0; i < 500; i++) {
// used to make my function move or (bubble)
    emu[i].move();
// Used to display my function
    emu[i].display();
// Loads my image into the canvas
    // image(img, 0, 0);
    // image(img, 0, height/2, img.width/2, img.height/2);
}



}
