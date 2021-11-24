/*
Oppgave - Temperaturmålinger

a)
Du skal lage en web-app hvor en bruker kan registrere temperaturer. Appen skal ha:

Et input-felt hvor brukeren kan skrive inn dagens temperatur.
En knapp for å registrere temperaturen.
En oversikt over temperaturene som har vært.
Blir du tidlig ferdig kan du legge til CSS og bilder på appen.
b) Skriv ut den høyeste temperaturen målt i appen. Tips: Se funksjon finnMaks() i eksempel på s. 230.

c) Presenter temperaturene ved hjelp av et stolpediagram. Tips: se s. 2255.
*/

const inpTemp = document.querySelector("#inpTemp");
const btnTemp = document.querySelector("#btnTemp");
const divTemp = document.querySelector(".divTemp");
const sortering = document.querySelector("#sortering");

let temperaturer = [];

btnTemp.onclick = registrerTemp;

sortering.onchange = function(){
nySortering();
skrivUtTemp();
}


function registrerTemp() {
  temperaturer.push(Number(inpTemp.value)); // pusher temperature i input fetet til Arrayen temperatur
  nySortering(); // sorterer tempereaturer-arrayen avhengig av verdien i sorterings- select
  skrivUtTemp(); // skriver ut temperaturene på siden

}

function nySortering() {
  if (sortering.value === "lavTilHoy") {
    temperaturer.sort(sorterTallLavTilHoy)
  } else if (sortering.value === "HoyTilLav") {
    temperaturer.sort(sorterTallHoyTilLav)
  }
}


function skrivUtTemp() {
  divTemp.innerHTML = ``;
  for (let temp of temperaturer) {
    if (temp > 0) {
      divTemp.innerHTML += `
      <div class="soyle positiv" style="height:${temp*10+200}px"> ${temp} </div>
      `;
    }
  else {
      divTemp.innerHTML += `
  <div class="soyle negativ" style="height:${temp*10 +200}px"> ${temp} </div>
  `;
    }
  }
}

//sorterings funksjoner:
function sorterTallLavTilHoy(a, b) {
  return a - b;
}

function sorterTallHoyTilLav(a, b) {
  return b - a;
}
