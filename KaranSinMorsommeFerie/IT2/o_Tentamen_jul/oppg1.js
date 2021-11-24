/*
Oppgave 1 – Middagskalkulator for barn

Sandvika Kino har et prissystem som er slik at summen av alderen til en families barn
bestemmer hvilken type billett barna må betale. Du skal lage en kalkulator som kan stå på nettsiden deres.


Lag et program der brukeren kan skrive inn alder på to barn. Alderne skal legges sammen i programmet og summen vises på nettsiden. Programmet skal også vise en melding fra programmet (X skal byttes ut med summen som er regnet ut):

* Dersom summen er under 4 skal det skrives ut en melding der det står «Barn på tilsammen X år kommer inn gratis.».

* Dersom summen er mellom 4 og 18 skal meldingen: «Med alderen X år må man betale barnebillett» skrives ut.

* Dersom summen blir mer enn 18 skal meldingen: «Med alderen X år må man betale voksenbillett» skrives ut.

Programmet skal kunne kjøres flere ganger.

*/
const inpTall1 = document.querySelector("#inpTall1")
const inpTall2 = document.querySelector("#inpTall2")
let ader = document.querySelector("#aler")

const resultat = document.querySelector("#resultat")

let alder

function regnUt(){
alder = Number(inpTall1.value) + Number(inpTall2.value);

if(alder < 4){
  resultat.innerHTML = `Barn på tilsammen ${alder} år kommmer inn gratis!`

}
else if (alder<18) {
  resultat.innerHTML = `med alderen ${alder} år må man betale barnebillet !`

}
else{
  resultat.innerHTML = `med alderen ${alder} år må man betale voksenbillet !`
}

}

inpTall1.oninput = regnUt;
inpTall2.oninput = regnUt;





/*


const btn = document.querySelector("#knapp")
const divResultat = document.querySelector("#resultat")
const imgBilde = document.querySelector("#img")
btn.onclick = alder;

function alder(){
  let alder = Math.floor(Math.random()*70) + 1; // Tilfeldig tall mellom 1 og 70
   if(alder < 15){
     divResultat.innerHTML = `${alder} år. Ikke for smårollinger, minst 15 år!`
     imgBilde.src = "../vedlegg/ung.jpg"
   }
   else if (alder > 60) {
     divResultat.innerHTML = `${alder} år. Ikke for gamlinger, maks 60 år!`
     imgBilde.src = "../vedlegg/gammel.jpg";
   }
   else{
     divResultat.innerHTML = `${alder} år! Gratulerer, du er akkurat passe gammel!`
     imgBilde.src = "../vedlegg/passe.jpg";
   }
 }
}
*/
