let gjett = Number(prompt("hvilket tall tenker jeg på?"));
//let tall = Math.random(0,100);
let tall;
let riktig = false;






function setup() {
  // put setup code here
  createCanvas(400, 400);
tall = Math.floor(random(0,100.9));

  while (riktig === false) {
   if (gjett < tall) {
    gjett= Number(prompt("For lavt, prøv igjen"));
    }
  else if (gjett > 100 || gjett < 0) {
      gjett= Number(prompt("Gjett mellom 0 og 100"));
      }
    else if (gjett > tall) {
    gjett=  Number(prompt("for høyt, prøv igjen"));
    }
    else if (gjett === tall) {
    alert("Gratulerer du vant");
    riktig = true;

    }
    else {
      gjett=  Number(prompt("Skriv tall mellom 0 og 100"));
    }
  }

}

function draw() {
  // put drawing code here

}
console.log();
