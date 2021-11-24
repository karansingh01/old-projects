function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  // put drawing code here
  background(220);

  //Lag et program der et rektangel følger musepekeren.
  //rect(mouseX,mouseY,20,20);


  //B) Utvid programmet slik at det tegnes en ellipse hvis musepekeren er under midten og
  //en sirkel hvis musepekeren er over midten til høyre. Se figur under.

  x = mouseX;
  y = mouseY;

  if (x < 1 / 2 * windowWidth && y < 1 / 2 * windowHeight) {
    rect(mouseX, mouseY, 20, 20);
  } else if (x > 1 / 2 * windowWidth && y < 1 / 2 * windowHeight) {
    circle(mouseX, mouseY, 20);
  } else {
    ellipse(mouseX, mouseY, 20, 40);
  }
}
