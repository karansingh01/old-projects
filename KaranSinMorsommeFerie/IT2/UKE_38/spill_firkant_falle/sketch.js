let figur = { // med krøllparanteseer betyr at de er et objekt
x:50,
y:50,
xFart:1,
yFart:3,
hoyde:25,
bredde:25,
hopp: 50
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  // put drawing code here
  background(220);

figur.x = figur.x + figur.xFart;
figur.y = figur.y + figur.yFart;

if(figur.y > height){
  textSize(40)
  text("Jatt gang", width/2.3,height/2)
  noLoop();


}

  rect(figur.x,figur.y,figur.bredde, figur.hoyde)


}
window.onkeydown = hopp;

function hopp(event){
  if(event.key=== "ArrowUp"){
    figur.y=figur.y-figur.hopp;
  //  figur.yFart=figur.yFart + 1;

  }
  else if (event.key === "Enter") {
location.reload();
  }
//figur.y = figur.y - 50;
}
