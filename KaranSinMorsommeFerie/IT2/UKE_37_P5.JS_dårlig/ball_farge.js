


var spot = {
  x : 100,
  y : 50
};



function setup() {
  // put setup code here
  createCanvas(windowWidth, 400);
}

function draw() {
  // put drawing code here
  background(20);

if ( mouseX > 400 ) {
fill(255,0,0);
circle(mouseX,mouseY,50);
} else {
fill(0,0,255);
circle(mouseX,mouseY,50);

}

}

//• Lag en kode som tegner en sirkel i posisjonen til musepekeren
//• Hvis musepekeren er over 400px fra venstre side skal sirkelen ha
//rød farge
//• Hvis musepekeren er under 400px fra venstre side skal sirkelen ha bl( farge
