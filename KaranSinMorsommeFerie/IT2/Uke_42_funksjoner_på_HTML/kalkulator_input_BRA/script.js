const inpTall1 = document.querySelector("#inpTall1")
const inpTall2 = document.querySelector("#inpTall2")
const spResultat = document.querySelector("#spResultat")


function regnUt(){
spResultat.innerHTML = Number(inpTall1.value) + Number(inpTall2.value);
}

inpTall1.oninput = regnUt;
inpTall2.oninput = regnUt;









/*
function pluss(tall1,tall2){
return Number(tall1) + Number(tall2);
}*/
