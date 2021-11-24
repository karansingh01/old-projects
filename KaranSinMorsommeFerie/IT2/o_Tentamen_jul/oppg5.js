/*
Oppgave 5 – Bestillingsverktøy for matkasse

Du skal lage en nettside som kan ta imot bestillinger for matkasser.
Brukeren skal kunne velge en matkasse som inneholder to eller tre middager,
og hvor mange personer middagene skal lages til.


Når brukeren har valgt matkasse,
skal det komme opp et bilde som illustrerer om det er to eller tre middager som er valgt.
 Applikasjonen bør sjekke om antall personer som er registrert, er innenfor lovlige/sannsynlige verdier.

Prisen beregnes ut fra valgene, og du kan regne med 80 kroner per person per måltid. Bestilles det matkasser til fem personer eller mer, vil prisen per person være 70 kroner.

Applikasjonen skal bekrefte valgene som er gjort, og navnet og adressen til den som bestiller, skal legges inn og vises sammen med de andre opplysningene.

(Bestillingen vil på en virkelig nettside måtte sendes/lagres ved hjelp av for eksempel e-post eller en fil, men på prøven trenger du ikke gjøre noe med dette.

Bildene til oppgaven finner du i mappen «bilder» som var vedlagt prøven.
*/
const imgMiddag = document.querySelector("#imgMiddag");
const middager_2 = document.querySelector("#middager_2");
const middager_3 = document.querySelector("#middager_3");
const divInfo = document.querySelector("#divInfo");
const bilder= document.querySelector("#bilder");

const input_felt= document.querySelector("#input_felt");
const verdi= document.querySelector("#verdi");

const btn_videre= document.querySelector("#btn_videre");

const divOpplysning = document.querySelector("#divOpplysning");
const inpNavn = document.querySelector("#inpNavn");
const inpAdresse = document.querySelector("#inpAdresse");
const btnRegistrer = document.querySelector("#btnRegistrer");
const btnFerdig = document.querySelector("#btnFerdig");



const middager = [
  {
    navn: "2 middager",
  },
  {
    navn: "3 middager",

  }
];


middager_2.onclick = function(){
  visMiddag("2 middager");

}
middager_3.onclick = function(){
  visMiddag("3 middager");
}


function visMiddag(middagNavn){
  for(let middag of middager){
    if(middagNavn === middag.navn){
      divInfo.innerHTML = `Du har valgt ${middag.navn}.`
      bilder.style.display = "none"
      input_felt.style.display = "block"
      btn_videre.style.display = "block"
    }
  }
}
btn_gjester.onclick = antall_gjester;

function antall_gjester() {
  let antall_folk = Number(verdi.value);
    if (antall_folk>=1  & antall_folk <=7) {
      divInfo.innerHTML += ` <div>  Mat for ${antall_folk} vil det være tistrekkelig for fra oss. Vennligst trykk på fortsrttelses knappen</div>`

    }

    else {
      divInfo.innerHTML = ` Vi tror desverre ikke at vi kan levere middag til ${antall_folk} personer. Vi jobber med å ekspandere utvalget`
    }

}

btn_videre.onclick= antall_kasser;

function antall_kasser(){
    divInfo.innerHTML = ``
    input_felt.innerHTML = ``
    btn_videre.style.display = "none";
    divOpplysning.style.display = "block";


    let antall_folk = Number(verdi.value);
      if (antall_folk>=2  & antall_folk <=4) {
        divInfo.innerHTML += `   Mat for ${antall_folk} personer vil koste 80 kroner per måltid. <div> Hvis du aksepterer dette vennligst fyll ut navn og mail</div>  <div> totalt: ${antall_folk*70} kroner</div>`
      }
      else if (antall_folk>=5  & antall_folk <=7) {
        divInfo.innerHTML += `   Mat for ${antall_folk} personer vil koste 70 kroner per måltid. <div> Hvis du aksepterer dette vennligst fyll ut navn og mail </div>  <div>  totalt: ${antall_folk*70} kroner</div>`
      }
else {
  divInfo.innerHTML = `Vi tror desverre ikke at vi kan levere middag til ${antall_folk} personer. Vi jobber med å ekspandere utvalget. Vennligst gå tilbake og prøv med et anne tantall gjester hvis du ønsker `
  divOpplysning.style.display = "none";


}
}

let varer = []; // tom Array
btnRegistrer.onclick = opplysninger;

function opplysninger() {
  btnFerdig.style.display = "block";

  varer.push({
    navn: inpNavn.value,
    adresse: inpAdresse.value,
  });
divOpplysning.innerHTML = ""; // fjerner så de ikke gjentar seg

  for (let vare of varer) {
    divOpplysning.innerHTML= `<li> Navn:${vare.navn} og   Adresse:${vare.adresse}    </li>`;

  }
}
btnFerdig.onclick = function() {
app.innerHTML = `Takk for din bestilling. Middagene vil bli levert om 5 timer og 15 minutter`
}
