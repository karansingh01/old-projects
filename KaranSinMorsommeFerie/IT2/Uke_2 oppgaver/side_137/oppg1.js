var inp = document.getElementById("inp");
var tekstUt = document.getElementById("tekstUt");
inp.oninput = function(){
    tekstUt.innerHTML=inp.value;
}
inp.onfocus = function(){
    inp.value="";
    tekstUt.innerHTML="";
}
