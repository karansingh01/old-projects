/*
Lag en kalkulator som regner om temperatur fra fahrenheit til celsius.
 Brukeren skal skrive inn en temperatur i fahrenheit, også skal han få en melding om hva temperaturen er regnet om til celsius.
𝑐𝑒𝑙𝑠𝑖𝑢𝑠 = 𝑓𝑎h𝑟𝑒𝑛h𝑒𝑖𝑡 − 32 1.8*/

let fahrenheit = Number(prompt("Skriv inn temperatur i Fahrenheit"))
let celsius = (fahrenheit - 32) / 1.8;
alert("Din temperatur i celsius er " + celsius)
