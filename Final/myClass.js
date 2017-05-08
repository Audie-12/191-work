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
    blendMode(DIFFERENCE);
    noStroke();
    fill(this.r, this.g, this.b);
    ellipse(this.x, this.y, this.size, this.size);
    fill(this.r, this.g, this.b);
    blendMode(SCREEN);
    ellipse(this.x, this.y, this.size, this.size);
    noStroke();
    blendMode(SCREEN);
    rect(this.x * 2, this.y * 2, this.size, this.size);
  };

  this.move = function() {
    this.y = this.y - this.speed;
    if (this.y < width - this.size * 1.5){
      this.y = height + this.size * 1.5;
    }
    if (this.x > width - this.size * 1.5){
    this.x = height + this.size * 1.5;
    }


  };

}
