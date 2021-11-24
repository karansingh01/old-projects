// Oppgave 7 – Tilfeldig person i berg- og dalbanen
//
// Du skal lage en applikasjon som sier om en tilfeldig person er gammel nok til å kunne ta en berg- og dalbane.
//
// a.	Når brukeren trykker på en knapp starter en funksjon som gir tilbake alderen på en person, alderen skal være et tilfeldig tall mellom 1 og 70 år.
//Alderen til personen skal vises på nettsiden.
//
// b.	Hvis personen er yngre enn 15 år skal teksten «Ikke for smårollinger, minst 15 år!».
// Hvis personen er eldre enn 60 år skal teksten «Ikke for gamlinger, maks 60 år!»
// Ellers skal alderen på personen sammen med teksten « år! Gratulerer, du er akkurat passe gammel!»
//
// c.	Hvis personen er for ung skal bildet ung.jpg vises på nettsiden, er personen for gammel skal gammel.jpg vises og er personen passe gammel skal passe.jpg vises.

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

/*
const btn = document.querySelector("#knapp")
const imgBilde = document.querySelector("#img")

btn.onclick = alder

function alder() {
let biler = Math.floor(Math.random()*70)+1;
if (biler<15) {
  resultat.innerHTML = `Din alder er ${biler}. Ikke for smårollinger`
  imgBilde.src = "../vedlegg/ung.jpg"

}
else if (biler>60) {
  resultat.innerHTML = `Din alder er ${biler}. Ikke for gamlinger`
  imgBilde.src = "../vedlegg/gammel.jpg";

}
 else {
   resultat.innerHTML = `Din alder er ${biler}. Grayulerer du er pass`
   imgBilde.src = "../vedlegg/passe.jpg";

}
}
*/
