var divPoeng = document.querySelector("#divPoeng") // lager en variabel som er koblet til divPoeng id i html dokumentet mitt som her kan skriver som kunn divPoeng
var hindringer = []; // en indeksert variabel for hindringer som er tom som fylles
var speed = 10 // hastighet som brukes for å velge hvor kjapt hindringene beveger seg
var poeng = -1 // starter poeng variabelen på -1 siden jeg har satt at man får poeng når man kommer halveis bort til neste så må starte på -1 får at det skal gå opp.
var flyLyd;
var bakgrunnLyd;
var tapLyd;



function preload() {
  //bakgrunnLyd = loadSound("Lyder/MP3/Music/Music-01.mp3");
  //flyLyd = loadSound("Lyder/MP3/Input/Input-06.mp3");
  //tapLyd = loadSound("Lyder/MP3/Voice/Male/Voice-Cartoon_Laugh-01.mp3");
}


function setup() { // ting som skal skje kun en gang
  createCanvas(window.innerWidth, window.innerHeight - 80) // lengden på spille i bredde og høyde
  fly = new Fly();// lager en ny fly
  start = new Start();
  //bakgrunnLyd.play();
  /*  var button = createButton("reset");
    button.mousePressed(resetSketch)*/
}
/* Skull evære en reset knapp men funket ikke
function resetSketch() {
  textSize(21);
  fly = new Fly();
  start = new Start();
  //bakgrunnLyd.play();
}*/

function draw() {
  background(0, 200, 255) // bakgrunns farge


  if (frameCount % 80 == 0) { // her sier vi at hver 80 frame så skal vi lage en hindring(pipe)
    hindringer.push(new Hindring());
    poeng = poeng + 1; // plusser på et poeng hver gang man kommer forbi en hindring
    divPoeng.innerHTML = ` Poeng: ${poeng} `; // skriver ut poengene inn i HTML filen under divPoeng
  }
  for (var hindring of hindringer) { // bruker for løkke
    hindring.show(); // viser hindringene i draw og altså ut på skjermen
    hindring.update(speed); // oppdaterer farten til hindringene

    if (fly.rører(hindring)) {
      start.tap(); // hvis fuglen rører en pipe så skal denne funksjonen kjøres
    }
  } // her slutter for løkken
  fly.show(); // fly.show som viser fuglen kjøre i draw
  fly.update(); // fly.update kjøres i draw
  speed += 0.03; // Farten hindringene beveger seg med skal øke med 0.03
}

function keyPressed() { // bygd inn funksjon som hvis SPace knappen blir trykket så skal fly.fly(); skje, hvis enter blir trykker skal location.reload skje
  if (key == ' ') { // hvis jeg trykker SPACE
    fly.fly(); // da skal funkksjon fly.fly skje som er at fuglen skal gå opp
    //flyLyd.play();
  }
  if ((keyIsDown(DOWN_ARROW))) { // Hvir man trykker ned pilen så vil man fly nedover
    fly.ned(); // denne funksjnonen skal kjøre om man trykker pil ned
    //flyLyd.play();
  } else if (event.key === "Enter") { // hva som skal skje hvir man trykker Enter
    window.location.reload(true); // da skal nettsiden refreshe

  }
}
