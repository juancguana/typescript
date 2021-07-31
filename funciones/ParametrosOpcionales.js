"use strict";
function nombreCompleto1(nombre, apellido) {
    if (apellido) {
        return nombre + ' ' + apellido;
    }
    else {
        return nombre;
    }
}
var nombre1 = nombreCompleto1('Barry', 'Alen');
console.log(nombre1);
