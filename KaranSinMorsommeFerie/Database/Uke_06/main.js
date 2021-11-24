
const skjema = document.querySelector("#skjema");
const inpNavn = document.querySelector("#inpNavn");
const inpTelefon = document.querySelector("#inpTelefon");
const inpEpost = document.querySelector("#inpEpost");
const secKontakter = document.querySelector("#secKontakter");
// Variabler som refererer til Firebase- databasen
const db = firebase.database();
const kontakter = db.ref("kontakter");
// Registrere en ny kontakt

//funksjon er som i matte, function f(x){document.write(x*x); }   eller function f(){document.write(Dette er en funksjon); }
// alt som slutter med () er funksjon
function registrerKontakt(evt) {
    evt.preventDefault();  //Hindrer at skjemaet gjør til ny side etter at man trykker submit
    const key = inpTelefon.value;
    const data = {
        navn: inpNavn.value,
        epost: inpEpost.value
    };
    const kontakt = kontakter.child(key);
    kontakt.set(data);

    // Nuller ut skjemaet
    skjema.reset();
    alert("Bruker registrert")
}
// Knytter funksjonen til hendelsen at skjemaet blir sendt inn
skjema.addEventListener("submit", registrerKontakt);



// snap er et snapshot av dataene til kontakten i det øyeblikket den blir lagt til
function visKontakt(snap) {
    const telefon = snap.key; // Primær-nøkkelen
    const kontakt = snap.val(); // Dataene til kontakten
    secKontakter.innerHTML = `
        <div>${kontakt.navn}</div>
        <div>${telefon}</div>
        <div>${kontakt.epost}</div>
    `;
}
// Knytter funksjonen til hendelsen at skjemaet blir sendt inn
skjema.addEventListener("submit", registrerKontakt);
// Starter funksjonen når det blir lagt til en kontakt
kontakter.on("child_added", visKontakt);
