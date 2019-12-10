//JSnack 5
// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”
// -----------------------------------------------------------------------------
$(document).ready(function() {

    var minLen = 2, // range in cui cade la lunghezza casuale dell'array
        maxLen = 10; // l'array avrà comunque e sempre minimo 2 elementi
    var minNum = 1, // range dei numeri casuali contenuti all'interno dell'array
        maxNum = 99;
    var arrayLength = numeroRandom(minLen, maxLen); // lunghezza dell'array che andrò a creare
    var originale = []; // array

    // inserisco "arrayLength" numeri casuali nell'array "originale"
    while (originale.length < arrayLength) {
        originale.push(numeroRandom(minNum, maxNum));
    }
    console.log(originale);

    // genero casualmente i due numeri 'a' e 'b'
    // 'b' deve essere al massimo uguale alla lunghezza dell'array "originale"
    // 'a' deve essere più piccolo di 'b'
    // PREMESSA: ho comunque e sempre un array composta da MINIMO 2 elementi
    // CASO LIMITE: se l'array è proprio di 2 soli elementi, 'a' sarà uguale a 1 e 'b' sarà uguale a 2
    // e la "sezione" dell'array sarà uguale all'array stesso

    // genero 'b'
    var b = numeroRandom(minLen, arrayLength);

    // genero 'a'
    var a = numeroRandom((minLen - 1), (b - 1));

    console.log("a (indice inferiore):", a);
    console.log("b (indice superiore):", b);

    // chiamo la funzione per "sezionare l'array originale"
    var sezionato = arraySection(originale, a, b);

    console.log("array originale:", originale);
    console.log("creo sezione da posizione n.", a, "a posizione n.", b);
    console.log("sezione di array:", sezionato);

    // ------------------------ FUNCTIONs ------------------------------------------

    function arraySection(array, start, end) {
        var section = [];


        return section;
    }

    function numeroRandom(min, max) {
        // genera un numero casuale intero tra min e max
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});