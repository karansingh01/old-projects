/*Lag et program som gjør en regneoperasjon på to tall. Først skal brukeren få spørsmål om hvilken
 regneoperasjon som skal utføres (+, -, *, /), deretter skal brukeren velge to tall som regneoperasjonen skal gjøres på
  og tilslutt skal brukeren få resultatet regneoperasjonen med tallene.*/
let regneoperasjon = prompt("velg mellom +, -, * og /");
let tall1 = Number(prompt("Velg det første tallet"));
let tall2 = Number(prompt("Velg tall nummer to"));

if (regneoperasjon === "+") {
  alert("Ditt tall er " + (tall1 + tall2));
} else if (regneoperasjon === "-") {
  alert("Ditt tall er " + (tall1 - tall2));
} else if (regneoperasjon === "*") {
  alert("Ditt tall er " + (tall1 * tall2));
} else if (regneoperasjon === "/") {
  alert("Ditt tall er " + (tall1 / tall2));
} else {
  alert("velg en av symbolene neste gang");
}
