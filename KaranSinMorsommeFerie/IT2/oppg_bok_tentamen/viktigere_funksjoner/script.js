/*const app = document.querySelector("#app")
const btn = document.querySelector("#btn")
/*

var saldo = 10000;
function penger(ta_ut) {

  var til_slutt =   saldo-=ta_ut;
  if (til_slutt<0) {
    app.innerHTML += `Du har tatt ikke mer penger `

  }
  else {
    app.innerHTML += `Du har tatt ut ${ta_ut} kroner og har ${til_slutt} kroner igjen `

  }

}
penger(5000);
penger(500);
penger(5000);
*/

/*
var saldo = 10000;
function penger(ta_ut) {
    saldo-=ta_ut;
    app.innerHTML += "Det er nå "+saldo+" kroner igjen på kontoen";
}
penger(7500);
penger(7500);
*/

/*

// oppg 4 side 117
const favorittbyer = document.querySelector("#favorittbyer")
function punkt(by) {
  return `<li> ${by} </li>`;
}
favorittbyer.innerHTML+= punkt("Hoshiarpur");
favorittbyer.innerHTML+= punkt("Sandvika");
favorittbyer.innerHTML+= punkt("Chandigarh");

*/




/*
<form id="frmBok"  method="post">
<input type="text" id="forfater" placeholder="forfatter" name="" value="">
<input type="text" id="tittel" placeholder="tittel" name="" value="">
<button type="button" id="submit" name="button"></button>
</form>
<div id="info">
</div>
*/


/*
// oppgave 5 side 210

const inpNavn = document.querySelector("#inpNavn");
const inpAntall = document.querySelector("#inpAntall");
const btnRegistrer = document.querySelector("#btnRegistrer");
const elevListe = document.querySelector("#elevListe");

let elever = []; // tom Array

btnRegistrer.onclick = leggTilElev;


function leggTilElev() {

  elever.push({
    navn: inpNavn.value,
    antall: inpAntall.value
  });

  elever.sort(sorterElever);

elevListe.innerHTML = ""; // fjerner så de ikke gjentar seg

  for (let elev of elever) {
    elevListe.innerHTML += `<li> ${elev.navn} :  ${elev.antall}</li>`;
  }
}

function sorterElever(a, b) {
  return b.antall - a.antall;
}
*/
