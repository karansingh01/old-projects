const arm = document.querySelector("#arm");
const rygg = document.querySelector("#rygg");
const armlyd = document.querySelector("#arm_lyd");
const rygglyd = document.querySelector("#rygg_lyd");
const gruppe = document.querySelector("#gruppe");


arm.onclick = function() {
console.log("arm");
armlyd.play()
gruppe.innerHTML = "Armstrekkeren";
gruppe.animate([{left:"0%"},{left:"150%"}], {duration:"5000s"}) 
}
rygg.onclick = function() {
console.log("rygg");
rygglyd.play()
gruppe.innerHTML = "Brede ryggmuskelen";

}
