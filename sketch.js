
var myself;

var x, y=0;
function setup() {
  createCanvas(600, 600);
  myself = new Player(0, 0);
}

function draw() {
  background(255, 255, 255);
  myself.update();
  myself.show();

}
