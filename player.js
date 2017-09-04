function Player(x, y) {
  this.pos = createVector(x, y);
  this.weapon = 8;
  this.rhead = 25;
  this.rbody = 40;
  this.vel = createVector(3, 3);
  var angle;

  this.update = function () {
    if(keyIsDown(UP_ARROW))
      this.pos.y -= this.vel.y;
    if(keyIsDown(DOWN_ARROW))
      this.pos.y += this.vel.y;
    if(keyIsDown(LEFT_ARROW))
      this.pos.x -= this.vel.x;
    if(keyIsDown(RIGHT_ARROW))
      this.pos.x += this.vel.x;

    var value = (mouseY - this.pos.y) / (mouseX - this.pos.x);
    angle = atan(value);
  }

  this.show = function() {

  translate(this.pos.x, this.pos.y);
    if(mouseX - this.pos.x < 0){
      rotate(angle+3,135844);
    }else{
      rotate(angle);
    }
    fill(92, 92, 246);
    rect(0 - this.rbody/2, 0 - this.rbody/2, this.rbody, this.rbody);
    fill(235, 199, 144);
    ellipse(0, 0, this.rhead, this.rhead);
    fill(0, 0, 0);
    rect(0 - this.rbody/2 + this.rbody, 0 - this.rbody/2, this.weapon, this.weapon * 1.3);
  }
}
