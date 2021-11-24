const inpHusk = document.querySelector("#inpHusk");
const btnLeggTil = document.querySelector("#btnLeggTil");



let huskeliste = [];

btnLeggTil.onclick = leggTil;



function leggTil() {
huskeliste.push(inpHusk.value);
console.log(huskeliste);
}
