function siHei(){
console.log("Hei!");

}

function Alder(){
  console.log ("18")
}


siHei();



window.onclick = siHei;
const overskrift1 = document.querySelector("#overskrift1");

overskrift1.onclick= byttTekst;


function byttTekst(){
  let navn = prompt("Skriv inn navnet ditt");
  overskrift1.innerHTML += `
<div>
Hei på deg ${navn}!
</div>
  `;
}

Alder();
window.onclick = Alder;
const seAlder = document.querySelector("#seAlder");

seAlder.onclick= byttTilAlder;


function byttTilAlder(){
  seAlder.innerHTML =  "jeg er 18 år";
}
