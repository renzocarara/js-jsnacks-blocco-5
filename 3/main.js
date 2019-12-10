//JSnack 3
// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine
// -----------------------------------------------------------------------------
$(document).ready(function() {

    var maxPezzi = 10; // massimo numero di zucchine
    var pezzoPiccolo = 15; // lunghezza in cm oltre la quale la zucchina è considerata grande
    var cassetta = []; // array che contiene tutti gli oggetti zucchina
    var pezziPiccoli = [], // array che contengono le zucchine separate per lunghezza
        pezziGrandi = [];

    // creo dinamicamente un array con 10 oggetti (con valori random)
    creaCassetta();
    console.log("cassetta", cassetta);

    // creo 2 array separati di oggetti zucchina, in base alla loro lunghezza
    dividiCassetta();
    console.log("pezziPiccoli:", pezziPiccoli);
    console.log("pezziGrandi:", pezziGrandi);

    // chiamo una funzione che mi calcola il peso totale di tutte le zucchine nell'array che gli passo
    var pesoPezziPiccoli = pesoTotale(pezziPiccoli);
    var pesoPezziGrandi = pesoTotale(pezziGrandi);

    // visualizzo peso totale calcolato
    console.log("Peso zucchine piccole:", pesoPezziPiccoli, "gr.");
    console.log("Peso zucchine grandi:", pesoPezziGrandi, "gr.");

    // ---------------------------- FUNCTIONs --------------------------------------
    function creaCassetta() {
        // valorizza un array di oggetti "zucchina", con valori casuali

        for (var i = 0; i < maxPezzi; i++) {

            var varieta = "z-" + numeroRandom(10, 99); // codice varietà
            var lunghezza = numeroRandom(5, 30); // lunghezza in centimetri
            var peso = numeroRandom(100, 1500); // peso in grammi

            // valorizzo il mio oggetto zucchina con i valori random appena generati
            var zucchina = {
                'tipo': varieta,
                'lunghezza': lunghezza,
                'peso': peso
            };

            // metto l'oggetto zucchina nell'array
            cassetta[i] = zucchina;
        }
    }

    function dividiCassetta() {
        // lavora sull'array "cassetta" e valorizza gli array "pezziPiccoli" e "pezziGrandi"
        for (var i = 0; i < cassetta.length; i++) {

            if (cassetta[i].lunghezza <= pezzoPiccolo) {
                // array per zucchine con lunghezza minore o uguale a "pezzoPiccolo" cm
                pezziPiccoli.push(cassetta[i]);
            } else {
                // array per zucchine con lunghezza superiore a "pezzoPiccolo" cm
                pezziGrandi.push(cassetta[i]);
            }
        }
    }

    function pesoTotale(cassettina) {
        var pesoTotale = 0;
        for (var i = 0; i < cassettina.length; i++) {
            pesoTotale += cassettina[i].peso;
        }
        return pesoTotale;
    }

    function numeroRandom(min, max) {
        // genera un numero casuale intero tra min e max
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});