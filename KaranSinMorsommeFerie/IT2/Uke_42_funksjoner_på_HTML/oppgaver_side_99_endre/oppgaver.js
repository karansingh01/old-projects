/*


function siHei(){
}


siHei();



window.onclick = siHei;
const overskrift1 = document.querySelector("#overskrift1");

overskrift1.onclick= byttTekst;


function byttTekst(){
  let navn = prompt("Skriv inn navnet ditt");
  overskrift1.innerHTML += `
<div>
Hei på deg ${navn}! ${navn}! ${navn}!
</div>
  `;
}



const navn_3 = document.querySelector("#navn_3");
let mitt_navn = Karan;
navn_3.innerHTML += `
<div>
Hei på deg ${mitt_navn}! ${mitt_navn}! ${mitt_navn}!
</div>
`;
*/


// oppgave 2)
const farge = document.querySelector("#farge");
farge.onclick = byttFarge
function byttFarge(){
farge.style.backgroundColor = "blue"
farge.style.color = "Red"
farge.style.fontSize = "28px";
};


// oppgave 4 )
// Man burde bruke funksjoner hvis man skal gjøre samme hendelse flere ganger
