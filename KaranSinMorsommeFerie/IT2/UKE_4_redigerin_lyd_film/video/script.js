const mal1 = document.querySelector("#mal1");
const mal2 = document.querySelector("#mal2");
const mal3 = document.querySelector("#mal3");
const film = document.querySelector("video");
const btnTale = document.querySelector("#btnTale");
const tale = document.querySelector("audio");

mal1.onclick = function(){
  film.currentTime = 0;
}
mal2.onclick = function(){
  film.currentTime = 4;
}
mal3.onclick = function(){
  film.currentTime = 11;
}

film.ontimeupdate = function(){
  if(film.currentTime < 4){
    mal1.classList.add("mal");
    mal2.classList.remove("mal");
    mal3.classList.remove("mal");
  }
  else if(film.currentTime < 11){
    mal1.classList.remove("mal");
    mal2.classList.add("mal");
    mal3.classList.remove("mal");
  }
  else{
    mal1.classList.remove("mal");
    mal2.classList.remove("mal");
    mal3.classList.add("mal");
  }
}

btnTale.onclick = function(){
  if(tale.paused){
    tale.play();
  }
  else{
    tale.pause();
  }
}
