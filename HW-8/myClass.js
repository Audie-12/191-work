// myClass
function Emu() {

  this.x = random(0, 600);
  this.y = random(0, 600);
  this.size = random(5, 25);
  this.speed = random(0.25, 2);
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);


  this.display = function() {
    blendMode(SCREEN);
    fill(this.r, this.g, this.b);
    ellipse(this.x, this.y, this.size, this.size);
    fill(this.r, this.g, this.b);
    blendMode(DIFFERENCE);
    ellipse(this.x, this.y, this.size, this.size);
    blendMode(DIFFERENCE);
    rect(this.x, this.y, this.size, this.size);
  };

  this.move = function() {
    this.y = this.y - this.speed;
    if (this.y < 0 - this.size * 1.5){
      this.y = height + this.size * 1.5;
    }
  };

}
