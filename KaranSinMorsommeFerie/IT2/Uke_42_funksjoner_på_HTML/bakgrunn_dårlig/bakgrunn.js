const  inpFarge = document.querySelector ("#inpFarge");



function input_felt(){
  // funksjon som endrer bakgrunnsfargen til hele nettsiden til verdien i inputt feltet
document.body.style.transition = "0.9s";
document.body.style.backgroundColor = inpFarge.value;
}

inpFarge.oninput = input_felt // knyter funksjonne byttBakgrunn til hendelsen oninput på input-feltet 
