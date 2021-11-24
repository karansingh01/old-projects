const lyder = document.querySelectorAll("audio")
const trommer = document.querySelectorAll(".tromme")
const bokstaver = ["s", "d", "f", "g", "h", "j","k", "l", "a" ]


window.onkeydown = function(event) {
  for (let i = 0; i < bokstaver.length; i ++) {
    if (event.key === bokstaver[i]) {
      lyder[i].currentTime = 0; // resetter hver gang vi trykker på knapp
      lyder[i].play();
      trommer[i].classList.add("aktiv");
    }
  }
}
window.onkeyup = function() {
  for(let tromm of trommer){
    tromm.classList.remove["akiv"];
  }
}
