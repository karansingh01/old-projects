/*Oppgave 8 – Presentasjon av politiske partier

Du skal planlegge og lage en applikasjon som presenterer de ulike partiene på stortinget.

Applikasjonen skal ha en meny som består av partienes logoer i form av klikkbare bilder. På denne prøven skal du nøye deg med å presentere Senterpartiet og Miljøpartiet De Grønne (MDG). Bildene på menyen skal være mdg.png og sp.png.

Presentasjonen av partiene skal bestå av et bildegalleri som viser vedlagte bilder (mdg01.jpg, mdg02.jpg, mdg03.jpg, sp01.jpg, sp02.jpg og sp03.jpg).

Krav til applikasjonen:
1.	Brukeren skal kunne klikke på partiene (Senterpartiet og MDG)
2.	Informasjon om partiet som er valgt, skal vises på nettsiden (se tabell 1 nedenfor for info):
•	Navnet på partiet
•	Representanter på stortinget
•	Slagord
3.	Bildegalleri (slideshow)
•	Du skal endre bildet «mdg01.jpg» slik at det får samme dimensjoner som de andre bildene, uten å ødelegge proporsjonene.
•	velg enten 1. eller 2.
1.	Siden skal inneholde et slideshow med bilder knyttet til Senterpartiet og MDG.
2.	Når brukeren klikker på en et av partiene, skal et slideshow med bilder kun fra partiet som er valgt vises. Brukeren skal da kunne bla i bildene som er knyttet til det valgte partiet.

Oppgave:
a.	Lag en enkel skisse som viser brukergrensesnittet for applikasjonen (du kan selv velge om du vil levere på ark eller som bildefil på its).
b.	Lag applikasjonen.
*/
const imgSp = document.querySelector("#imgSp");
const imgMdg = document.querySelector("#imgMdg");
const divInfo = document.querySelector("#divInfo");

const partier = [
  {
    navn: "SP",
    representanter: 19,
    slagord: "Vi tror på hele Norge!"
  },
  {
    navn: "MDG",
    representanter: 1,
    slagord: "Ta vare på fremtiden!"
  }
];


imgSp.onclick = function(){
  visParti("SP");
}
imgMdg.onclick = function(){
  visParti("MDG");
}

/*
function visParti(partiNavn){
  for(let i = 0; i < partier.length; i += 1){
    if(partiNavn === partier[i].navn){
      divInfo.innerHTML = `Navn: ${partier[i].navn}. Representanter: ${partier[i].representanter}. Slagord: ${partier[i].slagord}.`
    }
  }
}
*/

function visParti(partiNavn){
  for(let parti of partier){
    if(partiNavn === parti.navn){
      divInfo.innerHTML = `Navn: ${parti.navn}. Representanter: ${parti.representanter}. Slagord: ${parti.slagord}.`
    }
  }
}
