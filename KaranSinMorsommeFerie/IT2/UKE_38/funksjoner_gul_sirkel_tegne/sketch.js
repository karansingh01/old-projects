function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);

}

function draw() {
  // put drawing code here
  //background(220);
  //tegnGulSirkel(50,90,100);
  //tegnGulSirkel(300,304, 100);
  //tegnGulSirkel(200,200, 100);

}
//function tegnGulSirkel(x,y,r){
//fill("yellow")
//circle (x,y,r);



function tegnGulSirkel(x,y){
  fill("yellow")
circle (x,y,100);

}

function mousePressed(){ //mouswPresses virer kun med p5.js
  tegnGulSirkel(mouseX,mouseY);
}

//window.onclick = tegnGulSirkel
