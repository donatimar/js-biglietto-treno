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
console.log(km);

// Chiedo all'utente l'età del passeggero
let age = parseInt(prompt("Qual è l'età del passeggero?"));
console.log(age);

// ! ELABORAZIONE DATI

// Definisco il prezzo base per chilometro, espresso in €
const pricePerKm = 0.21;

// Calcolo il prezzo totale senza sconto
let totalPrice = km * pricePerKm;
console.log(totalPrice);

// Controllo l'età del passeggero per applicare eventuali sconti

// ! OUTPUT

// Arrotondo il prezzo a due decimali

// Stampo il prezzo finale del biglietto
