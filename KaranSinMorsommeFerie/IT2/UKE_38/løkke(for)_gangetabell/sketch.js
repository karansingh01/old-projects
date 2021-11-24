function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here
  background(110,20,200);
  textSize(32);
//text("Hallo der" , 100, 50);

for(let i = 1; i<=10; i = i+1){
  for(let j= 1; j<=10; j=j+1){
      text(i*j,i*55,j*60)
  }
}


}
//for(let x = 10; x<100; x=x+10){
// kode som skal gjennomføres
//}
// x= 10 er variabel (teller)
// < er betigelse
// x+10 er hva som skal skje etter hver runde



//  for (let x = 13,y=10; x<1000 && y<1000; x=x+50, y = y+50){
  //  circle(13,y,25);
    //circle(x,13,25);
//    circle(x,y,25);
  //  circle(x,387,25);
    //circle(387,y,25);
