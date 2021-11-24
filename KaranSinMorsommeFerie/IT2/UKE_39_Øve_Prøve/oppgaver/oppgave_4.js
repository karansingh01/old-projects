/*
Oppgave 4 - Spørreprogram

Du skal lage et spørreprogram som stiller spørsmål du velger selv.

Lag et spørreprogram som har et spørsmål, bruk alert til å gi brukeren beskjed om svaret var riktig eller galt.
Lag minst fire spørsmål og opprett en variabel som holder kontroll på hvor mange riktige brukeren har. Når brukeren har svart på alle spørsmålene skal det dukke opp en beskjed med hvor mange poeng brukeren fikk sammen med en kommentar på hvor bra det gikk.
*/

/*
  let spørsmål = prompt("Hva er hovedstaden i England?");

  if (spørsmål === "London") {
alert("Riktig!!!!")
  }
else {
  alert("Du har desverre feil.");
}
*/

let poeng = 0;
let spørsmål = prompt("Hva er 9+10");

if (spørsmål == 21) {
alert("Riktig!!!!")
poeng = poeng +1;
}
else {
alert("Du har desverre feil.");
}

let spørsmål2 = prompt("Hva er hovedstaden i Sveits?");
if (spørsmål2 === "Bern") {
alert("Riktig!!!!")
poeng = poeng +1;
}
else {
alert("Du har desverre feil.");
}


let spørsmål3 = prompt("Hva er hovedstaden i Cannada");
if (spørsmål3 === "Ottawa" || spørsmål3 === "ottawa" ) {
alert("Riktig!!!!")
poeng = poeng +1;
}
else {
alert("Du har desverre feil.");
}


let spørsmål4 = prompt("Hva er hovedstaden i Syria?");
if (spørsmål4 === "Damaskus") {
alert("Riktig!!!!")
poeng = poeng +1;
}
else {
alert("Du har desverre feil.");
}

alert("Du har fått: " + poeng + ("poeng"));
