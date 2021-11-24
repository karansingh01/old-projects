/*
Oppgave 2 – Rabattkalkulator

Du skal lage et program der man kan legge inn en pris på en vare og en rabatt i prosent.
Programmet skal beregne sluttprisen.

Eks: Hvis man skriver inn pris 50 kr og 5% rabatt, blir sluttprisen 50 * 0.95. 0.95 er vekstfaktoren.
 Legg til fornuftige begrensninger for inputfeltene og tenk brukervennlighet.

*/

const inpTall1 = document.querySelector("#inpTall1")
const inpTall2 = document.querySelector("#inpTall2")
const btn = document.querySelector("#btn")

// funksjon som gjør at vi kan finne prosent
btn.onclick = rabatt;

function rabatt() {
  let prosent = (Number(inpTall1.value)/100)*( Number(inpTall2.value));
  let ny_pris =Number(inpTall1.value)-prosent
  if (inpTall2.value<100) {
    div2.innerHTML += `<div> Varen du kjøper vil koste ${ny_pris} kr </div>`
  }
  else if (inpTall2.value>100) {
    div2.innerHTML += `<div> Vennligst fyll inn en gyldig prosent </div>`

  }
  }
