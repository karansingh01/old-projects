// Array (lister)
//Definere en Array
let minArray = ["Thor","Per","Pål",23];
// hente ut en verdi fra enminArray
console.log(minArray[1]);
// [1] = Per
//Begynner å telle fra 0

// legger til noe bakerst i Array
minArray.push("Kong Harald")
console.log(minArray);


// fjerne en verdi fra en minArray
minArray.splice(1,2);//.splice fjerner verdier fra en Array, det første tallet er startposisjonen og det andre tallet er antall som skal fjernes
console.log(minArray);



//sortere Arrays
let bokstaver = ["t", "D" , "b" , "l"];
// Sorterer bokstavene, hvis en bokstav er stor så kommer den foran.
bokstaver.sort(alfabetisk);
console.log(bokstaver);

function alfabetisk(a,b){
  a = a.toLowerCase();
  b = b.toLowerCase();
if (a>b){
  return 1;
}
else {
  return -1;
}
}



function tall (a,b){
  return a - b;
}
