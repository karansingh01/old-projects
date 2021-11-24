// oppgave 5 side 210

const inpNavn = document.querySelector("#inpNavn");
const inpAntall = document.querySelector("#inpAntall");
const btnRegistrer = document.querySelector("#btnRegistrer");
const elevListe = document.querySelector("#elevListe");

let elever = []; // tom Array

btnRegistrer.onclick = leggTilElev;


function leggTilElev() {  
  elever.push({
    navn: inpNavn.value,
    antall: inpAntall.value
  });

  elever.sort(sorterElever);

elevListe.innerHTML = ""; // fjerner så de ikke gjentar seg

  for (let elev of elever) {
    elevListe.innerHTML += `<li> ${elev.navn} :  ${elev.antall}</li>`;
  }
}


function sorterElever(a, b) {
  return b.antall - a.antall;
}



/*
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
