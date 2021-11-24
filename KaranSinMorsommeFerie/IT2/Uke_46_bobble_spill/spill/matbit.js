
class Matbit{
  constructor(){
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.storrelse = 10;
    this.farge = `rgb(${Math.floor(Math.random()*255)} ,${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
    console.log(this.farge);

  }
  tegn(){
    fill(this.farge);
    circle(this.x, this.y, this.storrelse);
  }
}
