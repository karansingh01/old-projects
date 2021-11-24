function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  noLoop()

  let a = 1;
  let b =  1;
  for (let i = 0; i <= 10; i = i + 1) {
    let c = a + b;
    text(c,30*i,30*i)
    a = b;
    b = c;
  }

}

function draw() {
  // put drawing code here
//  background(220, 20, 200);

}
