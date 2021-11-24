

var x;
var y;

var xspeed;
var yspeed

let dvd

let r,g,b;

function preload() {
img = loadImage("dvd.jpg");

}
function setup() {
// put setup code here
createCanvas(800,600);
x=random(width)
y=random(height)
xspeed=10;
yspeed=10;
function pickColor(){
r = random (225, 100);
g = random (225, 100);
b = random (225, 100);

}
}

function draw() {
background(0)
tint(pickColor.r,pickColor.g,pickColor.b);
image(dvd,x,y, 80,60)

x= x +  xspeed;
y = y + yspeed;

if (x + dvd.width >= width)  {
xspeed -xspeed;
x=width - dvd.width;
pickColor()
} else if (x<=0) {
xspeed = -xspeed;
x=0;
pickColor()

}
if (y + dvd.height >= height) {
yspeed = -yspeed;
y = height - dvd.height;
pickColor()

} else if (y <=0) {
yspeed = - yspeed;
y=0;
pickColor()

}
}
// else ( x > 1/2*windowWidth && y > 1/2*windowHeight) {

//  rect(x,y,24,24);
