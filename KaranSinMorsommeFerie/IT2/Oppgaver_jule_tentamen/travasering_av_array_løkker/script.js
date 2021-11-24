
// oppgave 2.1
/*
const liste = [3, 51, 18, 7, 32,10,74];

// Summerer alle tallene av array
// Summerer alle tallene av array
// Summerer alle tallene av array
let sum = 0;

for (tall of liste){
  sum+=tall
}
console.log("De endelige summen er " + sum);
*/

// oppgave 2.2
/* HØYESTE TALL I EN ARRAY
/* HØYESTE TALL I EN ARRAY
/* HØYESTE TALL I EN ARRAY
const liste = [3, 51, 18, 7, 32,10,74];
var maks = 0 // -Infinity;

for (tall of liste){
if (tall>maks) {
maks= tall;
}
}
console.log("Høyeste tallet er " + maks);
*/
 /*
Annen måte er med samme tall:
const highest = Math.max(...liste);

console.log(highest);

andre tall:

const highest = Math.max(12, 32, 43);

console.log(highest);
*/





/*
// oppgave 2.3
// oppgave 2.3
// oppgave 2.3

const liste = [3, 51, 18, 7, 32,10,74];

for(let tall of liste){
  if (tall % 2 === 0 ){
    console.log("Partall er: " + tall);
}
}
//const partallene = liste.filter(tall => tall % 2 === 0); Samme type bare på rad i en greie ikke liste
*/

//

//Skrive ut elementene i en array på nettsiden
const liste = [3, 51, 18, 7, 32,10,74];

//for (tall of liste){

//- Slette elementer i en array
//- Slette elementer i en array
//- Slette elementer i en array
liste.splice(4,1)

//- Legge til elementer i en array
//- Legge til elementer i en array
//- Legge til elementer i en array
liste.push(420) // legger til på slutten
liste.unshift(69)//på starten
document.write(liste)
