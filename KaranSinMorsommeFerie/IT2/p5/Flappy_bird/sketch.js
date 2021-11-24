// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/cXgA1d_E-jY&


var bird;
var hindringer = [];

function setup() {
  createCanvas(840, 580);
  bird = new Bird();
  hindringer.push(new hindring());
}

function draw() {
  background(0);

  for (var i = hindringer.length-1; i >= 0; i--) {
    hindringer[i].show();
    hindringer[i].update();

    if (hindringer[i].hits(bird)) {
      console.log("HIT");
    }

    if (hindringer[i].offscreen()) {
      hindringer.splice(i, 1);
    }
  }

  bird.update();
  bird.show();

  if (frameCount % 75 == 0) {
    hindringer.push(new hindring());
  }
}

function keyPressed() {
  if (key == ' ') {
    bird.up();
    //console.log("SPACE");
  }
}
