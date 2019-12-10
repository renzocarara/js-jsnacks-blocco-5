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
    // CASO DA CONSIDERARE: i 2 array da fondere possono avere lunghezze diverse

    var numeri = []; // primo array da fondere
    var lettere = []; // secondo array da fondere

    valorizzaArray(); // valorizza i 2 array con lunghezze ed elementi casuali

    var fusione = fondi(numeri, lettere); // invoco funzione che mi ritorna un array come risultato

    console.log("primo array", numeri);
    console.log("secondo array", lettere);
    console.log("risultato della fusione:", fusione);


    // ---------------------------- FUNCTIONs --------------------------------------
    function valorizzaArray() {

        // genero una lunghezza casuale da 1 a 10 per entrambi gli array
        numeriLen = numeroRandom(1, 10);
        lettereLen = numeroRandom(1, 10);

        while (numeri.length < numeriLen) {
            // genero un numeo da 1 a 100
            numeri.push(numeroRandom(1, 100));
        }
        while (lettere.length < lettereLen) {
            // genero una lettera dell'alfabeto
            var caratteri = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            lettera = caratteri.charAt(numeroRandom(0, (caratteri.length - 1)));
            lettere.push(lettera);
        }
    }


    function numeroRandom(min, max) {
        // genera un numero casuale intero tra min e max
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    function fondi(array1, array2) {

        var fuso = []; // array per il risultato finale
        var lunghezzaMinima = Math.min(array1.length, array2.length); // lunghezza array più corto
        var eccedenza = []; // array per contenere eventuali elementi in eccesso

        // verifico se c'è un array più lungo dell'altro, nel caso salvo gli elementi in eccesso dentro un terzo array
        if (array1.length < array2.length) { // array2 è più lungo
            eccedenza = array2.slice(lunghezzaMinima); // metto in un array la parte eccedente di array2
        }
        if (array2.length < array1.length) { // array1 è più lungo
            eccedenza = array1.slice(lunghezzaMinima); // metto in un array la parte eccedente di array1
        }
        // NOTA: potrei non essere entrato in nessuno dei due 'if' qui sopra nel caso in cui
        // i 2 array abbiano la stessa lunghezza

        // ciclo per un numero di volte pari alla lunghezza di dell'array più corto,
        // per essere sicuro di poter leggere un elemento da entrambi gli array
        for (var i = 0; i < lunghezzaMinima; i++) {
            fuso.push(array1[i]);
            fuso.push(array2[i]);
        }

        // adesso mi rimane l'eventuale parte di array "in eccesso"
        // da concatenare all'array finale (risultato della fusione)
        // se gli array hanno lunghezza uguale l'array da concatenare è rimasto vuoto
        fuso = fuso.concat(eccedenza);

        return fuso;
    }
});