function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);

}


function draw() {
  // put drawing code here
  background(220);

  //b. Skriv ut alle partall mellom 2 og 30 ved siden av hverandre på et P5-canvas.
  for (let i = 2; i <= 30; i += 1) {
    if (i % 2 === 0) {
      text(i,i * 44, 50)
    }
  }

  // Lag 25 sirkler ved siden av hverandre på et P5-canvas.
  for (let i = 1; i <= 25; i += 1) {
    circle(i * 40, 600, 30)
  }


}
