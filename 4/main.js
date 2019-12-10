//JSnack 4
// Scrivi una funzione che fonda due array (con lo stesso
// numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
// -----------------------------------------------------------------------------
$(document).ready(function() {


    // VERSIONE BASE
    // -------------
    // var numeri = [3, 5, 7, 9]; // primo array da fondere
    // var lettere = ['w', 'x', 'y', 'z']; // secondo array da fondere
    //
    // var fusione = fondi(numeri, lettere); // invoco funzione che mi ritorna un array come risultato
    //
    // console.log("primo array", numeri);
    // console.log("secondo array", lettere);
    // console.log("risultato della fusione:", fusione);
    //
    // function fondi(array1, array2) {
    //     var fuso = [];
    //     for (var i = 0; i < array1.length; i++) {
    //         // inserisco alternativamente gli elementi dei 2 array in ingresso
    //         // nell'array che mi conterrà il risultato della fusione
    //         fuso.push(array1[i]);
    //         fuso.push(array2[i]);
    //     }
    //     return fuso;
    // }

    // VERSIONE AMPLIATA
    // -------------------
    // PREMESSA: i 2 array da fondere possono avere lunghezze diverse

    var numeri = [1, 3, 5, 7, 9, 23, 13]; // primo array da fondere
    var lettere = ['w', 'x', 'y', 'z']; // secondo array da fondere

    var fusione = fondi(numeri, lettere); // invoco funzione che mi ritorna un array come risultato

    console.log("primo array", numeri);
    console.log("secondo array", lettere);
    console.log("risultato della fusione:", fusione);

    function fondi(array1, array2) {
        var fuso = [];
        var lunghezzaMinima = array1.length; // assumo che array1 possa essere l'array piu' corto
        var array2PiuLungo = false,
            array1PiuLungo = false;

        // per stabilire qual sarà la lunghzza massima del ciclo di scansione,
        // valuto le lunghezze dei 2 array
        if (array1.length < array2.length) {
            // array2 è più lungo
            lunghezzaMinima = array1.length;
            array2PiuLungo = true;
        }
        if (array2.length < array1.length) {
            // array1 è più lungo
            lunghezzaMinima = array2.length;
            array1PiuLungo = true;
        }
        // potrei non essere entrato in nessuno dei due 'if' qui sopra nel caso in cui
        // i 2 array abbiano la stessa lunghezza

        // ciclo per un numero di volte pari alla lunghezza dell'array più corto,
        // per essere sicuro di poter leggere un elemento da entrambi gli array
        for (var i = 0; i < lunghezzaMinima; i++) {
            fuso.push(array1[i]);
            fuso.push(array2[i]);
        }

        // adesso mi rimane l'eventuale parte di array "in eccesso"
        // da concatenare all'array finale (risultato della fusione)
        // se gli array hanno lunghezza uguale non entro in nessuno dei 2 'if' che seguono

        if (array1PiuLungo) {
            fuso = fuso.concat(array1.slice(lunghezzaMinima, array1.length));
        }

        if (array2PiuLungo) {
            fuso = fuso.concat(array2.slice(lunghezzaMinima, array2.length));
        }

        return fuso;
    }
});