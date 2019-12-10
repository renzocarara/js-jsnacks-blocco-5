// JSnack 2: Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

$(document).ready(function() {

    var stringa = prompt("dammi una parola:");

    console.log("Parola rovesciata: \"", reverseAstring(stringa), "\"");

    function reverseAstring(stringa) {

        // var array = stringa.split("");
        // console.log("array:", array);
        //
        // var reverseArray = array.reverse();
        // console.log("reverseArray:", reverseArray);
        //
        // var reverseString = reverseArray.join("");
        // console.log("reverseString:", reverseString);
        // return reverseString;

        // codice qui sopra compresso tutto in una linea
        return stringa.split("").reverse().join("");

    }



});