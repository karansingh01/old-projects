/*
Oppgave 1
a)	Deklarer fire desimaltall, d1, d2, d3 og d4. Sett verdien til tallene slik:
1.	d1 = 50.5
2.	d2 = 70
3.	d3 = 23
4.	d4 = 90
b)	Deklarer et array av tallene i oppgave a). Legg de fire tallene inn i arrayet. Hvordan kan du med kode finne ut hvor mange tall det er i arrayet?
c)	Bruk en for-løkke til å summere alle tallene i arrayet. Vis summen på skjermen.
d)	Bruk en for-løkke til å skrive ut alle tallene i arrayet. Legg til et mellomrom mellom hvert tall.
e)	Bytt ut verdien 23 i arrayet med 93.


*/
// oppg 1a:



let d1 = 50.5
let d2 = 70
let d3 = 23
let d4 = 90


//oppg b)
const alleTall = [d1, d2, d3, d4];
console.log("det er:" + alleTall.length + " tall i arrayen");


//oppg c)

let sum = 0;

for (tall of alleTall){
  sum+=tall
}
console.log("De endelige summen er " + sum);


//oppg d)

for(let i=0; i<alleTall.length; i+=1)
{
document.write( " " + alleTall[i] " "  );
}
