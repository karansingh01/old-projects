// oppg 2 side 83
const paragraph= document.querySelector("#paragraph");
const btn= document.querySelector("#btn");
const meny = document.querySelector("#meny");
/*

var tall = Math.round(Math.random())*6+1;

if(tall < 7){
    document.write(tall+" er mindre enn 7<br>");
    if(tall < 3){
        document.write(tall+" er også mindre enn 3");
    }
}
else{
    document.write(tall+" er større enn 6");
}
*/
// oppg eks while løkke eksempel side 90
/*

const paragraph = document.querySelector("#paragraph");
let paragraphArray = [200,332,311,450];
let sum=0;
// tellervairabel økes med en gang hver gang det gjentas
for(let i=0; i<paragraphArray.length;i+=1){
sum = sum+paragraphArray[i];
}
paragraph.innerHTML= `summen av varer er ${sum} kr`;
*/


/*
let sum= 0
for (let i= 0; i<=10; i+=1){

console.log(i*10);
}
*/
/*
function navn() {
  let navn = "KARAN"

paragraph.innerHTML += `DITT NAVN ER ${navn}`
}
navn();
navn();
navn();
*/

//
/*
    btn.onclick = function endreFargeOgStorrelse(){
  paragraph.style.backgroundColor="PeachPuff";
            paragraph.style.fontSize="50px";
        }
*/
/*function lag_meny(forret, hovedrett, dessert) {
  meny.innerHTML+= `<h3>Forslag:</h3>`
  meny.innerHTML+= `<p>Forret ${forret}</p>`
  meny.innerHTML+=`<p> hovedrett: ${hovedrett}</p> `
  meny.innerHTML+=`<p> dessert: ${dessert}</p> `
}
lag_meny("pizza","ost","salat");
lag_meny("jaati","saag","phindi");
lag_meny("butterchicken","naan","mango lassi");*/

/*
function lekser(sider){
meny.innerHTML += `<div>leksen er side nr: ${sider}</div>`
}

lekser(233);
lekser(2);
lekser(732);*/

// Finn areal
/*
function areal(w,h){
  let areal = w*h;
  meny.innerHTML+= `arealet er ${areal}`
}
areal(2,5)
areal(23,325)
areal(232,543)
*/
/*
function lagDiv(tekst,bredde,bakgrunnsfarge,tekstfarge){
       document.body.innerHTML+="<div style='color:"+tekstfarge+"; background-color:"+bakgrunnsfarge+"; width:"+bredde+"px;'>"+tekst+"</div>";
   }
   lagDiv("Liten tekst",100,"Blue","PeachPuff");
   lagDiv("Liten tekst",600,"red","salmon");
*/
/*
var total_pris_med_moms=0;

function moms(pris_før){
  meny.innerHTML+= `prisen med moms er: ${pris_før*1.25}`
  total_pris_med_moms+=moms
}
moms(200);
moms(100);
*/
var saldo = 7000;
function penger(ta_ut) {
  var til_slutt = 7000 - ta_ut;
  paragraph.innerHTML += `Du har tatt ut ${ta_ut} kroner og har ${til_slutt} kroner igjen `
}

penger(500);
