const timer = document.querySelector("#timer");
const fravær = document.querySelector("#fravær");
const fravær_prosent = document.querySelector("#fravær_prosent");
const btnRegn = document.querySelector("#btnRegn");



function prosentAlt(){
let prosent = (Number(fravær.value) / Number(timer.value))*100;
//fravær_prosent.innerHTML = prosent.toFixed(2) + "%";
fravær_prosent.innerHTML = `
Fraværet ditt er: ${prosent.toFixed(2)}%
`;
}
timer.oninput = prosentAlt;
fravær.oninput = prosentAlt;


if(prosent => 10) {
document.body.style.backgroundColor = "red";
}
else if (prosent => 5) {
document.body.style.backgroundColor = "yellow";
}
else {
  document.body.style.backgroundColor = "green";

}
