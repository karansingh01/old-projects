/*Oppgave 4 – Handleliste

Du skal lage et program som fungerer som en handleliste. Det skal være mulig å skrive inn en vares navn (f.eks. «melk»), prisen til varen og antall som skal kjøpes av varen. Handlelisten skal oppdateres fortløpende og vises for brukeren. Totalsummen skal også skrives ut og oppdateres fortløpende. Det skal også være mulig å slette siste vare (med pris og antall) i listen. Resten av listen og totalsummen skal fremdeles vises.

I denne oppgaven må du bruke en eller flere arrayer.

Legg til fornuftige begrensninger på inputfeltene og tenk brukervennlighet.
*/

const inpVare = document.querySelector("#inpVare");
const inpAntall = document.querySelector("#inpAntall");
const btnRegistrer = document.querySelector("#btnRegistrer");
const vareListe = document.querySelector("#vareListe");
const btnSlett = document.querySelector("#btnSlett");
const totalsum = document.querySelector("#totalsum");

let varer = []; // tom Array
let sum = 0;
btnRegistrer.onclick = leggTilvare;

function leggTilvare() {

  varer.push({
    navn: inpVare.value,
    pris: Number(inpPris.value),
    antall: inpAntall.value
  });
  varer.sort(sortervarer);
vareListe.innerHTML = ""; // fjerner så de ikke gjentar seg

  for (let vare of varer) {
    if (inpAntall<10 ||inpPris.value<1000 ) {
      vareListe.innerHTML += `<li> varen:${vare.navn}    Pris:${vare.pris}    antall:${vare.antall}</li>`;
      sum= sum+vare.pris
      totalsum.innerHTML = `Totalt sum er: ${vare.pris+sum}`;
    }
else {
  vareListe.innerHTML = `Denen listen tar desverre ikke inn varer med for høy pris eller antall`
  totalsum.innerHTML = ``;
}
  }

}

btnSlett.onclick = slett;

function slett() {
vareListe.innerHTML = ``
totalsum.innerHTML = ``;

}

function sortervarer(a, b) {
  return b.pris - a.pris;
}
