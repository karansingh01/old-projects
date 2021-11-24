function preload(){
  // put preload code here
}


function setup() {
  // put setup code here
  createCanvas(1000,400);
//  print("setum function")

rectX = -170;
rectX_2 = -170;
rectX_3 = -170;
rectX_4 = -170;
rectX_5 = -170;


}

function draw() {


  // put drawing code here

  background(55,100,100)


  fill(200,202,200);
  rect(rectX,150,150,50);

  fill(250,200,200);
  rect(rectX*6,80,150,50);

  fill(200,250,200);
  rect(rectX*3,10,150,50);

  fill(200,02,200);
  rect(rectX*40,220,150,50);

  fill(00,02,200);
  rect(rectX*10,300,150,50);



  rectX = rectX + 1;

//  rectX_2 = rectX_2 + 2;
//  rectX_3 = rectX_3 + 3;
//  rectX_4 = rectX_4 + 4;
//  rectX_5 = rectX_5 + 5;








//  console.log(frameCount);

}
