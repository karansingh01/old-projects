/*

Lag et program som genererer et tilfeldig tall mellom 0 og 20, og lar brukeren gjette tallet.
• Hvis brukerens gjett er riktig skal det komme opp en melding som gratulerer brukeren og forteller hvor mange forsøk brukeren brukte.
• Er brukerens gjett for lavt skal brukeren få beskjed om at gjettet var for lavt og få muligheten til å gjette på nytt.
• Er gjettet for høyt skal brukeren få beskjed om at det er for høyt.
• Brukeren skal få nye forsøk helt til den har gjettet riktig.
Tips:
• Tilfeldig tall mellom 1 og 20 i JavaScript: Math.floor(Math.random()*20)
*/


let riktig = false;
let forsøk = 1
let tall = Math.floor(Math.random() * 20);
gjett = Number(prompt("gjett et hvilket som helst tall mellom 1 og 20"))
while (riktig === false) {
  if (gjett < tall) {
    gjett = Number(prompt("Talle var for lavt, gjett igjen mellom 1 og 20"));
    forsøk = forsøk + 1;
  } else if (gjett > tall) {
    gjett = Number(prompt("Tallet var for høyt, gjett igjen mellom 1 og 20"));
    forsøk = forsøk + 1;
  } else if (gjett === tall) {
    alert("Gratulerer du vant på forsøk nr: " + forsøk);
    riktig = true;
  } else {
    gjett = Number(prompt("Skriv tall mellom 1 og 20"));
  }
}
