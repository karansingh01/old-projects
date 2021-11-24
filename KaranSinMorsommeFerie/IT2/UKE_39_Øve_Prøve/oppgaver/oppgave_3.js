/*
Oppgave 3 - Arealkalkulator

Rektangel: Lag et program der brukeren kan skrive inn bredde og høyde, så skal programme gange sammen sidene og gi en melding om arealet av rektangelet.
Areal og sirkel: Legg til funksjonalitet slik at brukeren først kan skrive inn om figuren er et rektangel eller en sirkel, deretter bredde, høyde eller radius og til slutt skal brukeren få en beskjed med arealet av figuren sin.
Tips:
1.

  if(figur === "firkant"){
    // Gjør noe

  }
  else if(figur === "sirkel"){
    // Gjør noe

  }
*/

/*
let bredde = prompt("skriv inn bredde til rektangelet"); glwmete number
let høyde = prompt("Skriv inn høyde til rektangelet"); glemt e numbr

alert("Arealet av rektangelet er " + (bredde*høyde));

*/

// oppgave 3.2
let form = prompt("Skriv rektangel for Areal av rektangel eller skriv sirkel for areal av sirkel")

if (form === "rektangel") {
  let bredde = Number(prompt("skriv inn bredden"));
  let høyde = Number(prompt("Skriv inn høyden"));
  alert("Arealet av rektangelet er " + (bredde*høyde));
}
else if (form==="sirkel") {
  let radius = Number(prompt("skriv radius"));
alert("Arealet av sirkelen er " + (Math.PI * radius*radius));
}
else {
  prompt("rektangel eller sirkel, siste sjanse");
}
