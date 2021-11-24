function setup() {
  // put setup code here
  createCanvas(windowWidth,2000);

}

function draw() {
  // put drawing code here
  background(220);
stroke(0);


let x = 10;
while(x<windowWidth){
  circle(x,200,25);
  x = x+50;
}



let y = 10;
while (y<windowHeight) {
circle(200,y,25);
y = y+50;
}

let a = 10;
while(a< 1010){
  line(150,a,250,a);
  a=a+10;
}

}

let gange = 1;
while(gange <=10){
  console.log(gange*8);
gange=gange+1;
}
// løkker skrives slike while (true) {
//da skal denne koden gjennomføres så lenge while()er sann
//}
