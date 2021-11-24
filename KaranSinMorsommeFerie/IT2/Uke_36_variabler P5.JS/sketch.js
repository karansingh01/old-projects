  let img;
  function preload() {
    img = loadImage('image.jpeg');
  }

function setup() {
  // put setup code here
  createCanvas(400, 400);
  background(220);

}

function draw() {




    image(img,mouseX,mouseY,25,25);


//let nyX = map(mouseX,0,500,0,100)
//circle(mouseX,mouseY,nyX)
//console.log(mouseX)

if(mouseIsPressed){
  fill(random(0,255),random(0,255),random(0,255))
  background(200);
}


}
