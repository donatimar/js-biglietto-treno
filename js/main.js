// # TRACCIA

/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

// # PROCEDURA

// ! RACCOLTA DATI

// Chiedo all'utente il numero di chilometri che vuole percorrere
let km = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
console.log(`Chilometri inseriti: ${km}`);

// Chiedo all'utente l'età del passeggero
let age = parseInt(prompt("Qual è l'età del passeggero?"));
console.log(`Età inserita: ${age}`);

// ! ELABORAZIONE DATI

// Definisco il prezzo base per chilometro, espresso in €
const pricePerKm = 0.21;

// Calcolo il prezzo totale senza sconto
let totalPrice = km * pricePerKm;
console.log(`Prezzo totale non scontato: €${totalPrice}`);

// Controllo l'età del passeggero per applicare eventuali sconti
if (age < 18) {
  // Applico uno sconto del 20% per i minorenni
  totalPrice *= 0.8;
  console.log(`Prezzo con sconto del 20% per under 18: €${totalPrice}`);
} else if (age > 65) {
  // Applico uno sconto del 40% per gli over 65
  totalPrice *= 0.6;
  console.log(`Prezzo con sconto del 40% per over 65: €${totalPrice}`);
} else {
  // Prezzo senza sconti applicati
  console.log("Nessuno sconto applicato");
}

// ! OUTPUT

// Arrotondo il prezzo a due decimali e lo stampo
totalPrice = totalPrice.toFixed(2);
console.log(`Prezzo finale arrotondato: €${totalPrice}`);
