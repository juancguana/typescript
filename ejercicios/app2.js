"use strict";
// Funciones Básicas
function sumar1(a, b) {
    return a + b;
}
var contar = function (heroes) {
    return heroes.length;
};
var superHeroes = ['Flash', 'Arrow', 'Superman', 'Linterna Verde'];
contar(superHeroes);
//Parametros por defecto
function llamarBatman(llamar) {
    if (llamar === void 0) { llamar = true; }
    if (llamar) {
        console.log('Batiseñal activada');
    }
}
llamarBatman();
// Rest?
function unirheroes() {
    var personas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        personas[_i] = arguments[_i];
    }
    return personas.join(', ');
}
// Tipo funcion
function noHaceNada(numero, texto, booleano, arreglo) { }
// Crear el tipo de funcion que acepte la funcion "noHaceNada"
var noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
