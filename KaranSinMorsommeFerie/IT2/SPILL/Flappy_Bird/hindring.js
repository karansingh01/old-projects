class Hindring {
    constructor() {
        this.width = 130; // Bredde
        this.gap = random(70, 300) // hvor stort mellom rommet mellom pipene skal være
        this.height = (height / 2) - this.gap; // det er lengden til pipene ved å ta høyden og minus mellom rommet det skal være til midten av skjermen
        this.x = width / 1; // det er posisjonen i bredde til pipene
        this.y = height / 2; // dette er posisjonen i høyde til pipene
    //  this.farge = `rgb(${Math.floor(Math.random()*255)} ,${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`; // trengs ikke men viser kompetanse
        this.img = loadImage('bilder/pipe4.png');
        this.img_ned = loadImage('bilder/pipe3.png');
    }

    show() { // funksjon som viser hindringene
        fill(0); // fargen innvendig, men bruker bilder så de ses ikke.
        image(this.img, this.x, this.y+this.gap, this.width, this.height);
        fill(0); // fargen innvendig, men bruker bilder så de ses ikke.
        image(this.img_ned, this.x, 0, this.width, this.height);
    }
    update(speed) { // Denne brukes for å få pipene til å bevege seg mot venstre
        this.x -= speed; // posisjonen tas minus speed som gjør at den beveger seg mot fuglen.
    }
}
