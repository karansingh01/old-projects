// oppgave 1)
/*
let skriv = Number(prompt("Skriv inn et tall"));

if (skriv<10) {
alert(" du valgte et tall under 10");
}
else {
  alert("Du valgte et tall over 10");
}

*/


// oppgave 4)
let ukedag = prompt("Skriv inn hvilken dag det er");
let dato = prompt("Skriv inn hvilken dato det er");
let imgFredag = document.querySelector("#imgFredag")


if (ukedag === "fredag" || ukedag === "Fredag" && dato === 13 ) {
alert("pass på, i dag er det fredag den 13");
 imgFredag.src="fredag.jpg";
}
else {
  alert("ha en fin dag");
}
