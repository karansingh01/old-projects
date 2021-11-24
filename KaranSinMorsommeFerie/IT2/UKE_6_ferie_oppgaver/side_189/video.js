const film = document.querySelector("#video");
const play = document.querySelector("#play");
const pause = document.querySelector("#pause");
const halv = document.querySelector("#halv");
const range = document.querySelector("#range");


play.onclick = function() {
  film.play();
}
pause.onclick = function() {
  film.pause();
}


mal1.onclick = function() {
film.currentTime = 0
}
mal2.onclick = function() {
film.currentTime = 5
}
mal3.onclick = function() {
film.currentTime =  11
}

halv.onclick = function() {
film.playbackRate= 0.5
}
