

var x = 50;
var y = 150;
var radius = 50;

function setup() {
// put setup code here
createCanvas(windowWidth,windowHeight);
//  print("setum function")
background(0)

}

function draw() {

if (x < 1/2*windowWidth && y < 1/2*windowHeight) {

x = random(0, 1/2* windowWidth);
y = random (0, windowHeight);
ellipse(x,y,24,24);
}
// else ( x > 1/2*windowWidth && y > 1/2*windowHeight) {

//  rect(x,y,24,24);






//  console.log(frameCount);

}

// Lag et program som tegner figurer tilfeldig steder p( canvaset
//a) Hvis figuren er til høyre for midten skal det være en firkant, og hvis figuren
//er til venstre for midten skal det være en sirkel
//b) Legg til kode slik at figurene som tegnes følger figuren under. Eks: figurene nederst i venstre hjørne skal være trekanter
