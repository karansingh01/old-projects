const inpHusk = document.querySelector("#inpHusk");
const btnLeggTil = document.querySelector("#btnLeggTil");
const info = document.querySelector("#info");
const btnSlett = document.querySelector("#slett");
const slett1 = document.querySelector("#slett1");
const inpDato = document.querySelector("#inpDato");


let huskeliste = [];

btnLeggTil.onclick = leggTil;


function leggTil() {
huskeliste.push(inpHusk.value);
//info.innerHTML = huskeliste;
console.log(huskeliste);
for(let i=0; i<huskeliste.length; i+=1){
  info.innerHTML += `
<ul onclick= "fjernVare(${i})">
<input type="checkbox" name="" value="">
${inpHusk.value} skal gjøres innen: ${inpDato.value}
<button type="button" id="slett1" onclick name="button">slett</button> </ul>`;
  }
}

btnSlett.onclick = function () {
info.innerHTML = [];
huskeliste = [];
}
function fjernVare(i) {
huskeliste.splice(i,1);
console.log(huskeliste);
}
  /*
  for (let i = 0; i < huskeliste.length; i++) {
    for(let j = 1; j < huskeliste.length; j++ ){
      huskeliste.splice(i,j);
    }
  }
}
*/
