//JSnack 4
// Scrivi una funzione che fonda due array (con lo stesso
// numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
// -----------------------------------------------------------------------------
$(document).ready(function() {

    var numeri = [3, 5, 7, 9]; // primo array da fondere
    var lettere = ['w', 'x', 'y', 'z']; // secondo array da fondere

    var fusione = fondi(numeri, lettere); // invoco funzione che mi ritorna un array come risultato

    console.log("primo array", numeri);
    console.log("secondo array", lettere);
    console.log("risultato della fusione:", fusione);

    function fondi(array1, array2) {
        var fuso = [];
        for (var i = 0; i < array1.length; i++) {
            // inserisco alternativamente gli elementi dei 2 array in ingresso
            // nell'array che mi conterrà il risultato della fusione
            fuso.push(array1[i]);
            fuso.push(array2[i]);
        }
        return fuso;
    }
});