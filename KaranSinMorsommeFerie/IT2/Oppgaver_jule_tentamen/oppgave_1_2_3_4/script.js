var elev = {
  navn: "Karan",
  alder : 18,
  favorittFag: "Gym"
};



// oppgave 1 b.	Bruk document.write(..) til å skrive ut navnet ditt på nettsiden fra objektet.
document.write(elev.navn)





// oppgve 1c) c.	Bytt ut favorittfaget i objektet elev til «Informasjonsteknologi».
elev.fag = "Informasjonsteknologi"



//Oppgave 2 – Datatyper

//Datatypen array brukes når vi vil lagre flere verdier i en variabel.
//Vi kan definere en variabel med datatypen array
//slik: var filmer = ["Pulp Fiction","Fight Club","Matrix","Forrest Gump"];



//a.	Definer variabelen over, filmer, i koden din, og bruk document.write(..) for å skrive ut Fight Club på nettsiden.
var filmer = ["Pulp Fiction","Fight Club","Matrix","Forrest Gump"];
document.write(filmer[1])


//b.	Bytt ut filmen Matrix med Gudfaren i arrayen filmer.
filmer.splice(2,1,"Gudfaren")
console.log(filmer);



// Oppgave 3 – Funksjoner

//Hva skal stå mellom parentesene i funksjonen under?
//n



//Oppgave 4 –Løkker
function yatzyFast(n){


//Hva skal stå i sjekken til while-løkken under for at løkken skal kjøre så lenge tilfeldigTall ikke er lik 3?
while (tilfeldigTall<2.999 & tilfeldigTall>3.001) {

}
//Hva skal stå inne i for-løkken under for at de 50 første tallene i 3-gangen skal skrives ut på nettsiden?
for(var i=0; i<50; i+=1)
console.log(i*3);
}
