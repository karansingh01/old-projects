// Lekse
 //oppgave 1
 /*ARRAY MED OBJEKTER FOR ELEV AV ELEVER
// for løkke som henter hvert element og legger den i en variabel
const handleliste = document.querySelector("#handleliste")
let matvarer = ["ost", "brød", "Paprika", "kaviar"]

//sortere:
matvarer.sort(sorterAtilAA);

function sorterAtilAA(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  if (a > b) {
    return 1;
  }
  else {
    return -1;
  }
}
/*
matvarer.sort(sorterAAtilA);

function sorterAAtilA(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();

  if (a < b) {
    return 1;
  }
  else {
    return -1;
  }
}


for (let vare of matvarer) {
  handleliste.innerHTML += `<li>${vare}</li>`;
}

*/

/*
// oppgave  1b)
// For løkker med tall teller
const handleliste = document.querySelector("#handleliste")
let matvarer = ["ost" , "brød" , "paprika" , "kaviar"]

for (let i = 0; i < matvarer.length; i+=1) {
handleliste.innerHTML+= `<li> ${matvarer[i]} </li>`;

}

/*
var vare = varer[i]
document.write(l);
for(let k in mstvarer) {
  console.log(k)
}
*/

/*

// oppgave 2a og 2b  )

var handleliste = document.getElementById("handleliste")
var varer = ["Harry Potter" , "Percy Jackson" , "To kil a mockingbird" , "Harry Hole" , "Dukkehjem"]

for (var vare of varer) {
handleliste.innerHTML += "<li>" + vare; "</li>"
varer.sort()
}

var listBok = document.getElementById("listBok");
var bokliste = ["Kode 1", "Sinus 1T", "Moment","Kode 2", "Psykologi 2"];
bokliste.sort(sammenlignTekst);
for(var bok of bokliste) {
    listBok.innerHTML += "<li>" + bok + "</li>";
}
function sammenlignTekst(a, b) {
    a = a.toUpperCase();
    b = b.toUpperCase();
    return b < a;
}

*/
/*
//oppgave 3

let temp = [3, 4, 5, 10, 5, 5, 6, 4, 4, 5];
let antallUnderFem = 0;
let total = 0;

for (let dagTemp of temp) {
  total += dagTemp;

  if (dagTemp < 5) {
    antallUnderFem+=1;
  }
}

temp.sort(sorterTallLavTilHoy);
function sorterTallLavTilHoy(a , b) {
return a - b;
}


console.log(temp);

console.log("Temperaturen er under fem:" + antallUnderFem );

console.log("gjennomsnittstemp var:" + (total/temp.length));

*/
//oppgave 4 side 210

let personer = [{
    navn: "Jugad",
    alder: 21
  },
  {
    navn: "Åste",
    alder: 280
  },
  {
    navn: "Mohit",
    alder: 16
  },
  {
   navn: "Elias",
    alder: 128
  }
];
//personer[0].navn); // Henter ut navn på det første objekter på arRAYEN
const app = document.querySelector("#app");

personer.sort(sorterAlder);
function sorterAlder(a, b) {
  return a.alder - b.alder;
}

for (var person of personer) {
  app.innerHTML=(`<div>${person.navn} er ${person.alder} år gammel</div>`);
}
/*
personer.reverse();
for (var person of personer) {
  app.innerHTML=(`<div<${person.navn} er ${person.alder} år gammel</div>`);
}


 personer.sort(function(a, b)
 { return a.alder - b.alder; });
 for(var person of personer){
     (person.navn+" er "+person.alder+" år gammel.<br>");
 }*/

/*GIR IKKE MENING
  // oppgave 5

    input type = "text"
    id = "inpNavn" >
    <
    input type = "number"
    id = "inpAntall" >
    <
    button id = "btn" > Sett inn < /button> <
    ol id = "listPerson" > < /ol> <
    p id = "txtUt" > < /p> <
    script >
    var inpNavn = document.getElementById("inpNavn");
    var inpAntall = document.getElementById("inpAntall");
    var btn = document.getElementById("btn");
    var txtUt = document.getElementById("txtUt");
    var sum = 0;
    var arrPerson = []; btn.onclick = function() {
      listPerson.innerHTML = "";
      sum = 0;
      arrPerson.push({
        navn: inpNavn.value,
        antall: inpAntall.value
      });
      arrPerson.sort(function(a, b) {
        return b.antall - a.antall;
      });
      for (var person of arrPerson) {
        listPerson.innerHTML += "<li>" + person.navn + " har sett " + person.antall + " filmer</li>";
        sum += Number(person.antall);
      }
      txtUt.innerHTML = "Totalt " + sum + " filmer";
    }
    */
