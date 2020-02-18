// Scopo: calcolare prezzo finale del bigleitto

// STEP 1 ==> Acquisizione dati riguardanti i km che si intende percorrere e l'età del passeggero e creazione delle varie variabili
// STEP 2 ==> Calcolo prezzo senza prendere in considerazione lo sconto (considerando 0.21 euro al km)
// STEP 3 ==> Calcolo sconto in base all'età inserita dall'utente (20% per i minorenni e 40% per gli over 65)


// STEP 1
var kmDaPercorrere;
var etaUtente;
const costoAlKm = 0.21;
const scontoMinorenni = 20;
const scontoAnziani = 40;
var prezzoSenzaSconto;
var prezzoScontato;
// console.log(kmDaPercorrere, etaUtente, costoAlKm, scontoMinorenni, scontoAnziani, prezzoSenzaSconto);

kmDaPercorrere = prompt("Inserisci i km che intendi percorrere!");
etaUtente = prompt("Inserisci la tua età!");
console.log("Devi percorrere " + kmDaPercorrere + " km", "ed hai " + etaUtente + " anni");

// STEP 2
prezzoSenzaSconto = kmDaPercorrere * costoAlKm;
console.log("Il prezzo base senza sconto ammonta a: " + prezzoSenzaSconto + " euro");

// STEP 3
if (etaUtente > 65) { //Se siamo nell'over 65
  prezzoScontato = prezzoSenzaSconto - ((prezzoSenzaSconto * scontoAnziani) / 100);
  console.log("Il prezzo che devi pagare è: " + prezzoScontato + " euro");
} else if (etaUtente < 18) { //Se siamo sotto i18 anni di età
  prezzoScontato = prezzoSenzaSconto - ((prezzoSenzaSconto * scontoMinorenni) / 100);
  console.log("Il prezzo che devi pagare è: " + prezzoScontato + " euro");
} else { //Quelli compresi tra 18 e 65 ani di età
  console.log("Il prezzo che devi pagare è: " + prezzoSenzaSconto + " euro");
}
