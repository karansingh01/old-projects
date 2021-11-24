function preload(){
  // put preload code here
}

  var circleX
  var size



function setup() {
  // put setup code here
  createCanvas(600,400);
//  print("setum function")
circleX = 20;
size = 30;
}

function draw() {
  // put drawing code here
  background(255,250,100);
  noStroke()
  fill(250,200,200)
  rect(50,50,150,150);

  fill(200,250,200)
  ellipse(circleX,200,size,size);
circleX = circleX + 1;
size = size + 1

//  console.log(frameCount);

}

//function mousePressed(){
  //background(255,250,100);
//}
// no stroke for painting ptogram
