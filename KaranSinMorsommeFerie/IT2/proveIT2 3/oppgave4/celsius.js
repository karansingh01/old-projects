/*
Lag en kalkulator som regner om temperatur fra fahrenheit til celsius.
 Brukeren skal skrive inn en temperatur i fahrenheit, ogsaÌ skal han faÌ en melding om hva temperaturen er regnet om til celsius.
ðððð ðð¢ð  = ððhðððhððð¡ â 32 1.8*/

let fahrenheit = Number(prompt("Skriv inn temperatur i Fahrenheit"))
let celsius = (fahrenheit - 32) / 1.8;
alert("Din temperatur i celsius er " + celsius)
