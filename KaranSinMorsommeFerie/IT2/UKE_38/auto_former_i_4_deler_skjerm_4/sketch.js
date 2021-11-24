let x = 0;
let y = 0;


function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  background(100,200,200);

}

function draw() {
  // put drawing code here

x = random(0,width);
y = random (0, height);


if( x < width/2 && y < height/2){
  circle(x,y,25);
}
else if (x<width/2 && y > height/2) {
triangle(x,y,x+20,y,x+10,y-20)
}

else if (x > width/2 && y > height/2) {
ellipse(x,y,30,20)
}
else {
  rect(x,y,25,25)
}

}
