/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
*/

const distanza = parseInt(prompt('Quanti chilometri vuoi percorrere?'));
const anni = parseInt(prompt('Quanti anni hai?'));
const prezzoKm = 0.21
let price = (prezzoKm * distanza)
let sconto = 0

if (anni < 18) {sconto = 20 / 100}
else if (anni > 64) {sconto = 40 / 100}

let prezzoScontato = price * (1 - sconto)  //moltiplico per l'80% restante nel caso dei minorenni e del 60% in caso di Over

price = prezzoScontato

//console.log(prezzoScontato)

const prezzoFinale = window.confirm('Il prezzo del tuo biglietto è di €'+ ' ' + price.toFixed(2))
