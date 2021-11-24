const imgGranbo = document.querySelector("#imgGranbo")
const imgGranstua = document.querySelector("#imgGranstua")
const divInfo = document.querySelector("#divInfo")
const btn_gjester = document.querySelector("#btn_gjester")
const verdi = document.querySelector("#verdi")
const divBilder = document.querySelector("#divBilder")
const alle_bilder = document.querySelector("#alle_bilder")
const resultat = document.querySelector("#resultat")

const slideshow = document.querySelector("#slideshow"); // hele slideshow er hele greia
const imgSlide = document.querySelector("#imgSlide"); // neste bilde slide
const btnNeste = document.querySelector("#btnNeste"); // knapp for neste slide


const hytter = [ // array med objekter inni, Må ha dette for høy måloppnåelse
  {
    navn: "Granbo", // dette er array nummer 0
    sengeplasser: 6,
    standard: "middels",
  },
  {
    navn: "Granstua", // dette er array nummer 1
    sengeplasser: 4,
    standard: "høg"
  },
]

imgGranbo.onclick = function() {


}
imgGranstua.onclick = function() {
  hytte_valg("Granstua")
}

function hytte_valg(hytteNavn) {
  for (let hytte of hytter) {
    if (hytteNavn === hytte.navn) {
      divInfo.innerHTML = `Her er informasjonen du trenger:<div> navn: ${hytte.navn}</div> <div> sengeplasser: ${hytte.sengeplasser}</div> <div> standard: ${hytte.standard}</div>`
    }
  }
}

btn_gjester.onclick = antall_gjester;

function antall_gjester() {
  let verdi_før = Number(verdi.value);
  for (let hytte of hytter) {
    if (verdi_før > 4 & verdi_før <= 6) {
      resultat.innerHTML += `${hytte_valg("Granbo")}`
      imgGranstua.style.display = "none"

      divBilder.innerHTML=``;
    }
    else if (verdi_før<=3) {
      imgGranbo.style.display = "block"
      imgGranstua.style.display = "block"

      resultat.innerHTML += `${hytte_valg("Granbo")}`;
      resultat.innerHTML += `${hytte_valg("Granstua")}`;

    }
    else {
      resultat.innerHTML = ``
    }
  }
}


// Du skal planlegge og lage en applikasjon som presenterer utleiehytter.
//Utgangspunktet er en meny der hyttene bilder av hyttene Granstua, Granbo, Grantoppen og Granhaug.
//I denne oppgaven holder det at du lager presentasjoner for Granbo og Granstua.
//
// Krav til applikasjonen:
// 4.	Brukeren skal kunne klikke på hyttene (granbo.jpg og granstua.jpg)
// 5.	Informasjon om hytta som er valgt, som skal vises (se tabell 2 under):
// •	navnet på hytta
// •	antall sengeplasser
// •	standard
// 6.	Bruker skal kunne velge hvor mange gjester som skal være med på turen, også skal bare hyttene med det antallet eller flere gjester komme opp.
// 7.	Bildegalleri (slideshow)
// •	Du skal endre bildet «granstua03.jpg» slik at det får samme dimensjoner som de andre bildene, uten å ødelegge proporsjonene
// •	velg enten 1. eller 2.
// 3.	Siden skal inneholde et slideshow med bilder av Granbo og Granstua.
// 4.	Når brukeren klikker på en hytte, skal et slideshow med bilder fra hytta som er valgt bli tilgjengelig. Brukeren skal da kunne bla i bildene som presenterer den valgte hytta. (Når siden starter kan bildene av Granbo vises i slideshowet).

/*
const imgGranbo = document.querySelector("#imgGranbo")
const imgGranstua = document.querySelector("#imgGranstua")
const divInfo = document.querySelector("#divInfo")
const btn_gjester = document.querySelector("#btn_gjester")
const verdi = document.querySelector("#verdi")
const divBilder = document.querySelector("#divBilder")
const alle_bilder = document.querySelector("#alle_bilder")
const resultat = document.querySelector("#resultat")

const slideshow = document.querySelector("#slideshow"); // hele slideshow er hele greia
const imgSlide = document.querySelector("#imgSlide"); // neste bilde slide
const btnNeste = document.querySelector("#btnNeste"); // knapp for neste slide


const hytter = { // array med objekter inni, Må ha dette for høy måloppnåelse
  "Granbo":{
    navn: "Granbo", // dette er array nummer 0
    sengeplasser: 6,
    standard: "middels",
    bilder: ["../vedlegg/mdg01.jpg", "../vedlegg/mdg02.jpg", "../vedlegg/mdg03.jpg"]

  },
  "Granstua":{
    navn: "Granstua", // dette er array nummer 1
    sengeplasser: 4,
    standard: "høg",
    bilder: ["../vedlegg/sp01.jpg", "../vedlegg/sp02.jpg", "../vedlegg/sp03.jpg"]

  }
};

let valgtHytte = "";
let bildeNr = 0;


imgGranbo.onclick = function() {
  hytte_valg("Granbo");
 valgtHytte = "Granbo";
 visSlideshow();
}
imgGranstua.onclick = function() {
  hytte_valg("Granstua");
  valgtHytte = "Granstua";
  visSlideshow();
}

function hytte_valg(hytteNavn) {
      divInfo.innerHTML = `Her er informasjonen du trenger:
      <div> navn: ${hytteNavn}</div>
      <div> sengeplasser:${hytter[hytteNavn].sengeplasser}</div>
      <div> standard: ${hytter[hytteNavn].standard}</div>`

}


btnNeste.onclick = nesteBilde;
/*
function visParti(partiNavn) {
  divInfo.innerHTML = `
    <div>Navn: ${partiNavn}.</div>
    <div>Representanter: ${partier[partiNavn].representanter}.</div>
    <div>Slagord: ${partier[partiNavn].slagord}.</div>
  `
}
*/
/*
btn_gjester.onclick = function() {
antall_gjester("Granbo");
antall_gjester("Granstua");
}


function antall_gjester(hytteNavn) {
  let verdi_før = Number(verdi.value);
    if (verdi_før > 4 & verdi_før <= 6) {
      resultat.innerHTML += ` <div> navn: ${hytteNavn}</div>
      <div> sengeplasser:${hytter[hytteNavn].sengeplasser}</div>
      <div> standard: ${hytter[hytteNavn].standard}</div>`
      imgGranstua.innerHTML=``;

    }
    else if (verdi_før<=3) {
          resultat.innerHTML = ` <div> navn: ${hytteNavn}</div>
          <div> </div>
          <div> standard:</div>`
          granstua.style.display = "block"
          granbo.style.display = "block"

    }
     else {
       resultat.style.display = "none"
      resultat.innerHTML += `ingen hytter med så mange sengeplasser`
}

  }
*/
  //
  //
  /*
  Granstua.style.display = "none"
   skjuler
  Granstua.style.display = "block"

granstua{
  display:none;
}
*/
//VIKTIG FOR Å FJERNE DEL  //
// style.display=none eller block for å fjerne en del
/*

function nesteBilde() {
  if(bildeNr >= hytter[valgtHytte].bilder.length - 1){
    bildeNr = 0;
  }
  else{
    bildeNr += 1; // Øker bildenummer med 1
  }
  console.log(bildeNr);
  imgSlide.src = hytter[valgtHytte].bilder[bildeNr]; // Setter imgSlide sin src til å vise riktig bilde fra arrayen bilder.
}

function visSlideshow() {
  slideshow.style.display = "block"; // Viser slideshowet på nettsiden
  bildeNr = 0;
  imgSlide.src = hytter[valgtHytte].bilder[bildeNr]; // Setter imgSlide sin src til å vise riktig bilde fra arrayen bilder.
}
*/
