// Oppgave 5 – Fahrenheit til Celsius-kalkulator
//
// Du skal lage en applikasjon som konverterer temperatur fra fahrenheit til celsius.
//
// Omregning: celsius = (fahrenheit - 32) * (5/9)
//
// Applikasjonen skal ha (krav):
// •	et input-felt for innskriving av temperatur i fahrenheit
// •	en knapp som utfører beregningen
// •	bildet termometer.png skal være med på applikasjonen
/*
const input_felt = document.querySelector("#input_felt")
const button_knapp = document.querySelector("#button_knapp")
const divTemp = document.querySelector("#divTemp")
const bilde = document.querySelector("#button_knapp");

button_knapp.onclick = omgjoring;


function omgjoring() {
let fahrenheit = input_felt.value;
let celsius = Number(fahrenheit - 32)*(5/9);
divTemp.innerHTML = `temperatur: ${celsius} grader.`
// En annen løsning er:
}


//divTemp.innerHTML = "Temp:" + celsius + "grader."

*/



const input_felt = document.querySelector("#input_felt")
const button_knapp = document.querySelector("#button_knapp")
const divTemp = document.querySelector("#divTemp")
const bilde = document.querySelector("#bilde");

button_knapp.onclick = kalkulator;

function kalkulator() {
let fahrenheit = input_felt.value;
let celsius = Number(fahrenheit - 32)*(5/9);
divTemp.innerHTML= `${fahrenheit} fahrenheit er det samme som ${celsius} celsius`
}
