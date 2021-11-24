/*
let matvarer = ["ost" , "paprika" , "brød" , "kaviar"];

matvarer.unshift("Pizza");


matvarer.splice(4,1);

matvarer.splice(3,1,"knekkebrød");

document.write(matvarer);
*/
/*
let traer = ["lønn", "hassel","bjørk","eik","blodlønn","furu","gran"];
traer.splice(3,1)
traer.splice(2,1,"hengebjørk")
traer.splice(4,2, "fjellbjørk", "dvergbjørk")

traer.sort()

document.write(traer);
*/

const btn1 = document.querySelector("#btn1")
const bilder = document.querySelector("#bilder")

const feriebilder = [ "array2.jpg", "array3.jpeg" , "array4.jpeg"];

let bildeNr = 0;

btn1.onclick = nesteBilde;

function nesteBilde(){
  if (bildeNr>= feriebilder.length-1) {
bildeNr = 0;
  }
  else {
    bildeNr += 1;
  }

  bilder.src = feriebilder[bildeNr];
}
