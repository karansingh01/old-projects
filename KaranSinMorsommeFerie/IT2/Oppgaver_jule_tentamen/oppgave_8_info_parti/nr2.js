// Oppgave 8 – Presentasjon av politiske partier
//
// Du skal planlegge og lage en applikasjon som presenterer de ulike partiene på stortinget.
//
// Applikasjonen skal ha en meny som består av partienes logoer i form av klikkbare bilder. På denne prøven skal du nøye deg med å presentere Senterpartiet og Miljøpartiet De Grønne (MDG). Bildene på menyen skal være mdg.png og sp.png.
//
// Presentasjonen av partiene skal bestå av et bildegalleri som viser vedlagte bilder (mdg01.jpg, mdg02.jpg, mdg03.jpg, sp01.jpg, sp02.jpg og sp03.jpg).
//
// Krav til applikasjonen:
// 1.	Brukeren skal kunne klikke på partiene (Senterpartiet og MDG)
// 2.	Informasjon om partiet som er valgt, skal vises på nettsiden (se tabell 1 nedenfor for info):
// •	Navnet på partiet
// •	Representanter på stortinget
// •	Slagord
// 3.	Bildegalleri (slideshow)
// •	Du skal endre bildet «mdg01.jpg» slik at det får samme dimensjoner som de andre bildene, uten å ødelegge proporsjonene.
// •	velg enten 1. eller 2.
// 1.	Siden skal inneholde et slideshow med bilder knyttet til Senterpartiet og MDG.
// 2.	Når brukeren klikker på en et av partiene, skal et slideshow med bilder kun fra partiet som er valgt vises. Brukeren skal da kunne bla i bildene som er knyttet til det valgte partiet.
//
// Oppgave:
// a.	Lag en enkel skisse som viser brukergrensesnittet for applikasjonen (du kan selv velge om du vil levere på ark eller som bildefil på its).
// b.	Lag applikasjonen.
//
//
//
// Navn	Representanter på stortinget	Slagord
// Senterpartiet	19	Vi tror på hele Norge
// Miljøpartiet de grønne	1	Ta vare på fremtiden
// Tabell 1: Informasjon om partier.
const imgSp = document.querySelector("#imgSp");
const imgMdg = document.querySelector("#imgMdg");
const divInfo = document.querySelector("#divInfo");

const slideshow = document.querySelector("#slideshow"); // hele slideshow er hele greia
const imgSlide = document.querySelector("#imgSlide"); // neste bilde slide
const btnNeste = document.querySelector("#btnNeste"); // knapp for neste slide

const partier = {
  "SP": {
    representanter: 19,
    slagord: "Vi tror på hele Norge!",
    bilder: ["../vedlegg/sp01.jpg", "../vedlegg/sp02.jpg", "../vedlegg/sp03.jpg"]
  },
  "MDG": {
    representanter: 1,
    slagord: "Ta vare på fremtiden!",
    bilder: ["../vedlegg/mdg01.jpg", "../vedlegg/mdg02.jpg", "../vedlegg/mdg03.jpg"]
  }
};

let valgtParti = "";
let bildeNr = 0;

imgSp.onclick = function() {
  visParti("SP");
  valgtParti = "SP";
  visSlideshow();
}
imgMdg.onclick = function() {
  visParti("MDG");
  valgtParti = "MDG";
  visSlideshow();
}


btnNeste.onclick = nesteBilde;

function visParti(partiNavn) {
  divInfo.innerHTML = `
    <div>Navn: ${partiNavn}.</div>
    <div>Representanter: ${partier[partiNavn].representanter}.</div>
    <div>Slagord: ${partier[partiNavn].slagord}.</div>
  `
}

function nesteBilde() {
  if(bildeNr >= partier[valgtParti].bilder.length - 1){
    bildeNr = 0;
  }
  else{
    bildeNr += 1; // Øker bildenummer med 1
  }
  console.log(bildeNr);
  imgSlide.src = partier[valgtParti].bilder[bildeNr]; // Setter imgSlide sin src til å vise riktig bilde fra arrayen bilder.
}

function visSlideshow() {
  slideshow.style.display = "block"; // Viser slideshowet på nettsiden
  bildeNr = 0;
  imgSlide.src = partier[valgtParti].bilder[bildeNr]; // Setter imgSlide sin src til å vise riktig bilde fra arrayen bilder.
}
