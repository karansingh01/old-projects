const btn = document.querySelector("#btn")
const imgPlakat = document.querySelector("#imgPlakat")


var plakater = ["array1.jpeg", "array2.jpg", "array3.jpeg" , "array4.jpeg"]
var i = 0
imgPlakat.src = plakater[0];
btn.onclick = slide;


function slide() {
i +=1;
if (i===plakater.length) {
i=0
}
imgPlakat.src = plakater[i];
}
