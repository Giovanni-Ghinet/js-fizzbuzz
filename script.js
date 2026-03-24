// Per ogni numero da 1 a 100
//   se il numero è divisibile per 3 e per 5:
//     stampa "FizzBuzz"
//   altrimenti, se è divisibile solo per 3:
//     stampa "Fizz"
//   altrimenti, se è divisibile solo per 5:
//     stampa "Buzz"
//   altrimenti:
//     stampa il numero

// in questo modo il codice js è stato diviso tramite if per rendere molto più chiaro i passaggi

for (let i = 1; i <=100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


// facendo questa versione possiamo calcolare direttamente se è divisibile per 3 
// o per 5 così da stampare una stringa solo qunado è divisibile e se sono vere entrambe le stampa insieme

/* for (let i = 1; i <= 100; i++) {
  console.log((i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i);
} */