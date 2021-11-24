// Oppgave 6 – Importkalkulator
//
// Du skal lage en applikasjon som regner ut hvor mye du må betale i merverdiavgift(mva.) og tollgebyr når man bestiller varer fra utlandet.
//
// Krav til applikasjonen:
// 1.	et input-felt for innskriving av varens verdi
// 2.	en knapp som utfører beregningen
// Reglene for import er:
// •	Det er ingen toll eller mva. på varer under 350kr
// •	Varer til en verdi av 350kr eller mer må betale mva. på 25% av varens verdi, og et tollgebyr på 158kr.
// Oppgave:
// a.	Lag en kalkulator som legger til 25% moms på prisen i input-feltet (pris*1.25)
// b.	Legg til funksjonalitet som gjør at det ikke legges til moms på varer som koster under 350kr
// c.	Legg til funksjonalitet som gjør at tollgebyret på 158kr legges på prisen hvis verdien er over 350kr

const verdi = document.querySelector("#verdi")
const btn = document.querySelector("#btn")

// funksjon som gjør at vi kan legge på verdi * 1.25
btn.onclick = moms;
function moms() {
let verdi_før= Number(verdi.value);
  if (verdi_før>350) {
  var med_moms = verdi_før*1.25+158;
    div2.innerHTML += `<div> Varen du kjøper vil koste ${med_moms} kr </div>`
  }
else {
  div2.innerHTML += `<div> Varen du kjøper vil koste ${verdi_før} kr </div>`
}

}




/*
let med_moms
function moms() {
med_moms.push(Number(verdi.value * 1.25));

  console.log(med_moms);

}
btn.onclick = moms

*/
/*
function kostnader(originalVerdi){
  if (originalVerdi>350) {
originalVerdi*=1.25;
originalVerdi+=158;
  }
return originalVerdi;
}

function skrivUtKostnad(oppdatertVerdi){
  spanKostnad.innerHTML = "Varen du kjøper vil koste" + oppdatertVerdi + "kr";
}

btn.onclick = function() { // anonym funksjon
let oppdatertVerdi = kostnader(Number(verdi.value));
skrivUtKostnad(oppdatertVerdi);
}
// OBS kan ikke koble button.onclick til flere hendelser
*/


/*
const inpTall1 = document.querySelector("#inpTall1")
const inpTall2 = document.querySelector("#inpTall2")
const spResultat = document.querySelector("#spResultat")


function regnUt(){
spResultat.innerHTML = Number(inpTall1.value) + Number(inpTall2.value);
}

inpTall1.oninput = regnUt;
inpTall2.oninput = regnUt;



html:
*/
//
/*
const verdi = document.querySelector("#verdi")
const btn = document.querySelector("#btn")

btn.onclick = kalkis;

function kalkis(){
  let før = verdi.value;
  if (før>350) {
    let overfort = (verdi.value*1.25)+158;
    div2.innerHTML += `${før} kroner er med moms ${overfort} kroner`
  }
else {
  div2.innerHTML += `${før} kroner`

}
}
*/
