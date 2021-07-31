"use strict";
function sumar(a, b) {
    return a + b;
}
function saludar(nombre) {
    return 'I am ' + nombre;
}
function salvarMundo() {
    console.log('EL mundo esta salvado!');
}
var miFuncion;
miFuncion = 10;
miFuncion = sumar;
console.log(sumar(5, 5));
miFuncion = saludar;
console.log(miFuncion('Batman'));
miFuncion = salvarMundo;
