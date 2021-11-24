class Boble {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.radius = 25;
}
tegn(){
  circle(this.x, this.y, this.radius);
}
flytt(){
  this.x +=1;
}
}
let boble1 = new Boble(100,200);
let boble2 = new Boble(300,200);

function setup() {
  // put setup code here
  createCanvas(400, 400);

}

function draw() {
  // put drawing code here
  background(220);
  boble1.flytt()
  boble1.tegn();
  boble2.tegn();
}



/* Dårlig kode å skrive rett inn i en funksjon
let boble1 = {
  x: 200,
  y: 200,
  radius: 25,
  tegn: function() {
    rect(this.x, this.y, this.radius, this.radius);
  }
}

let boble2 = {
  x: 300,
  y: 200,
  radius: 25,
  tegn: function() {
    circle(this.x, this.y, this.radius);
  }
}
*/
