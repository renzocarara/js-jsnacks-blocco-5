// JSnack 1 (blocco 5):
// Crea 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.
$(document).ready(function() {

    var cassetta = [{
        'varieta': 'gialla',
        'peso': 0.5,
        'lunghezza': 15
    }, {
        'varieta': 'verde',
        'peso': 0.3,
        'lunghezza': 25
    }, {
        'varieta': 'gialla',
        'peso': 0.5,
        'lunghezza': 15
    }, {
        'varieta': 'rigata',
        'peso': 0.9,
        'lunghezza': 15
    }, {
        'varieta': 'americana',
        'peso': 1.5,
        'lunghezza': 25
    }, {
        'varieta': 'italiana',
        'peso': 0.5,
        'lunghezza': 15
    }, {
        'varieta': 'bianca',
        'peso': 0.2,
        'lunghezza': 15
    }, {
        'varieta': 'tedesca',
        'peso': 0.8,
        'lunghezza': 20
    }, {
        'varieta': 'gialla',
        'peso': 0.5,
        'lunghezza': 15
    }, {
        'varieta': 'bianca',
        'peso': 0.1,
        'lunghezza': 35
    }];

    var pesoCassetta = 0;
    for (var i = 0; i < cassetta.length; i++) {
        pesoCassetta += cassetta[i].peso;
    }
    console.log("Quantità zucchine in cassetta:", cassetta.length);
    console.log("Peso cassetta:", pesoCassetta, "kg");



});