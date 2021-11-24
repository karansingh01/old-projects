function preload(){
  // put preload code here
}

  var circleX
  var circleY = 200
  var size
  var col = 1;


  var spot = {
    x : 100,
    y : 50
  };

 var color ={
   r : 255,
   g :0,
   b : 0
 };

let xPososisjon = 120;
let yPosisjon = 135;

function setup() {
  // put setup code here
  createCanvas(1000,400);
//  print("setum function")
circleX = 20;
size = 30;


}

function draw() {


  // put drawing code here
  col = map(mouseX,0,1000,0,255);
  background(col)
  stroke(0);
  fill(400,0,00);
  rect(125,150,50,150);

  fill(0,125,0)
  ellipse(150,150,120,120);

stroke(0)
fill(0)
  ellipse(xPososisjon,yPosisjon,20,20);
  ellipse(180,135,20,20);
  line(175,225,250,200);
  line(125,225,50,200);
  line(130,300,120,400);
  line(160,300,170,400);
  triangle(100,100,200,100,150,60)

  line(700, 50, 650, 65)
  line(700, 30, 650, 35)
  line(710, 80, 660, 95)
  line(730, 100, 690, 145)



  noStroke()
  fill(250,200,200);
  rect(250,50,150,150);


      color.r= random (100,255);
      color.g = random (0);
      color.b = random (100,190 );
      spot.x = random(0, width);
      spot.y = random (0, height);
        fill(color.r, color.g, color.b, 100);
        ellipse(spot.x,spot.y,24,24);


  fill(200,250,200);
  ellipse(circleX,circleY,size,size);



  fill(247, 247, 17);
  circle(750,50,90);


  circleX = circleX + 1;
  circleY = circleY + 1;
size = size + 1


  line(700, 50, 650, 65);
  line(700, 30, 650, 35);
  line(710, 80, 660, 95);
  line(730, 100, 690, 145);



//  console.log(frameCount);

}

//function mousePressed(){
  //background(255,250,100);
//}
// no stroke for painting ptogram
