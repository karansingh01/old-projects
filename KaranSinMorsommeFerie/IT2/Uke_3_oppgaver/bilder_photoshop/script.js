const bilde = document.querySelector("#bilde");
const bilderamme = document.querySelector("#bilderamme");



bilde.onmousemove = function(event) {
console.log("x:",event.clientX);
console.log("y:",event.clientY);
console.log(bilderamme.offsetLeft);
bilde.style.width = 4000 + "px";
bilde.style.marginLeft = 3*(-event.clientX + bilderamme.offsetLeft) + "px";
bilde.style.marginTop = 3*(-event.clientY + bilderamme.offsetTop) + "px";
}


bilde.onmouseout = function() {
  bilde.style.width = 1000 + "px";
  bilde.style.marginLeft = 0;
  bilde.style.marginTop = 0;
}

bilde.onclick = function(event) {
/*  bilde.style.width = 1000 + "px";
  bilde.style.marginLeft = 0;
  bilde.style.marginTop = 0;
  */

  bilde.style.width = 8000 + "px";

}
